import e from "express";
import {
  getAll,
  getAllByAlapadatok,
  create,
  deleteAllByAlapadatok,
  update,
} from "../services/lemorzsolodas.service.js";

const router = e.Router();

/**
 * @swagger
 * tags:
 *   name: Lemorzsolodas
 *   description: Student dropout data management
 *
 * components:
 *   schemas:
 *     Lemorzsolodas:
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
 *         lemorzsolodo_tanulok_szama:
 *           type: integer
 *           description: Number of students who dropped out
 *           example: 8
 *         oktober_es_belepett_tanulok_szama:
 *           type: integer
 *           description: Number of students enrolled in October and after
 *           example: 120
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
 *         - lemorzsolodo_tanulok_szama
 *         - oktober_es_belepett_tanulok_szama
 */

/**
 * @swagger
 * /lemorzsolodas/{tanev}:
 *   get:
 *     summary: Get student dropout data by school year
 *     description: Retrieve student dropout data for a specific school year and previous 4 years
 *     tags: [Lemorzsolodas]
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
 *         description: Student dropout data retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Lemorzsolodas'
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
router.get("/:tanev", async (req, res) => {
  try {
    const tanev = req.params.tanev;
    const data = await getAll(tanev);

    return res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching lemorzsolodas data:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

/**
 * @swagger
 * /lemorzsolodas/{alapadatokId}/{tanev}:
 *   get:
 *     summary: Get student dropout data by school and year
 *     description: Retrieve student dropout data for a specific school and school year
 *     tags: [Lemorzsolodas]
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
 *         description: Student dropout data retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Lemorzsolodas'
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
    console.error("Error fetching lemorzsolodas data:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

/**
 * @swagger
 * /lemorzsolodas:
 *   post:
 *     summary: Create new student dropout data
 *     description: Create a new student dropout record
 *     tags: [Lemorzsolodas]
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
 *               - lemorzsolodo_tanulok_szama
 *               - oktober_es_belepett_tanulok_szama
 *             properties:
 *               szakirany_id:
 *                 type: integer
 *                 description: Field of study identifier
 *                 example: 1
 *               szakma_id:
 *                 type: integer
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
 *               lemorzsolodo_tanulok_szama:
 *                 type: integer
 *                 description: Number of students who dropped out
 *                 example: 8
 *               oktober_es_belepett_tanulok_szama:
 *                 type: integer
 *                 description: Number of students enrolled in October and after
 *                 example: 120
 *     responses:
 *       201:
 *         description: Student dropout data created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Lemorzsolodas'
 *       401:
 *         description: Unauthorized - Invalid or missing token
 *       500:
 *         description: Server error
 */
router.post("/", async (req, res) => {
  try {
    const {
      szakirany_id,
      szakma_id,
      alapadatok_id,
      tanev_kezdete,
      lemorzsolodo_tanulok_szama,
      oktober_es_belepett_tanulok_szama,
    } = req.body;

    const createdData = await create(
      szakirany_id,
      szakma_id,
      alapadatok_id,
      tanev_kezdete,
      lemorzsolodo_tanulok_szama,
      oktober_es_belepett_tanulok_szama
    );

    return res.status(201).json(createdData);
  } catch (error) {
    console.error("Error creating lemorzsolodas data:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

/**
 * @swagger
 * /lemorzsolodas/{id}:
 *   put:
 *     summary: Update student dropout data
 *     description: Update an existing student dropout record
 *     tags: [Lemorzsolodas]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The dropout record identifier
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
 *                 description: Field of study identifier
 *                 example: 1
 *               szakma_id:
 *                 type: integer
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
 *               lemorzsolodo_tanulok_szama:
 *                 type: integer
 *                 description: Number of students who dropped out
 *                 example: 8
 *               oktober_es_belepett_tanulok_szama:
 *                 type: integer
 *                 description: Number of students enrolled in October and after
 *                 example: 120
 *     responses:
 *       200:
 *         description: Student dropout data updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Lemorzsolodas'
 *       401:
 *         description: Unauthorized - Invalid or missing token
 *       404:
 *         description: Record not found
 *       500:
 *         description: Server error
 */
router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const {
      szakirany_id,
      szakma_id,
      alapadatok_id,
      tanev_kezdete,
      lemorzsolodo_tanulok_szama,
      oktober_es_belepett_tanulok_szama,
    } = req.body;

    const updatedData = await update(
      id,
      szakirany_id,
      szakma_id,
      alapadatok_id,
      tanev_kezdete,
      lemorzsolodo_tanulok_szama,
      oktober_es_belepett_tanulok_szama
    );

    return res.status(200).json(updatedData);
  } catch (error) {
    console.error("Error updating lemorzsolodas data:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

/**
 * @swagger
 * /lemorzsolodas/{alapadatokId}/{tanev}:
 *   delete:
 *     summary: Delete student dropout data by school and year
 *     description: Delete all student dropout records for a specific school and school year
 *     tags: [Lemorzsolodas]
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
 *         description: Student dropout data deleted successfully
 *       401:
 *         description: Unauthorized - Invalid or missing token
 *       500:
 *         description: Server error
 */
router.delete("/:alapadatokId/:tanev", async (req, res) => {
  try {
    const { alapadatokId, tanev } = req.params;

    await deleteAllByAlapadatok(alapadatokId, tanev);

    return res.status(204).send();
  } catch (error) {
    console.error("Error deleting lemorzsolodas data by alapadatok:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
