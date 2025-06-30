import {
  createSzakkepzesiStatisztika,
  deleteSzakkepzesiStatisztika,
  getSzakkepzesiStatisztika,
  updateSzakkepzesiStatisztika,
  getAll,
} from "../services/szmsz.service.js";
import e from "express";

const router = e.Router();

router.get("/:tanev", async (req, res) => {
  try {
    const { tanev } = req.params;
    const szakkepzesiStatisztika = await getAll(tanev);
    res.status(200).json(szakkepzesiStatisztika);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

router.get("/:alapadatokId/:tanev", async (req, res) => {
  try {
    const { alapadatokId, tanev } = req.params;
    const szakkepzesiStatisztika = await getSzakkepzesiStatisztika(
      alapadatokId,
      tanev
    );
    res.status(200).json(szakkepzesiStatisztika);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

router.post("/", async (req, res) => {
  try {
    const {
      alapadatok_id,
      szakirany_id,
      szakma_id,
      statisztika_tipus,
      letszam,
      createBy,
    } = req.body;

    if (
      !alapadatok_id ||
      !szakirany_id ||
      !szakma_id ||
      !statisztika_tipus ||
      letszam === undefined
    ) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const szakkepzesiStatisztika = await createSzakkepzesiStatisztika(
      alapadatok_id,
      szakirany_id,
      szakma_id,
      statisztika_tipus,
      letszam,
      createBy
    );

    res.status(201).json(szakkepzesiStatisztika);
  } catch (error) {
    res.status(500).json({ error: "Failed to create data" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const {
      alapadatok_id,
      szakirany_id,
      szakma_id,
      statisztika_tipus,
      letszam,
      createBy,
    } = req.body;

    if (
      !alapadatok_id ||
      !szakirany_id ||
      !szakma_id ||
      !statisztika_tipus ||
      letszam === undefined
    ) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const updatedSzakkepzesiStatisztika = await updateSzakkepzesiStatisztika(
      id,
      alapadatok_id,
      szakirany_id,
      szakma_id,
      statisztika_tipus,
      letszam,
      createBy
    );

    res.status(200).json(updatedSzakkepzesiStatisztika);
  } catch (error) {
    res.status(500).json({ error: "Failed to update data" });
  }
});

export default router;
