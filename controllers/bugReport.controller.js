import express from "express";
import multer from "multer";
import "dotenv/config";

const bugReportRouter = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

bugReportRouter.post("/", upload.single("attachment"), async (req, res) => {
  try {
    const { title, description, severity, stepsToReproduce, pageUrl, userAgent } = req.body;
    const file = req.file;

    const TRELLO_API_KEY = process.env.TRELLO_API_KEY;
    const TRELLO_API_TOKEN = process.env.TRELLO_API_TOKEN;
    const TRELLO_LIST_ID = process.env.TRELLO_LIST_ID;

    if (!TRELLO_API_KEY || !TRELLO_API_TOKEN || !TRELLO_LIST_ID) {
      console.warn("Trello API credentials missing. Bug report not saved to Trello.");
      return res.status(500).json({ message: "Trello API configuration is missing on the server." });
    }

    // Build markdown description
    const desc = `
**Súlyosság:** ${severity}
**Jelentve erről az oldalról:** ${pageUrl || "Ismeretlen"}
**Böngésző / Rendszer:** ${userAgent || "Ismeretlen"}

---
### Leírás
${description}

${stepsToReproduce ? `### Reprodukálás lépései\n${stepsToReproduce}` : ""}
`;

    // 1. Create the Trello Card
    const createCardResponse = await fetch(`https://api.trello.com/1/cards?idList=${TRELLO_LIST_ID}&key=${TRELLO_API_KEY}&token=${TRELLO_API_TOKEN}`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: title || "Új hibabejelentés",
        desc: desc,
        pos: "top"
      })
    });

    if (!createCardResponse.ok) {
      const errorText = await createCardResponse.text();
      console.error("Trello API Error creating card:", errorText);
      return res.status(500).json({ message: "Nem sikerült létrehozni a hibajegyet." });
    }

    const card = await createCardResponse.json();
    const cardId = card.id;

    // 2. Upload attachment if exists
    if (file) {
      const formData = new FormData();
      const blob = new Blob([file.buffer], { type: file.mimetype });
      // In Node's native fetch, setting name of file inside FormData:
      formData.append("file", blob, file.originalname);

      const uploadResponse = await fetch(`https://api.trello.com/1/cards/${cardId}/attachments?key=${TRELLO_API_KEY}&token=${TRELLO_API_TOKEN}`, {
        method: 'POST',
        body: formData
      });

      if (!uploadResponse.ok) {
        const errorText = await uploadResponse.text();
        console.error("Trello API Error uploading attachment:", errorText);
        // We still return success as the card was created
      }
    }

    res.status(200).json({ message: "Hibabejelentés sikeresen továbbítva a Trello-ba.", cardId });

  } catch (error) {
    console.error("Bug report endpoint error:", error);
    res.status(500).json({ message: "Szerverhiba történt a hibabejelentés feldolgozása során." });
  }
});

export default bugReportRouter;
