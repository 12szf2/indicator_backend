import e from "express";
import {
  getAll,
  getAllByAlapadatok,
  create,
  deleteAllByAlapadatok,
} from "../services/muhelyiskola.service.js";

const router = e.Router();

/**
 * @swagger
 * tags:
 *   name: Muhelyiskola
 *   description: Workshop school data management
 *
 * components:
 *   schemas:
 *     Muhelyiskola:
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
 *         muhelyiskola_nev:
 *           type: string
 *           description: Workshop school name
 *           example: "Műhelyiskola Program"
 *         resztvevo_tanulok_szama:
 *           type: integer
 *           description: Number of participating students
 *           example: 45
 *         sikeres_befejezok_szama:
 *           type: integer
 *           description: Number of successful completers
 *           example: 38
 *         reszszakmat_szerezok_szama:
 *           type: integer
 *           description: Number of students acquiring partial qualifications
 *           example: 32
 *         muhelyiskola_tanuloi_osszletszam:
 *           type: integer
 *           description: Total number of workshop school students
 *           example: 45
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
 * /muhelyiskola/{tanev}:
 *   get:
 *     summary: Get workshop school data by school year
 *     description: Retrieve workshop school data for a specific school year and previous 4 years
 *     tags: [Muhelyiskola]
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
 *         description: Workshop school data retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Muhelyiskola'
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
    console.error("Error fetching muhelyiskola data:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

/**
 * @swagger
 * /muhelyiskola/{alapadatokId}/{tanev}:
 *   get:
 *     summary: Get workshop school data by school and year
 *     description: Retrieve workshop school data for a specific school and school year
 *     tags: [Muhelyiskola]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: alapadatokId
 *         required: true
 *         description: The school identifier
 *         schema:
 *           type: integer
 *           example: 1
 *       - in: path
 *         name: tanev
 *         required: true
 *         description: The school year end
 *         schema:
 *           type: integer
 *           example: 2024
 *     responses:
 *       200:
 *         description: Workshop school data retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Muhelyiskola'
 *       401:
 *         description: Unauthorized - Invalid or missing token
 *       500:
 *         description: Server error
 *   delete:
 *     summary: Delete workshop school data by school and year
 *     description: Delete all workshop school data for a specific school and school year
 *     tags: [Muhelyiskola]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: alapadatokId
 *         required: true
 *         description: The school identifier
 *         schema:
 *           type: integer
 *           example: 1
 *       - in: path
 *         name: tanev
 *         required: true
 *         description: The school year end
 *         schema:
 *           type: integer
 *           example: 2024
 *     responses:
 *       204:
 *         description: Workshop school data deleted successfully
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
    console.error("Error fetching muhelyiskola data:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

/**
 * @swagger
 * /muhelyiskola:
 *   post:
 *     summary: Create workshop school data
 *     tags: [Muhelyiskola]
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
 *               muhelyiskola_tanuloi_osszletszam:
 *                 type: integer
 *                 description: Total number of workshop school students
 *                 example: 45
 *             required:
 *               - alapadatok_id
 *               - tanev_kezdete
 *     responses:
 *       201:
 *         description: Workshop school data created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Muhelyiskola'
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
      muhelyiskola_tanuloi_osszletszam,
    } = req.body;

    const createdData = await create(
      alapadatok_id,
      tanev_kezdete,
      reszszakmat_szerezok_szama,
      muhelyiskola_tanuloi_osszletszam
    );

    return res.status(201).json(createdData);
  } catch (error) {
    console.error("Error creating muhelyiskola data:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

router.delete("/:alapadatokId/:tanev", async (req, res) => {
  try {
    const { alapadatokId, tanev } = req.params;

    await deleteAllByAlapadatok(alapadatokId, tanev);

    return res.status(204).send();
  } catch (error) {
    console.error("Error deleting muhelyiskola data by alapadatok:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
