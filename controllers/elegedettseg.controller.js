import e from "express";
import {
  getAll,
  getAllByAlapadatok,
  create,
  deleteAllByAlapadatok,
  update,
} from "../services/elegedettseg.service.js";

const router = e.Router();

/**
 * @swagger
 * tags:
 *   name: Elegedettseg
 *   description: Employer satisfaction data management
 *
 * components:
 *   schemas:
 *     Elegedettseg:
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
 *         munkaadok_elegedettsege:
 *           type: number
 *           format: float
 *           description: Employer satisfaction rating (1-5 scale)
 *           example: 4.2
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
 *         - munkaadok_elegedettsege
 */

/**
 * @swagger
 * /elegedettseg/{tanev}:
 *   get:
 *     summary: Get employer satisfaction data by school year
 *     description: Retrieve employer satisfaction data for a specific school year and previous 4 years
 *     tags: [Elegedettseg]
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
 *         description: Employer satisfaction data retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Elegedettseg'
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
    console.error("Error fetching elegedettseg data:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

/**
 * @swagger
 * /elegedettseg/{alapadatokId}/{tanev}:
 *   get:
 *     summary: Get employer satisfaction data by school and year
 *     description: Retrieve employer satisfaction data for a specific school and school year
 *     tags: [Elegedettseg]
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
 *         description: Employer satisfaction data retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Elegedettseg'
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
    console.error("Error fetching elegedettseg data:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

/**
 * @swagger
 * /elegedettseg:
 *   post:
 *     summary: Create new employer satisfaction data
 *     description: Create a new employer satisfaction record
 *     tags: [Elegedettseg]
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
 *               - munkaadok_elegedettsege
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
 *               munkaadok_elegedettsege:
 *                 type: number
 *                 format: float
 *                 description: Employer satisfaction rating (1-5 scale)
 *                 example: 4.2
 *     responses:
 *       201:
 *         description: Employer satisfaction data created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Elegedettseg'
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
      munkaadok_elegedettsege,
    } = req.body;

    const createdData = await create(
      szakirany_id,
      szakma_id,
      alapadatok_id,
      tanev_kezdete,
      munkaadok_elegedettsege
    );

    return res.status(201).json(createdData);
  } catch (error) {
    console.error("Error creating elegedettseg data:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

/**
 * @swagger
 * /elegedettseg/{id}:
 *   put:
 *     summary: Update employer satisfaction data
 *     description: Update an existing employer satisfaction record
 *     tags: [Elegedettseg]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The satisfaction record identifier
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
 *               munkaadok_elegedettsege:
 *                 type: number
 *                 format: float
 *                 description: Employer satisfaction rating (1-5 scale)
 *                 example: 4.2
 *     responses:
 *       200:
 *         description: Employer satisfaction data updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Elegedettseg'
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
      munkaadok_elegedettsege,
    } = req.body;

    const updatedData = await update(
      id,
      szakirany_id,
      szakma_id,
      alapadatok_id,
      tanev_kezdete,
      munkaadok_elegedettsege
    );

    return res.status(200).json(updatedData);
  } catch (error) {
    console.error("Error updating elegedettseg data:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

/**
 * @swagger
 * /elegedettseg/{alapadatokId}/{tanev}:
 *   delete:
 *     summary: Delete employer satisfaction data by school and year
 *     description: Delete all employer satisfaction records for a specific school and school year
 *     tags: [Elegedettseg]
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
 *         description: Employer satisfaction data deleted successfully
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
    console.error("Error deleting elegedettseg data by alapadatok:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
