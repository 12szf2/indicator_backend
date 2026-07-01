import process from "node:process";

/**
 * Creates a bug report in Trello
 * @param {number|string} userId - The ID of the user reporting the bug
 * @param {Object} bugReportData - The data of the bug report
 * @param {Object} reporterInfo - Name and email of the reporter
 * @param {Object} attachment - The file attachment (multer file object)
 */
export const createBugReport = async (userId, bugReportData, reporterInfo, attachment) => {
  const { title, description, severity, stepsToReproduce, pageUrl, userAgent } = bugReportData;
  const { name, email } = reporterInfo;

  const TRELLO_API_KEY = process.env.TRELLO_API_KEY;
  const TRELLO_API_TOKEN = process.env.TRELLO_API_TOKEN;
  const TRELLO_LIST_ID = process.env.TRELLO_LIST_ID;

  if (!TRELLO_API_KEY || !TRELLO_API_TOKEN || !TRELLO_LIST_ID) {
    console.warn("Trello API credentials missing. Bug report not saved to Trello.");
    throw new Error("Trello API configuration is missing on the server.");
  }

  // Build markdown description
  const desc = `
**Bejelentő:** ${name} (${email})
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
    throw new Error("Nem sikerült létrehozni a hibajegyet a Trello-ban.");
  }

  const card = await createCardResponse.json();
  const cardId = card.id;

  // 2. Upload attachment if exists
  if (attachment) {
    const formData = new FormData();
    const blob = new Blob([attachment.buffer], { type: attachment.mimetype });
    formData.append("file", blob, attachment.originalname);

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

  return { success: true, cardId };
};
