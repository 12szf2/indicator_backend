import express from "express";
import { getOratomeg, upsertOratomeg } from "../services/engedelyezett_oratomeg.service.js";
import { scheduleSnapshot } from "../services/form_history.service.js";

const router = express.Router();

router.get("/:alapadatok_id/:tanev_kezdete", async (req, res) => {
  try {
    const { alapadatok_id, tanev_kezdete } = req.params;

    if (!alapadatok_id || !tanev_kezdete) {
      return res.status(400).json({ error: "Hiányzó paraméterek" });
    }

    const oratomeg = await getOratomeg(alapadatok_id, parseInt(tanev_kezdete));

    return res.status(200).json(
      oratomeg || {
        alapadatok_id,
        tanev_kezdete: parseInt(tanev_kezdete),
        tanuloi_oratomeg: "",
        felnott_oratomeg: ""
      }
    );
  } catch (error) {
    console.error("Error in getEngedelyezettOratomeg:", error);
    return res.status(500).json({ error: "Szerverhiba" });
  }
});

router.post("/", async (req, res) => {
  try {
    const { alapadatok_id, tanev_kezdete, tanuloi_oratomeg, felnott_oratomeg } = req.body;
    const userId = req.user?.id;

    if (!alapadatok_id || !tanev_kezdete) {
      return res.status(400).json({ error: "Hiányzó paraméterek" });
    }

    const updated = await upsertOratomeg(alapadatok_id, parseInt(tanev_kezdete), tanuloi_oratomeg, felnott_oratomeg, userId);

    scheduleSnapshot(alapadatok_id, "engedelyezettOratomeg");

    return res.status(200).json(updated);
  } catch (error) {
    console.error("Error in updateEngedelyezettOratomeg:", error);
    return res.status(500).json({ error: "Szerverhiba" });
  }
});

export default router;
