import e from "express";
import {
  getAllByAlapadatok,
  create,
  update,
  deleteById
} from "../services/egyuttmukudesek_szama.service.js";

const router = e.Router();

/**
 * @swagger
 * tags:
 *   name: EgyuttmukudesekSzama
 *   description: Együttműködések száma (Indikátor 32)
 */

/**
 * @swagger
 * /egyuttmukudesek_szama/{alapadatokId}/{tanev}:
 *   get:
 *     summary: Get egyuttmukudesek_szama by school and year
 *     tags: [EgyuttmukudesekSzama]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: alapadatokId
 *         required: true
 *         schema:
 *           type: string
 *       - in: path
 *         name: tanev
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Success
 *       500:
 *         description: Server error
 */
router.get("/:alapadatokId/:tanev", async (req, res) => {
  try {
    const { alapadatokId, tanev } = req.params;
    if (!alapadatokId || !tanev) {
      return res.status(400).json({ error: "alapadatokId and tanev are required" });
    }
    const data = await getAllByAlapadatok(alapadatokId, parseInt(tanev));

    return res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching egyuttmukudesek_szama data:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

/**
 * @swagger
 * /egyuttmukudesek_szama:
 *   post:
 *     summary: Create egyuttmukudesek_szama
 *     tags: [EgyuttmukudesekSzama]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               alapadatok_id:
 *                 type: string
 *               tanev_kezdete:
 *                 type: integer
 *               tablazat_szam:
 *                 type: integer
 *               felsooktatasi_intezmeny_neve:
 *                 type: string
 *               egyuttmukodes_formaja:
 *                 type: string
 *               erintett_evfolyam:
 *                 type: string
 *               erintett_tanulok_szama:
 *                 type: integer
 *               felsooktataba_lepo_szama:
 *                 type: integer
 *               vegzos_technikumi_szama:
 *                 type: integer
 *               tovabbtanulok_aranya:
 *                 type: string
 *     responses:
 *       201:
 *         description: Created
 *       500:
 *         description: Server error
 */
router.post("/", async (req, res) => {
  try {
    const createdData = await create(req.body);
    return res.status(201).json(createdData);
  } catch (error) {
    console.error("Error creating egyuttmukudesek_szama data:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

/**
 * @swagger
 * /egyuttmukudesek_szama/{id}:
 *   put:
 *     summary: Update egyuttmukudesek_szama
 *     tags: [EgyuttmukudesekSzama]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               tablazat_szam:
 *                 type: integer
 *               felsooktatasi_intezmeny_neve:
 *                 type: string
 *               egyuttmukodes_formaja:
 *                 type: string
 *               erintett_evfolyam:
 *                 type: string
 *               erintett_tanulok_szama:
 *                 type: integer
 *               felsooktataba_lepo_szama:
 *                 type: integer
 *               vegzos_technikumi_szama:
 *                 type: integer
 *               tovabbtanulok_aranya:
 *                 type: string
 *     responses:
 *       200:
 *         description: Updated
 *       500:
 *         description: Server error
 */
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = await update(id, req.body);
    return res.status(200).json(updatedData);
  } catch (error) {
    console.error("Error updating egyuttmukudesek_szama data:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

/**
 * @swagger
 * /egyuttmukudesek_szama/{id}:
 *   delete:
 *     summary: Delete egyuttmukudesek_szama
 *     tags: [EgyuttmukudesekSzama]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Deleted
 *       500:
 *         description: Server error
 */
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await deleteById(id);

    return res.status(204).send();
  } catch (error) {
    console.error("Error deleting egyuttmukudesek_szama data:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
