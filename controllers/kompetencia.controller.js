import e from "express";
import { getAll, create, getById } from "../services/kompetencia.service.js";

const router = e.Router();

router.get("/", async (req, res) => {
  const data = await getAll();

  res.status(200).json(data);
});

router.get("/:alapadatok_id", async (req, res) => {
  const data = await getById(req.params.alapadatok_id);

  res.status(200).json(data);
});

router.post("/", async (req, res) => {
  try {
    const {
      alapadatok_id,
      tanev_kezdete,
      mat_orsz_p,
      szoveg_orsz_p,
      mat_int_p,
      szoveg_int_p,
      kepzes_forma,
    } = req.body;

    const data = await create(
      alapadatok_id,
      tanev_kezdete,
      mat_orsz_p,
      szoveg_orsz_p,
      mat_int_p,
      szoveg_int_p,
      kepzes_forma
    );

    res.status(201).json(data);
  } catch (error) {
    console.error(error);
    res.status(400).json(error);
  }
});

export default router;
