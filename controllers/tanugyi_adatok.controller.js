import e from "express";
import { getAll, createMany } from "../services/tanugyi_adatok.service.js";

const router = e.Router();

/**
 * @swagger
 * tags:
 *   name: Tanugyi_adatok
 *   description: Educational data management
 *
 * components:
 *   schemas:
 *     TanugyiAdat:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: Unique identifier
 *           example: 1
 *         alapadatok_id:
 *           type: integer
 *           description: School identifier reference
 *           example: 1
 *         tipus:
 *           type: string
 *           description: Type of educational data
 *           example: "lemorzsolódás"
 *         ertek:
 *           type: number
 *           format: float
 *           description: Value of the educational statistic
 *           example: 4.2
 *         ev:
 *           type: string
 *           description: Year of the data
 *           example: "2024"
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Creation timestamp
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Last update timestamp
 *       required:
 *         - alapadatok_id
 *         - tipus
 *         - ertek
 *         - ev
 */

/**
 * @swagger
 * /tanugyi_adatok/{alapadatok_id}/{ev}:
 *   get:
 *     summary: Get educational data by school ID and year
 *     description: Retrieve educational metrics for a specific school and year
 *     tags: [Tanugyi_adatok]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: alapadatok_id
 *         required: true
 *         schema:
 *           type: integer
 *         description: School unique identifier
 *       - in: path
 *         name: ev
 *         required: true
 *         schema:
 *           type: string
 *         description: Year of data
 *     responses:
 *       200:
 *         description: Success - Educational data
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/TanugyiAdat'
 *       401:
 *         description: Unauthorized - Invalid or missing token
 *       500:
 *         description: Internal server error
 */
router.get("/:alapadatok_id/:ev", async (req, res) => {
  try {
    const { alapadatok_id, ev } = req.params;
    const result = await getAll(alapadatok_id, ev);
    res.status(200).json(result);
  } catch (error) {
    console.error("Error fetching tanugyi_adatok:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

/**
 * @swagger
 * /tanugyi_adatok:
 *   post:
 *     summary: Create multiple educational data records
 *     description: Add multiple educational data entries for a school
 *     tags: [Tanugyi_adatok]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - alapadatok_id
 *               - tanugyi_adatok
 *             properties:
 *               alapadatok_id:
 *                 type: integer
 *                 example: 1
 *                 description: School ID reference
 *               tanugyi_adatok:
 *                 type: array
 *                 items:
 *                   type: object
 *                   required:
 *                     - tipus
 *                     - ertek
 *                     - ev
 *                   properties:
 *                     tipus:
 *                       type: string
 *                       example: "lemorzsolódás"
 *                     ertek:
 *                       type: number
 *                       format: float
 *                       example: 4.2
 *                     ev:
 *                       type: string
 *                       example: "2024"
 *     responses:
 *       201:
 *         description: Successfully created
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/TanugyiAdat'
 *       401:
 *         description: Unauthorized - Invalid or missing token
 *       500:
 *         description: Internal server error
 */
router.post("/", async (req, res) => {
  try {
    const { alapadatok_id, tanugyi_adatok } = req.body;
    const result = await createMany(alapadatok_id, tanugyi_adatok);
    res.status(201).json(result);
  } catch (error) {
    console.error("Error creating tanugyi_adatok:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
