import e from "express";
import { getAll, createMany } from "../services/tanugyi_adatok.service.js";

const router = e.Router();

router.get("/:alapadatok_id/:ev", async (req, res) => {
  try {
    const { alapadatok_id, ev } = req.params;
    const result = await getAll(alapadatok_id, ev);
    res.status(200).json(result);
  } catch (error) {
    console.error("Error fetching tanugyi_adatok:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.post("/", async (req, res) => {
  try {
    const { alapadatok_id, tanugyi_adatok } = req.body;
    const result = await createMany(alapadatok_id, tanugyi_adatok);
    res.status(201).json(result);
  } catch (error) {
    console.error("Error creating tanugyi_adatok:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
