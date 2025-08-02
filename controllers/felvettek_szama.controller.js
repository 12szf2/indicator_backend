import e from "express";
import {
  getAll,
  create,
  getById,
  update,
} from "../services/felvettek_szama.service.js";

const router = e.Router();

/**
 * @swagger
 * tags:
 *   name: Felvettek_szama
 *   description: Student admission data management
 *
 * components:
 *   schemas:
 *     FelvettekSzama:
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
 *         tanev_kezdete:
 *           type: integer
 *           description: School year start
 *           example: 2024
 *         szakmaId:
 *           type: integer
 *           description: Professional field ID reference
 *           example: 1
 *         szakiranyId:
 *           type: integer
 *           description: Specialization ID reference
 *           example: 2
 *         jelentkezo_letszam:
 *           type: integer
 *           description: Number of applicants
 *           example: 150
 *         felveheto_letszam:
 *           type: integer
 *           description: Maximum capacity
 *           example: 90
 *         felvett_letszam:
 *           type: integer
 *           description: Number of admitted students
 *           example: 85
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
 *         - tanev_kezdete
 *         - szakmaId
 *         - szakiranyId
 *         - jelentkezo_letszam
 *         - felveheto_letszam
 *         - felvett_letszam
 */

/**
 * @swagger
 * /felvettek_szama:
 *   get:
 *     summary: Get all admission data
 *     description: Retrieve a list of all student admission data
 *     tags: [Felvettek_szama]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Success - List of student admission data
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/FelvettekSzama'
 *       401:
 *         description: Unauthorized - Invalid or missing token
 *       500:
 *         description: Internal server error
 */
router.get("/:tanev", async (req, res) => {
  try {
    const data = await getAll(req.params.tanev);
    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching felvettek_szama:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

/**
 * @swagger
 * /felvettek_szama/{alapadatok_id}:
 *   get:
 *     summary: Get admission data by school ID
 *     description: Retrieve admission data for a specific school
 *     tags: [Felvettek_szama]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: alapadatok_id
 *         required: true
 *         schema:
 *           type: integer
 *         description: School unique identifier
 *     responses:
 *       200:
 *         description: Success - School admission data
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/FelvettekSzama'
 *       404:
 *         description: Data not found
 *       401:
 *         description: Unauthorized - Invalid or missing token
 *       500:
 *         description: Internal server error
 */
router.get("/:alapadatok_id/:tanev", async (req, res) => {
  try {
    const data = await getById(req.params.alapadatok_id, req.params.tanev);
    if (!data) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching felvettek_szama by ID:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

/**
 * @swagger
 * /felvettek_szama:
 *   post:
 *     summary: Create new admission record
 *     description: Add a new student admission record
 *     tags: [Felvettek_szama]
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
 *               - tanev_kezdete
 *               - szakmaNev
 *               - szakiranyNev
 *               - jelentkezo_letszam
 *               - felveheto_letszam
 *               - felvett_letszam
 *             properties:
 *               alapadatok_id:
 *                 type: integer
 *                 example: 1
 *               tanev_kezdete:
 *                 type: integer
 *                 example: 2024
 *               szakmaNev:
 *                 type: string
 *                 example: "Informatikai rendszer- és alkalmazás-üzemeltető technikus"
 *               szakiranyNev:
 *                 type: string
 *                 example: "Informatika és távközlés"
 *               jelentkezo_letszam:
 *                 type: integer
 *                 example: 150
 *               felveheto_letszam:
 *                 type: integer
 *                 example: 90
 *               felvett_letszam:
 *                 type: integer
 *                 example: 85
 *     responses:
 *       201:
 *         description: Successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/FelvettekSzama'
 *       401:
 *         description: Unauthorized - Invalid or missing token
 *       500:
 *         description: Internal server error
 */
router.post("/", async (req, res) => {
  try {
    const data = await create(req.body);
    res.status(201).json(data);
  } catch (error) {
    console.error("Error creating felvettek_szama:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updatedData = await update(req.params.id, req.body);
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    console.error("Error updating felvettek_szama:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

export default router;
