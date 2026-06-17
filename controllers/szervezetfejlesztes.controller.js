import * as szervezetfejlesztesService from "../services/szervezetfejlesztes.service.js";
import express from "express";

const router = express.Router();

// GET /api/v1/szervezetfejlesztes/:alapadatokId/:tanev
router.get("/:alapadatokId/:tanev", async (req, res, next) => {
  try {
    const { alapadatokId, tanev } = req.params;
    const records = await szervezetfejlesztesService.getSzervezetfejlesztes(
      alapadatokId,
      tanev
    );
    res.status(200).json(records);
  } catch (error) {
    next(error);
  }
});

// POST /api/v1/szervezetfejlesztes
router.post("/", async (req, res, next) => {
  try {
    const data = req.body;
    const newRecord = await szervezetfejlesztesService.createSzervezetfejlesztes(data);
    res.status(201).json(newRecord);
  } catch (error) {
    next(error);
  }
});

// PUT /api/v1/szervezetfejlesztes/:id
router.put("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const updatedRecord = await szervezetfejlesztesService.updateSzervezetfejlesztes(
      id,
      data
    );
    res.status(200).json(updatedRecord);
  } catch (error) {
    next(error);
  }
});

// DELETE /api/v1/szervezetfejlesztes/:id
router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    await szervezetfejlesztesService.deleteSzervezetfejlesztes(id);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
});

export default router;
