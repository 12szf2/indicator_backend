import e from "express";
import {
  getAll,
  getAllByAlapadatok,
  create,
  deleteAllByAlapadatok,
} from "../services/vizsgaeredmenyek.service.js";

const router = e.Router();

/**
 * @swagger
 * tags:
 *   name: Vizsgaeredmenyek
 *   description: Exam results data management
 *
 * components:
 *   schemas:
 *     Vizsgaeredmenyek:
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
 *           description: School year start year
 *           example: 2023
 *         vizsga_tipus:
 *           type: string
 *           description: Exam type
 *           example: "Érettségi"
 *         targy:
 *           type: string
 *           description: Subject
 *           example: "Matematika"
 *         atlag_eredmeny:
 *           type: number
 *           format: float
 *           description: Average result
 *           example: 3.8
 *         resztvevok_szama:
 *           type: integer
 *           description: Number of participants
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
 */

/**
 * @swagger
 * /vizsgaeredmenyek/{tanev}:
 *   get:
 *     summary: Get exam results data by school year
 *     description: Retrieve exam results data for a specific school year and previous 4 years
 *     tags: [Vizsgaeredmenyek]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: tanev
 *         required: true
 *         description: The school year end (e.g., 2024 for 2023-2024 school year)
 *         schema:
 *           type: integer
 *           example: 2024
 *     responses:
 *       200:
 *         description: Exam results data retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Vizsgaeredmenyek'
 *       401:
 *         description: Unauthorized - Invalid or missing token
 *       500:
 *         description: Server error
 */
router.get("/:tanev", async (req, res) => {
  try {
    const tanev = req.params.tanev;
    const data = await getAll(tanev);

    return res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching vizsgaeredmenyek data:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

/**
 * @swagger
 * /vizsgaeredmenyek/{alapadatokId}/{tanev}:
 *   get:
 *     summary: Get exam results data by school and year
 *     description: Retrieve exam results data for a specific school and year
 *     tags: [Vizsgaeredmenyek]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: alapadatokId
 *         required: true
 *         description: Basic data ID reference
 *         schema:
 *           type: string
 *           example: "60d5ecb74f0b2c1234567890"
 *       - in: path
 *         name: tanev
 *         required: true
 *         description: The school year start (e.g., 2023 for 2023-2024 school year)
 *         schema:
 *           type: integer
 *           example: 2023
 *     responses:
 *       200:
 *         description: Exam results data retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Vizsgaeredmenyek'
 *       401:
 *         description: Unauthorized - Invalid or missing token
 *       500:
 *         description: Server error
 *   delete:
 *     summary: Delete exam results data by school and year
 *     description: Delete all exam results data for a specific school and school year
 *     tags: [Vizsgaeredmenyek]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: alapadatokId
 *         required: true
 *         description: Basic data ID reference
 *         schema:
 *           type: string
 *           example: "60d5ecb74f0b2c1234567890"
 *       - in: path
 *         name: tanev
 *         required: true
 *         description: The school year start (e.g., 2023 for 2023-2024 school year)
 *         schema:
 *           type: integer
 *           example: 2023
 *     responses:
 *       204:
 *         description: Exam results data deleted successfully
 *       401:
 *         description: Unauthorized - Invalid or missing token
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
    console.error("Error fetching vizsgaeredmenyek data:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

/**
 * @swagger
 * /vizsgaeredmenyek:
 *   post:
 *     summary: Create exam results data
 *     tags: [Vizsgaeredmenyek]
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
 *                 description: Basic data ID reference
 *                 example: "60d5ecb74f0b2c1234567890"
 *               tanev_kezdete:
 *                 type: string
 *                 description: Academic year start
 *                 example: "2023"
 *               reszszakmat_szerezok_szama:
 *                 type: integer
 *                 description: Number of students acquiring partial qualifications
 *                 example: 32
 *               vizsgaeredmenyek_tanuloi_osszletszam:
 *                 type: integer
 *                 description: Total number of students taking exams
 *                 example: 85
 *             required:
 *               - alapadatok_id
 *               - tanev_kezdete
 *     responses:
 *       201:
 *         description: Exam results data created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Vizsgaeredmenyek'
 *       401:
 *         description: Unauthorized - Invalid or missing authentication token
 *       400:
 *         description: Bad request - Invalid input data
 *       500:
 *         description: Internal server error
 */
router.post("/", async (req, res) => {
  try {
    const {
      alapadatok_id,
      tanev_kezdete,
      reszszakmat_szerezok_szama,
      vizsgaeredmenyek_tanuloi_osszletszam,
    } = req.body;

    const createdData = await create(
      alapadatok_id,
      tanev_kezdete,
      reszszakmat_szerezok_szama,
      vizsgaeredmenyek_tanuloi_osszletszam
    );

    return res.status(201).json(createdData);
  } catch (error) {
    console.error("Error creating vizsgaeredmenyek data:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

router.delete("/:alapadatokId/:tanev", async (req, res) => {
  try {
    const { alapadatokId, tanev } = req.params;

    await deleteAllByAlapadatok(alapadatokId, tanev);

    return res.status(204).send();
  } catch (error) {
    console.error("Error deleting vizsgaeredmenyek data by alapadatok:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
