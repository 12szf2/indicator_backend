import e from "express";
import {
  getAll,
  getAllByAlapadatok,
  create,
  deleteAllByAlapadatok,
  update,
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
 *         alapadatok_id:
 *           type: integer
 *           description: School identifier reference
 *           example: 1
 *         tanev_kezdete:
 *           type: integer
 *           description: School year start year
 *           example: 2023
 *         szakmai_vizsga_eredmeny:
 *           type: number
 *           format: float
 *           description: Professional exam result
 *           example: 4.2
 *         agazati_alapvizsga_eredmeny:
 *           type: number
 *           format: float
 *           description: Sectoral basic exam result
 *           example: 3.8
 *         magyar_nyelv_eretsegi_eredmeny:
 *           type: number
 *           format: float
 *           description: Hungarian language matriculation exam result
 *           example: 4.0
 *         matematika_eretsegi_eredmeny:
 *           type: number
 *           format: float
 *           description: Mathematics matriculation exam result
 *           example: 3.5
 *         tortenelem_eretsegi_eredmeny:
 *           type: number
 *           format: float
 *           description: History matriculation exam result
 *           example: 3.9
 *         angol_nyelv_eretsegi_eredmeny:
 *           type: number
 *           format: float
 *           description: English language matriculation exam result
 *           example: 4.1
 *         agazati_szakmai_eretsegi_eredmeny:
 *           type: number
 *           format: float
 *           description: Sectoral professional matriculation exam result
 *           example: 4.3
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
 *     description: Create a new exam results record
 *     tags: [Vizsgaeredmenyek]
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
 *             properties:
 *               alapadatok_id:
 *                 type: integer
 *                 description: School identifier reference
 *                 example: 1
 *               tanev_kezdete:
 *                 type: integer
 *                 description: School year start year
 *                 example: 2023
 *               reszszakmat_szerezok_szama:
 *                 type: integer
 *                 description: Number of students acquiring partial qualifications
 *                 example: 32
 *               vizsgaeredmenyek_tanuloi_osszletszam:
 *                 type: integer
 *                 description: Total number of students taking exams
 *                 example: 85
 *     responses:
 *       201:
 *         description: Exam results data created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Vizsgaeredmenyek'
 *       400:
 *         description: Bad request - Invalid input data
 *       401:
 *         description: Unauthorized - Invalid or missing token
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Internal server error"
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

/**
 * @swagger
 * /vizsgaeredmenyek/{id}:
 *   put:
 *     summary: Update exam results data
 *     description: Update an existing exam results record
 *     tags: [Vizsgaeredmenyek]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The exam results record identifier
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
 *               szakirany_id:
 *                 type: integer
 *                 nullable: true
 *                 description: Field of study identifier
 *                 example: 1
 *               szakma_id:
 *                 type: integer
 *                 nullable: true
 *                 description: Profession identifier
 *                 example: 1
 *               alapadatok_id:
 *                 type: integer
 *                 description: School identifier reference
 *                 example: 1
 *               tanev_kezdete:
 *                 type: integer
 *                 description: School year start year
 *                 example: 2023
 *               szakmai_vizsga_eredmeny:
 *                 type: number
 *                 format: float
 *                 description: Professional exam result
 *                 example: 4.2
 *               agazati_alapvizsga_eredmeny:
 *                 type: number
 *                 format: float
 *                 description: Sectoral basic exam result
 *                 example: 3.8
 *               magyar_nyelv_eretsegi_eredmeny:
 *                 type: number
 *                 format: float
 *                 description: Hungarian language matriculation exam result
 *                 example: 4.0
 *               matematika_eretsegi_eredmeny:
 *                 type: number
 *                 format: float
 *                 description: Mathematics matriculation exam result
 *                 example: 3.5
 *               tortenelem_eretsegi_eredmeny:
 *                 type: number
 *                 format: float
 *                 description: History matriculation exam result
 *                 example: 3.9
 *               angol_nyelv_eretsegi_eredmeny:
 *                 type: number
 *                 format: float
 *                 description: English language matriculation exam result
 *                 example: 4.1
 *               agazati_szakmai_eretsegi_eredmeny:
 *                 type: number
 *                 format: float
 *                 description: Sectoral professional matriculation exam result
 *                 example: 4.3
 *     responses:
 *       200:
 *         description: Exam results data updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Vizsgaeredmenyek'
 *       401:
 *         description: Unauthorized - Invalid or missing token
 *       404:
 *         description: Record not found
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Internal server error"
 */
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const {
      szakirany_id,
      szakma_id,
      alapadatok_id,
      tanev_kezdete,
      szakmai_vizsga_eredmeny,
      agazati_alapvizsga_eredmeny,
      magyar_nyelv_eretsegi_eredmeny,
      matematika_eretsegi_eredmeny,
      tortenelem_eretsegi_eredmeny,
      angol_nyelv_eretsegi_eredmeny,
      agazati_szakmai_eretsegi_eredmeny,
    } = req.body;

    const updatedData = await update(
      id,
      szakirany_id,
      szakma_id,
      alapadatok_id,
      tanev_kezdete,
      szakmai_vizsga_eredmeny,
      agazati_alapvizsga_eredmeny,
      magyar_nyelv_eretsegi_eredmeny,
      matematika_eretsegi_eredmeny,
      tortenelem_eretsegi_eredmeny,
      angol_nyelv_eretsegi_eredmeny,
      agazati_szakmai_eretsegi_eredmeny
    );

    if (!updatedData) {
      return res.status(404).json({ error: "Vizsgaeredmenyek not found" });
    }

    return res.status(200).json(updatedData);
  } catch (error) {
    console.error("Error updating vizsgaeredmenyek data:", error);
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
