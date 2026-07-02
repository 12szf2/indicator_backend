import express from "express";
import { getOratomeg, upsertOratomeg } from "../services/engedelyezett_oratomeg.service.js";
import { formatResponse } from "../utils/responseFormatter.js";

const router = express.Router();

router.get("/:alapadatok_id/:tanev_kezdete", async (req, res) => {
  try {
    const { alapadatok_id, tanev_kezdete } = req.params;

    if (!alapadatok_id || !tanev_kezdete) {
      return res.status(400).json(formatResponse(400, "Hiányzó paraméterek", null));
    }

    const oratomeg = await getOratomeg(alapadatok_id, parseInt(tanev_kezdete));

    return res.status(200).json(
      formatResponse(200, "Sikeres lekérdezés", oratomeg || {
        alapadatok_id,
        tanev_kezdete: parseInt(tanev_kezdete),
        tanuloi_oratomeg: "",
        felnott_oratomeg: ""
      })
    );
  } catch (error) {
    console.error("Error in getEngedelyezettOratomeg:", error);
    return res.status(500).json(formatResponse(500, "Szerverhiba", null));
  }
});

router.post("/", async (req, res) => {
  try {
    const { alapadatok_id, tanev_kezdete, tanuloi_oratomeg, felnott_oratomeg } = req.body;
    const userId = req.user?.id;

    if (!alapadatok_id || !tanev_kezdete) {
      return res.status(400).json(formatResponse(400, "Hiányzó paraméterek", null));
    }

    const updated = await upsertOratomeg(alapadatok_id, parseInt(tanev_kezdete), tanuloi_oratomeg, felnott_oratomeg, userId);

    import("../services/form_history.service.js").then(({ scheduleSnapshot }) => {
      scheduleSnapshot(alapadatok_id, "engedelyezettOratomeg");
    });

    return res.status(200).json(formatResponse(200, "Sikeres mentés", updated));
  } catch (error) {
    console.error("Error in updateEngedelyezettOratomeg:", error);
    return res.status(500).json(formatResponse(500, "Szerverhiba", null));
  }
});

export default router;
