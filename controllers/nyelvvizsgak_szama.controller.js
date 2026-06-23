import e from "express";
import {
  getAllByAlapadatok,
  create,
  update,
  deleteById
} from "../services/nyelvvizsgak_szama.service.js";

const router = e.Router();

/**
 * @swagger
 * tags:
 *   name: NyelvvizsgakSzama
 *   description: Nyelvvizsgák száma (Indikátor 28)
 */

/**
 * @swagger
 * /nyelvvizsgak_szama/{alapadatokId}/{tanev}:
 *   get:
 *     summary: Get nyelvvizsgak_szama by school and year
 *     tags: [NyelvvizsgakSzama]
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
    console.error("Error fetching nyelvvizsgak_szama data:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

/**
 * @swagger
 * /nyelvvizsgak_szama:
 *   post:
 *     summary: Create nyelvvizsgak_szama
 *     tags: [NyelvvizsgakSzama]
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
 *               osztaly:
 *                 type: string
 *               kozepfoku_angol:
 *                 type: integer
 *               felsofoku_angol:
 *                 type: integer
 *               kozepfoku_nemet:
 *                 type: integer
 *               felsofoku_nemet:
 *                 type: integer
 *               egyeb_nyelv:
 *                 type: string
 *               egyeb_fo:
 *                 type: integer
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
    console.error("Error creating nyelvvizsgak_szama data:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

/**
 * @swagger
 * /nyelvvizsgak_szama/{id}:
 *   put:
 *     summary: Update nyelvvizsgak_szama
 *     tags: [NyelvvizsgakSzama]
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
 *               osztaly:
 *                 type: string
 *               kozepfoku_angol:
 *                 type: integer
 *               felsofoku_angol:
 *                 type: integer
 *               kozepfoku_nemet:
 *                 type: integer
 *               felsofoku_nemet:
 *                 type: integer
 *               egyeb_nyelv:
 *                 type: string
 *               egyeb_fo:
 *                 type: integer
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
    console.error("Error updating nyelvvizsgak_szama data:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

/**
 * @swagger
 * /nyelvvizsgak_szama/{id}:
 *   delete:
 *     summary: Delete nyelvvizsgak_szama
 *     tags: [NyelvvizsgakSzama]
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
    console.error("Error deleting nyelvvizsgak_szama data:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
