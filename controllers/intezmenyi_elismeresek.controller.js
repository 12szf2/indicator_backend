import e from "express";
import {
  getIntezményiElismeresek,
  getIntezményiElismeresekBySchool,
  createIntezményiElismeresek,
  updateIntezményiElismeresek,
  deleteIntezményiElismeresek,
  getMunkavallalokElismeresek,
  getMunkavallalokElismeresekBySchool,
  upsertMunkavallalokElismeresek,
} from "../services/intezmenyi_elismeresek.service.js";

const router = e.Router();

// ─── Intézményi Elismerések (dinamikus) ──────────────────────────────────────

/**
 * @swagger
 * /api/v1/intezmenyi_elismeresek/{alapadatokId}:
 *   get:
 *     summary: Get all institutional awards for a school (all years)
 *     tags: [IntezményiElismeresek]
 *     security: [{ bearerAuth: [] }]
 *     parameters:
 *       - name: alapadatokId
 *         in: path
 *         required: true
 *         schema: { type: string }
 */
router.get("/:alapadatokId", async (req, res) => {
  try {
    const { alapadatokId } = req.params;
    const data = await getIntezményiElismeresekBySchool(alapadatokId);
    return res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching intezmenyi_elismeresek:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

/**
 * @swagger
 * /api/v1/intezmenyi_elismeresek/{alapadatokId}/{tanev}:
 *   get:
 *     summary: Get institutional awards for a school and year
 *     tags: [IntezményiElismeresek]
 *     security: [{ bearerAuth: [] }]
 */
router.get("/:alapadatokId/:tanev", async (req, res) => {
  try {
    const { alapadatokId, tanev } = req.params;
    const data = await getIntezményiElismeresek(alapadatokId, tanev);
    return res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching intezmenyi_elismeresek by year:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

/**
 * @swagger
 * /api/v1/intezmenyi_elismeresek:
 *   post:
 *     summary: Create a new institutional award record
 *     tags: [IntezményiElismeresek]
 *     security: [{ bearerAuth: [] }]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [alapadatok_id, tanev_kezdete, dij_neve]
 *             properties:
 *               alapadatok_id: { type: string }
 *               tanev_kezdete: { type: integer }
 *               dij_neve: { type: string }
 *               darabszam: { type: integer }
 */
router.post("/", async (req, res) => {
  try {
    const { alapadatok_id, tanev_kezdete, dij_neve, darabszam = 0 } = req.body;
    if (!alapadatok_id || !tanev_kezdete || !dij_neve) {
      return res.status(400).json({ error: "alapadatok_id, tanev_kezdete és dij_neve megadása kötelező" });
    }
    const data = await createIntezményiElismeresek(alapadatok_id, tanev_kezdete, dij_neve, darabszam);
    return res.status(201).json(data);
  } catch (error) {
    console.error("Error creating intezmenyi_elismeresek:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

/**
 * @swagger
 * /api/v1/intezmenyi_elismeresek/{id}:
 *   put:
 *     summary: Update an institutional award record
 *     tags: [IntezményiElismeresek]
 *     security: [{ bearerAuth: [] }]
 */
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { darabszam, dij_neve } = req.body;
    const data = await updateIntezményiElismeresek(id, darabszam, dij_neve);
    return res.status(200).json(data);
  } catch (error) {
    console.error("Error updating intezmenyi_elismeresek:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

/**
 * @swagger
 * /api/v1/intezmenyi_elismeresek/{id}:
 *   delete:
 *     summary: Delete an institutional award record
 *     tags: [IntezményiElismeresek]
 *     security: [{ bearerAuth: [] }]
 */
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await deleteIntezményiElismeresek(id);
    return res.status(204).send();
  } catch (error) {
    console.error("Error deleting intezmenyi_elismeresek:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
