import e from "express";
import {
  getAllByAlapadatok,
  create,
  update,
  deleteById
} from "../services/szakkepzes_zolditese.service.js";

const router = e.Router();

/**
 * @swagger
 * tags:
 *   name: SzakkepzesZolditese
 *   description: SzakkepzesZolditese management
 */

/**
 * @swagger
 * /szakkepzes_zolditese/{alapadatokId}/{tanev}:
 *   get:
 *     summary: Get szakkepzes zolditese by school and year
 *     tags: [SzakkepzesZolditese]
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
    const alapadatokId = req.params.alapadatokId;
    const tanev = req.params.tanev;
    const data = await getAllByAlapadatok(alapadatokId, tanev);

    return res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching szakkepzes_zolditese data:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

/**
 * @swagger
 * /szakkepzes_zolditese:
 *   post:
 *     summary: Create szakkepzes zolditese
 *     tags: [SzakkepzesZolditese]
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
 *               kategoria:
 *                 type: string
 *               tevekenyseg_neve:
 *                 type: string
 *               resztvevok_szama:
 *                 type: string
 *     responses:
 *       201:
 *         description: Created
 *       500:
 *         description: Server error
 */
router.post("/", async (req, res) => {
  try {
    const {
      alapadatok_id,
      tanev_kezdete,
      kategoria,
      tevekenyseg_neve,
      resztvevok_szama
    } = req.body;

    const createdData = await create(
      alapadatok_id,
      tanev_kezdete,
      kategoria,
      tevekenyseg_neve,
      resztvevok_szama
    );

    return res.status(201).json(createdData);
  } catch (error) {
    console.error("Error creating szakkepzes_zolditese data:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

/**
 * @swagger
 * /szakkepzes_zolditese/{id}:
 *   put:
 *     summary: Update szakkepzes zolditese
 *     tags: [SzakkepzesZolditese]
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
 *               alapadatok_id:
 *                 type: string
 *               tanev_kezdete:
 *                 type: integer
 *               kategoria:
 *                 type: string
 *               tevekenyseg_neve:
 *                 type: string
 *               resztvevok_szama:
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
    const {
      alapadatok_id,
      tanev_kezdete,
      kategoria,
      tevekenyseg_neve,
      resztvevok_szama
    } = req.body;

    const updatedData = await update(
      id,
      alapadatok_id,
      tanev_kezdete,
      kategoria,
      tevekenyseg_neve,
      resztvevok_szama
    );

    return res.status(200).json(updatedData);
  } catch (error) {
    console.error("Error updating szakkepzes_zolditese data:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

/**
 * @swagger
 * /szakkepzes_zolditese/{id}:
 *   delete:
 *     summary: Delete szakkepzes zolditese
 *     tags: [SzakkepzesZolditese]
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
    console.error("Error deleting szakkepzes_zolditese data:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
