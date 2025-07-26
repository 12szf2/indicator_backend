import e from "express";
import {
  getAll,
  getAllByAlapadatok,
  create,
  deleteAllByAlapadatok,
  update,
} from "../services/dobbanto.service.js";

const router = e.Router();

/**
 * @swagger
 * tags:
 *   name: Dobbanto
 *   description: Repeating students data management
 *
 * components:
 *   schemas:
 *     Dobbanto:
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
 *         dobbanto_szama:
 *           type: integer
 *           description: Number of repeating students
 *           example: 15
 *         tanulok_osszesen:
 *           type: integer
 *           description: Total number of students
 *           example: 450
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
 *         - dobbanto_szama
 *         - tanulok_osszesen
 */

/**
 * @swagger
 * /dobbanto/{tanev}:
 *   get:
 *     summary: Get repeating students data by school year
 *     description: Retrieve repeating students data for a specific school year and previous 4 years
 *     tags: [Dobbanto]
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
 *         description: Repeating students data retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Dobbanto'
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
    console.error("Error fetching dobbanto data:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

/**
 * @swagger
 * /dobbanto/{alapadatokId}/{tanev}:
 *   get:
 *     summary: Get repeating students data by school and year
 *     description: Retrieve repeating students data for a specific school and school year
 *     tags: [Dobbanto]
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
 *         description: Repeating students data retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Dobbanto'
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
    console.error("Error fetching dobbanto data:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

/**
 * @swagger
 * /dobbanto:
 *   post:
 *     summary: Create new repeating students data
 *     description: Create a new repeating students record
 *     tags: [Dobbanto]
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
 *               - dobbanto_szama
 *               - tanulok_osszesen
 *             properties:
 *               alapadatok_id:
 *                 type: integer
 *                 description: School identifier reference
 *                 example: 1
 *               tanev_kezdete:
 *                 type: integer
 *                 description: School year start year
 *                 example: 2023
 *               dobbanto_szama:
 *                 type: integer
 *                 description: Number of repeating students
 *                 example: 15
 *               tanulok_osszesen:
 *                 type: integer
 *                 description: Total number of students
 *                 example: 450
 *     responses:
 *       201:
 *         description: Repeating students data created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Dobbanto'
 *       401:
 *         description: Unauthorized - Invalid or missing token
 *       500:
 *         description: Server error
 */
router.post("/", async (req, res) => {
  try {
    const { alapadatok_id, tanev_kezdete, dobbanto_szama, tanulok_osszesen } =
      req.body;

    const createdData = await create(
      alapadatok_id,
      tanev_kezdete,
      dobbanto_szama,
      tanulok_osszesen
    );

    return res.status(201).json(createdData);
  } catch (error) {
    console.error("Error creating Dobbanto data:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

/**
 * @swagger
 * /dobbanto/{id}:
 *   put:
 *     summary: Update repeating students data
 *     description: Update an existing repeating students record
 *     tags: [Dobbanto]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The repeating students record identifier
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
 *                 type: integer
 *                 description: School identifier reference
 *                 example: 1
 *               tanev_kezdete:
 *                 type: integer
 *                 description: School year start year
 *                 example: 2023
 *               dobbanto_szama:
 *                 type: integer
 *                 description: Number of repeating students
 *                 example: 15
 *               tanulok_osszesen:
 *                 type: integer
 *                 description: Total number of students
 *                 example: 450
 *     responses:
 *       200:
 *         description: Repeating students data updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Dobbanto'
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
    const { alapadatok_id, tanev_kezdete, dobbanto_szama, tanulok_osszesen } =
      req.body;

    const updatedData = await update(
      id,
      alapadatok_id,
      tanev_kezdete,
      dobbanto_szama,
      tanulok_osszesen
    );

    return res.status(200).json(updatedData);
  } catch (error) {
    console.error("Error updating Dobbanto data:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

/**
 * @swagger
 * /dobbanto/{alapadatokId}/{tanev}:
 *   delete:
 *     summary: Delete repeating students data by school and year
 *     description: Delete all repeating students records for a specific school and school year
 *     tags: [Dobbanto]
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
 *         description: Repeating students data deleted successfully
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
    console.error("Error deleting dobbanto data by alapadatok:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
