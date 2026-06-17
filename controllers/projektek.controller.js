import e from "express";
import {
  getAllByAlapadatok,
  create,
  update,
  deleteById
} from "../services/projektek.service.js";

const router = e.Router();

/**
 * @swagger
 * tags:
 *   name: Projektek
 *   description: Projektek management
 */

/**
 * @swagger
 * /projektek:
 *   get:
 *     summary: Get projektek by school and optional year
 *     tags: [Projektek]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: alapadatok_id
 *         required: true
 *         schema:
 *           type: string
 *       - in: query
 *         name: tanev_kezdete
 *         required: false
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Success
 *       500:
 *         description: Server error
 */
router.get("/", async (req, res) => {
  try {
    const { alapadatok_id, tanev_kezdete } = req.query;
    if (!alapadatok_id) {
      return res.status(400).json({ error: "alapadatok_id is required" });
    }
    const data = await getAllByAlapadatok(alapadatok_id, tanev_kezdete);

    return res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching projektek data:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

/**
 * @swagger
 * /projektek:
 *   post:
 *     summary: Create projekt
 *     tags: [Projektek]
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
 *               agazat_szakma:
 *                 type: string
 *               projekthetek_neve:
 *                 type: string
 *               projekthetek_ora:
 *                 type: string
 *               projektnapok_neve:
 *                 type: string
 *               projektnapok_ora:
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
      agazat_szakma,
      projekthetek_neve,
      projekthetek_ora,
      projektnapok_neve,
      projektnapok_ora
    } = req.body;

    const createdData = await create(
      alapadatok_id,
      tanev_kezdete,
      agazat_szakma,
      projekthetek_neve,
      projekthetek_ora,
      projektnapok_neve,
      projektnapok_ora
    );

    return res.status(201).json(createdData);
  } catch (error) {
    console.error("Error creating projektek data:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

/**
 * @swagger
 * /projektek/{id}:
 *   put:
 *     summary: Update projekt
 *     tags: [Projektek]
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
 *               projekthetek_neve:
 *                 type: string
 *               projekthetek_ora:
 *                 type: string
 *               projektnapok_neve:
 *                 type: string
 *               projektnapok_ora:
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
      projekthetek_neve,
      projekthetek_ora,
      projektnapok_neve,
      projektnapok_ora
    } = req.body;

    const updatedData = await update(
      id,
      projekthetek_neve,
      projekthetek_ora,
      projektnapok_neve,
      projektnapok_ora
    );

    return res.status(200).json(updatedData);
  } catch (error) {
    console.error("Error updating projektek data:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

/**
 * @swagger
 * /projektek/{id}:
 *   delete:
 *     summary: Delete projekt
 *     tags: [Projektek]
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
    console.error("Error deleting projektek data:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
