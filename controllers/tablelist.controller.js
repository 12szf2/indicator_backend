import e from "express";
import { getAll, create, update } from "../services/tablelist.service.js";

const router = e.Router();

router.get("/", async (req, res) => {
  const data = await getAll();

  res.status(200).json(data);
});

router.post("/", async (req, res) => {
  const { name, isAvailable } = req.body;

  if (!name || typeof isAvailable !== "boolean") {
    return res.status(400).json({ error: "Invalid table data." });
  }

  try {
    const newTable = await create(name, isAvailable);
    res.status(201).json(newTable);
  } catch (error) {
    console.error("Error creating table:", error);
    res.status(500).json({ error: "Failed to create table." });
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { name, isAvailable } = req.body;
  if (!name || typeof isAvailable !== "boolean") {
    return res.status(400).json({ error: "Invalid table data." });
  }

  try {
    const updatedTable = await update(id, name, isAvailable);
    res.status(200).json(updatedTable);
  } catch (error) {
    console.error("Error updating table:", error);
    res.status(500).json({ error: "Failed to update table." });
  }
});

export default router;
