import e from "express";
import {
  getAll,
  getAllByAlapadatok,
  create,
  deleteAllByAlapadatok,
  update,
} from "../services/elegedettseg_meres.service.js";

const router = e.Router();

/**
 * @swagger
 * tags:
 *   name: Elegedettseg_meres
 *   description: Satisfaction measurement data management
 *
 * components:
 *   schemas:
 *     ElegedettsegMeres:
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
 *         szulok_elegedettsege:
 *           type: number
 *           format: float
 *           description: Parent satisfaction rating (1-5 scale)
 *           example: 4.1
 *         oktatok_elegedettsege:
 *           type: number
 *           format: float
 *           description: Teacher satisfaction rating (1-5 scale)
 *           example: 3.8
 *         tanulok_elegedettsege:
 *           type: number
 *           format: float
 *           description: Student satisfaction rating (1-5 scale)
 *           example: 4.0
 *         dualis_kepzohely_elegedettsege:
 *           type: number
 *           format: float
 *           description: Dual training site satisfaction rating (1-5 scale)
 *           example: 4.3
 *         munkaero_piac_elegedettsege:
 *           type: number
 *           format: float
 *           description: Labor market satisfaction rating (1-5 scale)
 *           example: 3.9
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
 * /elegedettseg_meres/{tanev}:
 *   get:
 *     summary: Get satisfaction measurement data by school year
 *     description: Retrieve satisfaction measurement data for a specific school year and previous 4 years
 *     tags: [Elegedettseg_meres]
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
 *         description: Satisfaction measurement data retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/ElegedettsegMeres'
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
    console.error("Error fetching elegedettseg_meres data:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

/**
 * @swagger
 * /elegedettseg_meres/{alapadatokId}/{tanev}:
 *   get:
 *     summary: Get satisfaction measurement data by school and year
 *     description: Retrieve satisfaction measurement data for a specific school and school year
 *     tags: [Elegedettseg_meres]
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
 *         description: Satisfaction measurement data retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/ElegedettsegMeres'
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
    console.error("Error fetching elegedettseg_meres data:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

/**
 * @swagger
 * /elegedettseg_meres:
 *   post:
 *     summary: Create new satisfaction measurement data
 *     description: Create a new satisfaction measurement record
 *     tags: [Elegedettseg_meres]
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
 *               szulok_elegedettsege:
 *                 type: number
 *                 format: float
 *                 description: Parent satisfaction rating (1-5 scale)
 *                 example: 4.1
 *               oktatok_elegedettsege:
 *                 type: number
 *                 format: float
 *                 description: Teacher satisfaction rating (1-5 scale)
 *                 example: 3.8
 *               tanulok_elegedettsege:
 *                 type: number
 *                 format: float
 *                 description: Student satisfaction rating (1-5 scale)
 *                 example: 4.0
 *               dualis_kepzohely_elegedettsege:
 *                 type: number
 *                 format: float
 *                 description: Dual training site satisfaction rating (1-5 scale)
 *                 example: 4.3
 *               munkaero_piac_elegedettsege:
 *                 type: number
 *                 format: float
 *                 description: Labor market satisfaction rating (1-5 scale)
 *                 example: 3.9
 *     responses:
 *       201:
 *         description: Satisfaction measurement data created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ElegedettsegMeres'
 *       401:
 *         description: Unauthorized - Invalid or missing token
 *       500:
 *         description: Server error
 */
router.post("/", async (req, res) => {
  try {
    const {
      alapadatok_id,
      tanev_kezdete,
      szulok_elegedettsege,
      oktatok_elegedettsege,
      tanulok_elegedettsege,
      dualis_kepzohely_elegedettsege,
      munkaero_piac_elegedettsege,
    } = req.body;

    const createdData = await create(
      alapadatok_id,
      tanev_kezdete,
      szulok_elegedettsege,
      oktatok_elegedettsege,
      tanulok_elegedettsege,
      dualis_kepzohely_elegedettsege,
      munkaero_piac_elegedettsege
    );

    return res.status(201).json(createdData);
  } catch (error) {
    console.error("Error creating elegedettseg_meres data:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

/**
 * @swagger
 * /elegedettseg_meres/{id}:
 *   put:
 *     summary: Update satisfaction measurement data
 *     description: Update an existing satisfaction measurement record
 *     tags: [Elegedettseg_meres]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The satisfaction measurement record identifier
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
 *               szulok_elegedettsege:
 *                 type: number
 *                 format: float
 *                 description: Parent satisfaction rating (1-5 scale)
 *                 example: 4.1
 *               oktatok_elegedettsege:
 *                 type: number
 *                 format: float
 *                 description: Teacher satisfaction rating (1-5 scale)
 *                 example: 3.8
 *               tanulok_elegedettsege:
 *                 type: number
 *                 format: float
 *                 description: Student satisfaction rating (1-5 scale)
 *                 example: 4.0
 *               dualis_kepzohely_elegedettsege:
 *                 type: number
 *                 format: float
 *                 description: Dual training site satisfaction rating (1-5 scale)
 *                 example: 4.3
 *               munkaero_piac_elegedettsege:
 *                 type: number
 *                 format: float
 *                 description: Labor market satisfaction rating (1-5 scale)
 *                 example: 3.9
 *     responses:
 *       200:
 *         description: Satisfaction measurement data updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ElegedettsegMeres'
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
      alapadatok_id,
      tanev_kezdete,
      szulok_elegedettsege,
      oktatok_elegedettsege,
      tanulok_elegedettsege,
      dualis_kepzohely_elegedettsege,
      munkaero_piac_elegedettsege,
    } = req.body;

    const updatedData = await update(
      id,
      alapadatok_id,
      tanev_kezdete,
      szulok_elegedettsege,
      oktatok_elegedettsege,
      tanulok_elegedettsege,
      dualis_kepzohely_elegedettsege,
      munkaero_piac_elegedettsege
    );

    return res.status(200).json(updatedData);
  } catch (error) {
    console.error("Error updating elegedettseg_meres data:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

/**
 * @swagger
 * /elegedettseg_meres/{alapadatokId}/{tanev}:
 *   delete:
 *     summary: Delete satisfaction measurement data by school and year
 *     description: Delete all satisfaction measurement records for a specific school and school year
 *     tags: [Elegedettseg_meres]
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
 *         description: Satisfaction measurement data deleted successfully
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
    console.error(
      "Error deleting elegedettseg_meres data by alapadatok:",
      error
    );
    return res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
