import {
  getAll,
  getById,
  create,
  deleteMany,
} from "../services/tanulo_letszam.service.js";
import e from "express";

const router = e.Router();

router.get("/", async (req, res) => {
  try {
    const data = await getAll();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const data = await getById(id);
    if (data.length === 0) {
      return res.status(404).json({ error: "Data not found" });
    }
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/", async (req, res) => {
  const { letszam, alapadatok_id, jogv_tipus, szakirany, tanev_kezdete } =
    req.body;

  if (
    isNaN(letszam) ||
    !alapadatok_id ||
    isNaN(jogv_tipus) ||
    !szakirany ||
    isNaN(tanev_kezdete)
  ) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const newEntry = await create(
      letszam,
      alapadatok_id,
      jogv_tipus,
      szakirany,
      tanev_kezdete
    );
    res.status(201).json(newEntry);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.delete("/:id/:year", async (req, res) => {
  const id = req.params.id;
  const year = parseInt(req.params.year);

  if (!id || isNaN(year)) {
    return res.status(400).json({ error: "Invalid ID or year format" });
  }

  try {
    const result = await deleteMany(id, year);
    if (result.count === 0) {
      return res.status(404).json({ error: "Data not found" });
    }
    res.status(200).json({ message: "Data deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});
export default router;
