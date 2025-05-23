import express from "express";
import {
  add,
  getAll,
  getById,
  update,
} from "../services/alapadatok.service.js";

const router = express.Router();

// http://localhost:3300/api/v1/alapadatok/

router.get("/", async (req, res) => {
  try {
    const data = await getAll();
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Szerver hiba!", error: error });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;

    if (!id)
      return res.status(400).json({ message: "A paraméter nem megfelelő" });

    const data = await getById(id);
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Szerver hiba!", error: error });
  }
});

router.post("/", async (req, res) => {
  try {
    const { iskola_neve, intezmeny_tipus } = req.body;

    if (!iskola_neve || !intezmeny_tipus)
      return res.status(400).json({ message: "Hiányos adatok!" });

    await add(iskola_neve, intezmeny_tipus);

    res.status(201).json({ message: "Sikeresen létrehozva!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Szerver hiba!", error: error });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const { iskola_neve, intezmeny_tipus } = req.body;

    if (!id || !iskola_neve || !intezmeny_tipus)
      return res.status(400).json({ message: "Hiányos adatok!" });

    await update(id, iskola_neve, intezmeny_tipus);

    res.status(200).json({ message: "Sikeresen frissítve!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Szerver hiba!", error: error });
  }
});

export default router;
