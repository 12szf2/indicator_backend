import e from "express";
import {
  getAll,
  getAllByAlapadatok,
  create,
  deleteAllByAlapadatok,
  update,
} from "../services/szakmai_vizsga_eredmenyek.service.js";

const router = e.Router();

/**
 * @swagger
 * tags:
 *   name: Szakmai_vizsga_eredmenyek
 *   description: Professional exam results data management
 *
 * components:
 *   schemas:
 *     SzakmaiVizsgaEredmenyek:
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
 *         szakirany_id:
 *           type: integer
 *           description: Field of study identifier
 *           example: 1
 *         szakma_id:
 *           type: integer
 *           description: Profession identifier
 *           example: 1
 *         vizsgara_bocsathatoak_szama:
 *           type: integer
 *           description: Number of students eligible for exam
 *           example: 45
 *         sikeres_vizsgazok_szama:
 *           type: integer
 *           description: Number of successful exam takers
 *           example: 38
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
 *         - szakirany_id
 *         - szakma_id
 */

/**
 * @swagger
 * /szakmai_vizsga_eredmenyek/{tanev}:
 *   get:
 *     summary: Get professional exam results by school year
 *     description: Retrieve professional exam results for a specific school year and previous 4 years
 *     tags: [Szakmai_vizsga_eredmenyek]
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
 *         description: Professional exam results retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/SzakmaiVizsgaEredmenyek'
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
    console.error("Error fetching szakmai vizsga eredmenyek data:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

/**
 * @swagger
 * /szakmai_vizsga_eredmenyek/{alapadatokId}/{tanev}:
 *   get:
 *     summary: Get professional exam results by school and year
 *     description: Retrieve professional exam results for a specific school and school year
 *     tags: [Szakmai_vizsga_eredmenyek]
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
 *         description: Professional exam results retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/SzakmaiVizsgaEredmenyek'
 *       401:
 *         description: Unauthorized - Invalid or missing token
 *       500:
 *         description: Server error
 *   delete:
 *     summary: Delete professional exam results by school and year
 *     description: Delete all professional exam results for a specific school and school year
 *     tags: [Szakmai_vizsga_eredmenyek]
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
 *         description: Professional exam results deleted successfully
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
    console.error("Error fetching szakmai vizsga eredmenyek data:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

/**
 * @swagger
 * /szakmai_vizsga_eredmenyek:
 *   post:
 *     summary: Create professional exam results data
 *     tags: [Szakmai_vizsga_eredmenyek]
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
 *               szakirany_id:
 *                 type: integer
 *                 description: Field of study identifier
 *                 example: 1
 *               szakma_id:
 *                 type: integer
 *                 description: Profession identifier
 *                 example: 1
 *               vizsgara_bocsathatoak_szama:
 *                 type: integer
 *                 description: Number of students eligible for exam
 *                 example: 45
 *               sikeres_vizsgazok_szama:
 *                 type: integer
 *                 description: Number of successful exam takers
 *                 example: 38
 *             required:
 *               - alapadatok_id
 *               - tanev_kezdete
 *               - szakirany_id
 *               - szakma_id
 *     responses:
 *       201:
 *         description: Professional exam results created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SzakmaiVizsgaEredmenyek'
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
      szakirany_id,
      szakma_id,
      alapadatok_id,
      tanev_kezdete,
      vizsgara_bocsathatoak_szama,
      sikeres_vizsgazok_szama,
    } = req.body;

    const createdData = await create(
      szakirany_id,
      szakma_id,
      alapadatok_id,
      tanev_kezdete,
      vizsgara_bocsathatoak_szama,
      sikeres_vizsgazok_szama
    );

    return res.status(201).json(createdData);
  } catch (error) {
    console.error("Error creating szakmai vizsga eredmenyek data:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const {
      szakirany_id,
      szakma_id,
      alapadatok_id,
      tanev_kezdete,
      vizsgara_bocsathatoak_szama,
      sikeres_vizsgazok_szama,
    } = req.body;

    const updatedData = await update(
      id,
      szakirany_id,
      szakma_id,
      alapadatok_id,
      tanev_kezdete,
      vizsgara_bocsathatoak_szama,
      sikeres_vizsgazok_szama
    );

    return res.status(200).json(updatedData);
  } catch (error) {
    console.error("Error updating szakmai vizsga eredmenyek data:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

router.delete("/:alapadatokId/:tanev", async (req, res) => {
  try {
    const { alapadatokId, tanev } = req.params;

    await deleteAllByAlapadatok(alapadatokId, tanev);

    return res.status(204).send();
  } catch (error) {
    console.error(
      "Error deleting szakmai vizsga eredmenyek data by alapadatok:",
      error
    );
    return res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
