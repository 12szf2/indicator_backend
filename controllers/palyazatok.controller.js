import express from "express";
import {
  getByAlapadatokIdAndTanev,
  getByAlapadatokId,
  create,
  remove,
  update,
} from "../services/palyazatok.service.js";

const router = express.Router();

// Helper to serialize BigInt
const serialize = (obj) => {
  return JSON.parse(
    JSON.stringify(obj, (key, value) =>
      typeof value === "bigint" ? Number(value) : value
    )
  );
};

router.get("/alapadatok/:alapadatokId", async (req, res) => {
  try {
    const { alapadatokId } = req.params;
    const data = await getByAlapadatokId(alapadatokId);
    res.status(200).json(serialize(data));
  } catch (error) {
    console.error("Error fetching palyazatok by alapadatok:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.get("/:alapadatokId/:tanev", async (req, res) => {
  try {
    const { alapadatokId, tanev } = req.params;
    const data = await getByAlapadatokIdAndTanev(alapadatokId, tanev);
    res.status(200).json(serialize(data));
  } catch (error) {
    console.error("Error fetching palyazatok:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const created = await create(data);
    res.status(201).json(serialize(created));
  } catch (error) {
    console.error("Error creating palyazat:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await remove(id);
    res.status(200).json(serialize(deleted));
  } catch (error) {
    console.error("Error deleting palyazat:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const updated = await update(id, data);
    res.status(200).json(serialize(updated));
  } catch (error) {
    console.error("Error updating palyazat:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export default router;
