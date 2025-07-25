import e from "express";
import {
  create,
  deleteAllByAlapadatok,
  getAll,
  getAllByAlapadatok,
} from "../services/nszfh.service.js";

const router = e.Router();

/**
 * @swagger
 * tags:
 *   name: NSZFH
 *   description: NSZFH (National Vocational Training Registry) competency assessment data management
 *
 * components:
 *   schemas:
 *     NSZFH:
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
 *         kat_1_mat_bemeneti:
 *           type: number
 *           format: float
 *           description: Category 1 mathematics entry assessment
 *           example: 3.5
 *         kat_1_mat_kimeneti:
 *           type: number
 *           format: float
 *           description: Category 1 mathematics exit assessment
 *           example: 4.0
 *         kat_1_szoveg_bemeneti:
 *           type: number
 *           format: float
 *           description: Category 1 text comprehension entry assessment
 *           example: 3.2
 *         kat_1_szoveg_kimeneti:
 *           type: number
 *           format: float
 *           description: Category 1 text comprehension exit assessment
 *           example: 3.8
 *         kat_2_mat_bemeneti:
 *           type: number
 *           format: float
 *           description: Category 2 mathematics entry assessment
 *           example: 3.5
 *         kat_2_mat_kimeneti:
 *           type: number
 *           format: float
 *           description: Category 2 mathematics exit assessment
 *           example: 4.0
 *         kat_2_szoveg_bemeneti:
 *           type: number
 *           format: float
 *           description: Category 2 text comprehension entry assessment
 *           example: 3.2
 *         kat_2_szoveg_kimeneti:
 *           type: number
 *           format: float
 *           description: Category 2 text comprehension exit assessment
 *           example: 3.8
 *         kat_3_mat_bemeneti:
 *           type: number
 *           format: float
 *           description: Category 3 mathematics entry assessment
 *           example: 3.5
 *         kat_3_mat_kimeneti:
 *           type: number
 *           format: float
 *           description: Category 3 mathematics exit assessment
 *           example: 4.0
 *         kat_3_szoveg_bemeneti:
 *           type: number
 *           format: float
 *           description: Category 3 text comprehension entry assessment
 *           example: 3.2
 *         kat_3_szoveg_kimeneti:
 *           type: number
 *           format: float
 *           description: Category 3 text comprehension exit assessment
 *           example: 3.8
 *         kat_4_mat_bemeneti:
 *           type: number
 *           format: float
 *           description: Category 4 mathematics entry assessment
 *           example: 3.5
 *         kat_4_mat_kimeneti:
 *           type: number
 *           format: float
 *           description: Category 4 mathematics exit assessment
 *           example: 4.0
 *         kat_4_szoveg_bemeneti:
 *           type: number
 *           format: float
 *           description: Category 4 text comprehension entry assessment
 *           example: 3.2
 *         kat_4_szoveg_kimeneti:
 *           type: number
 *           format: float
 *           description: Category 4 text comprehension exit assessment
 *           example: 3.8
 *         kat_5_mat_bemeneti:
 *           type: number
 *           format: float
 *           description: Category 5 mathematics entry assessment
 *           example: 3.5
 *         kat_5_mat_kimeneti:
 *           type: number
 *           format: float
 *           description: Category 5 mathematics exit assessment
 *           example: 4.0
 *         kat_5_szoveg_bemeneti:
 *           type: number
 *           format: float
 *           description: Category 5 text comprehension entry assessment
 *           example: 3.2
 *         kat_5_szoveg_kimeneti:
 *           type: number
 *           format: float
 *           description: Category 5 text comprehension exit assessment
 *           example: 3.8
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
 * /nszfh/{tanev}:
 *   get:
 *     summary: Get NSZFH competency data by school year
 *     description: Retrieve NSZFH competency assessment data for a specific school year and previous 4 years
 *     tags: [NSZFH]
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
 *         description: NSZFH data retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/NSZFH'
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
    console.error("Error fetching NSZFH data:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/:alapadatokId/:tanev", async (req, res) => {
  try {
    const alapadatokId = req.params.alapadatokId;
    const tanev = req.params.tanev;
    const data = await getAllByAlapadatok(alapadatokId, tanev);

    return res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching NSZFH data:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

router.post("/", async (req, res) => {
  try {
    const {
      alapadatok_id,
      tanev_kezdete,
      kat_1_mat_bemeneti,
      kat_1_mat_kimeneti,
      kat_1_szoveg_bemeneti,
      kat_1_szoveg_kimeneti,
      kat_2_mat_bemeneti,
      kat_2_mat_kimeneti,
      kat_2_szoveg_bemeneti,
      kat_2_szoveg_kimeneti,
      kat_3_mat_bemeneti,
      kat_3_mat_kimeneti,
      kat_3_szoveg_bemeneti,
      kat_3_szoveg_kimeneti,
      kat_4_mat_bemeneti,
      kat_4_mat_kimeneti,
      kat_4_szoveg_bemeneti,
      kat_4_szoveg_kimeneti,
      kat_5_mat_bemeneti,
      kat_5_mat_kimeneti,
      kat_5_szoveg_bemeneti,
      kat_5_szoveg_kimeneti,
    } = req.body;

    const createdData = await create(
      alapadatok_id,
      tanev_kezdete,
      kat_1_mat_bemeneti,
      kat_1_mat_kimeneti,
      kat_1_szoveg_bemeneti,
      kat_1_szoveg_kimeneti,
      kat_2_mat_bemeneti,
      kat_2_mat_kimeneti,
      kat_2_szoveg_bemeneti,
      kat_2_szoveg_kimeneti,
      kat_3_mat_bemeneti,
      kat_3_mat_kimeneti,
      kat_3_szoveg_bemeneti,
      kat_3_szoveg_kimeneti,
      kat_4_mat_bemeneti,
      kat_4_mat_kimeneti,
      kat_4_szoveg_bemeneti,
      kat_4_szoveg_kimeneti,
      kat_5_mat_bemeneti,
      kat_5_mat_kimeneti,
      kat_5_szoveg_bemeneti,
      kat_5_szoveg_kimeneti
    );

    return res.status(201).json(createdData);
  } catch (error) {
    console.error("Error creating NSZFH data:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

router.delete("/:alapadatokId/:tanev", async (req, res) => {
  try {
    const { alapadatokId, tanev } = req.params;

    await deleteAllByAlapadatok(alapadatokId, tanev);

    return res.status(204).send();
  } catch (error) {
    console.error("Error deleting NSZFH data by alapadatok:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
