import {
  createSzakkepzesiStatisztika,
  deleteSzakkepzesiStatisztika,
  getSzakkepzesiStatisztika,
  updateSzakkepzesiStatisztika,
  getAll,
} from "../services/szmsz.service.js";
import e from "express";

const router = e.Router();

/**
 * @swagger
 * tags:
 *   name: SZMSZ
 *   description: SZMSZ (Szakképzési Statisztika) data management
 *
 * components:
 *   schemas:
 *     SZMSZ:
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
 *         szakirany_id:
 *           type: integer
 *           nullable: true
 *           description: Field of study identifier
 *           example: 1
 *         szakma_id:
 *           type: integer
 *           nullable: true
 *           description: Profession identifier
 *           example: 1
 *         tanev_kezdete:
 *           type: integer
 *           description: School year start year
 *           example: 2023
 *         vegzettek_szama:
 *           type: integer
 *           description: Number of graduates
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
 * /szmsz/{tanev}:
 *   get:
 *     summary: Get SZMSZ data by school year
 *     description: Retrieve SZMSZ statistics for a specific school year and previous 4 years
 *     tags: [SZMSZ]
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
 *         description: SZMSZ data retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/SZMSZ'
 *       401:
 *         description: Unauthorized - Invalid or missing token
 *       500:
 *         description: Server error
 */
router.get("/:tanev", async (req, res) => {
  try {
    const { tanev } = req.params;
    const szakkepzesiStatisztika = await getAll(tanev);
    res.status(200).json(szakkepzesiStatisztika);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

/**
 * @swagger
 * /szmsz/{alapadatokId}/{tanev}:
 *   get:
 *     summary: Get SZMSZ data by school and year
 *     description: Retrieve SZMSZ statistics for a specific school and year
 *     tags: [SZMSZ]
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
 *         description: SZMSZ data retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/SZMSZ'
 *       401:
 *         description: Unauthorized - Invalid or missing token
 *       500:
 *         description: Server error
 */
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

/**
 * @swagger
 * /szmsz:
 *   post:
 *     summary: Create SZMSZ data
 *     tags: [SZMSZ]
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
 *               szakirany_id:
 *                 type: integer
 *                 description: Field of study identifier
 *                 example: 1
 *               szakma_id:
 *                 type: integer
 *                 description: Profession identifier
 *                 example: 1
 *               statisztika_tipus:
 *                 type: string
 *                 description: Statistics type
 *                 example: "vegzettek"
 *               letszam:
 *                 type: integer
 *                 description: Number count
 *                 example: 85
 *               createBy:
 *                 type: string
 *                 description: Creator identifier
 *                 example: "user123"
 *             required:
 *               - alapadatok_id
 *               - szakirany_id
 *               - szakma_id
 *               - statisztika_tipus
 *               - letszam
 *     responses:
 *       201:
 *         description: SZMSZ data created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SZMSZ'
 *       400:
 *         description: Bad request - Missing required fields
 *       401:
 *         description: Unauthorized - Invalid or missing authentication token
 *       500:
 *         description: Internal server error
 */
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

/**
 * @swagger
 * /szmsz/{id}:
 *   put:
 *     summary: Update SZMSZ data by ID
 *     tags: [SZMSZ]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: SZMSZ record ID
 *         schema:
 *           type: integer
 *           example: 1
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
 *               szakirany_id:
 *                 type: integer
 *                 description: Field of study identifier
 *                 example: 1
 *               szakma_id:
 *                 type: integer
 *                 description: Profession identifier
 *                 example: 1
 *               statisztika_tipus:
 *                 type: string
 *                 description: Statistics type
 *                 example: "vegzettek"
 *               letszam:
 *                 type: integer
 *                 description: Number count
 *                 example: 85
 *               createBy:
 *                 type: string
 *                 description: Creator identifier
 *                 example: "user123"
 *             required:
 *               - alapadatok_id
 *               - szakirany_id
 *               - szakma_id
 *               - statisztika_tipus
 *               - letszam
 *     responses:
 *       200:
 *         description: SZMSZ data updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SZMSZ'
 *       400:
 *         description: Bad request - Missing required fields
 *       401:
 *         description: Unauthorized - Invalid or missing authentication token
 *       404:
 *         description: Not found - SZMSZ record not found
 *       500:
 *         description: Internal server error
 */
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
