import e from "express";
import {
  getAll,
  create,
  getById,
} from "../services/felvettek_szama.service.js";

const router = e.Router();

router.get("/", async (req, res) => {
  try {
    const data = await getAll();
    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching felvettek_szama:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.get("/:alapadatok_id", async (req, res) => {
  try {
    const data = await getById(req.params.alapadatok_id);
    if (!data) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching felvettek_szama by ID:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.post("/", async (req, res) => {
  try {
    const data = await create(req.body);
    res.status(201).json(data);
  } catch (error) {
    console.error("Error creating felvettek_szama:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

export default router;
