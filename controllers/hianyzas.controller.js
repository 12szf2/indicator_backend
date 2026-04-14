import e from "express";
import {
  getAll,
  getAllByAlapadatok,
  create,
  deleteAllByAlapadatok,
  update,
} from "../services/hianyzas.service.js";

const router = e.Router();

/**
 * @swagger
 * tags:
 *   name: Hianyzas
 *   description: Student absence data management
 *
 * components:
 *   schemas:
 *     Hianyzas:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           format: uuid
 *           description: Unique identifier
 *         alapadatok_id:
 *           type: string
 *           format: uuid
 *           description: School identifier reference
 *         tanev_kezdete:
 *           type: integer
 *           description: School year start year
 *           example: 2023
 *         atlag:
 *           type: integer
 *           description: Average absence per student (hours)
 *           example: 45
 *         felev:
 *           type: string
 *           description: Semester (I. félév / évvége)
 *           example: "I. félév"
 *         igazolatlan:
 *           type: integer
 *           description: Unexcused absences (hours)
 *           example: 10
 *         igazolt:
 *           type: integer
 *           description: Excused absences (hours)
 *           example: 35
 *         intezmeny_tipus:
 *           type: string
 *           description: Institution type (Szakképző iskola / Technikum)
 *           example: "Szakképző iskola"
 *         jogviszony:
 *           type: string
 *           description: Legal relationship type
 *           example: "Tanulói jogviszony"
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
 *         - atlag
 *         - felev
 *         - igazolatlan
 *         - igazolt
 *         - intezmeny_tipus
 *         - jogviszony
 */

/**
 * @swagger
 * /hianyzas/{tanev}:
 *   get:
 *     summary: Get student absence data by school year
 *     description: Retrieve student absence data for a specific school year and previous 4 years
 *     tags: [Hianyzas]
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
 *         description: Student absence data retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Hianyzas'
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
    console.error("Error fetching hianyzas data:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

/**
 * @swagger
 * /hianyzas/{alapadatokId}/{tanev}:
 *   get:
 *     summary: Get student absence data by school and year
 *     description: Retrieve student absence data for a specific school and school year
 *     tags: [Hianyzas]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: alapadatokId
 *         required: true
 *         description: The school identifier
 *         schema:
 *           type: string
 *           format: uuid
 *       - in: path
 *         name: tanev
 *         required: true
 *         description: The school year end
 *         schema:
 *           type: integer
 *           example: 2024
 *     responses:
 *       200:
 *         description: Student absence data retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Hianyzas'
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
    console.error("Error fetching hianyzas data:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

/**
 * @swagger
 * /hianyzas:
 *   post:
 *     summary: Create new student absence data
 *     description: Create a new student absence record
 *     tags: [Hianyzas]
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
 *               - atlag
 *               - felev
 *               - igazolatlan
 *               - igazolt
 *               - intezmeny_tipusa
 *               - jogviszony
 *             properties:
 *               alapadatok_id:
 *                 type: string
 *                 format: uuid
 *                 description: School identifier reference
 *               tanev_kezdete:
 *                 type: integer
 *                 description: School year start year
 *                 example: 2023
 *               atlag:
 *                 type: integer
 *                 description: Average absence per student (hours)
 *                 example: 45
 *               felev:
 *                 type: string
 *                 description: Semester
 *                 example: "I. félév"
 *               igazolatlan:
 *                 type: integer
 *                 description: Unexcused absences (hours)
 *                 example: 10
 *               igazolt:
 *                 type: integer
 *                 description: Excused absences (hours)
 *                 example: 35
 *               intezmeny_tipusa:
 *                 type: string
 *                 description: Institution type
 *                 example: "Szakképző iskola"
 *               jogviszony:
 *                 type: string
 *                 description: Legal relationship type
 *                 example: "Tanulói jogviszony"
 *     responses:
 *       201:
 *         description: Student absence data created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Hianyzas'
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
      atlag,
      felev,
      igazolatlan,
      igazolt,
      intezmeny_tipusa,
      jogviszony,
    } = req.body;

    const createdData = await create(
      alapadatok_id,
      tanev_kezdete,
      atlag,
      felev,
      igazolatlan,
      igazolt,
      intezmeny_tipusa,
      jogviszony
    );

    return res.status(201).json(createdData);
  } catch (error) {
    console.error("Error creating hianyzas data:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

/**
 * @swagger
 * /hianyzas/{id}:
 *   put:
 *     summary: Update student absence data
 *     description: Update an existing student absence record
 *     tags: [Hianyzas]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The absence record identifier
 *         schema:
 *           type: string
 *           format: uuid
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               alapadatok_id:
 *                 type: string
 *                 format: uuid
 *                 description: School identifier reference
 *               tanev_kezdete:
 *                 type: integer
 *                 description: School year start year
 *                 example: 2023
 *               atlag:
 *                 type: integer
 *                 description: Average absence per student (hours)
 *                 example: 45
 *               felev:
 *                 type: string
 *                 description: Semester
 *                 example: "I. félév"
 *               igazolatlan:
 *                 type: integer
 *                 description: Unexcused absences (hours)
 *                 example: 10
 *               igazolt:
 *                 type: integer
 *                 description: Excused absences (hours)
 *                 example: 35
 *               intezmeny_tipusa:
 *                 type: string
 *                 description: Institution type
 *                 example: "Szakképző iskola"
 *               jogviszony:
 *                 type: string
 *                 description: Legal relationship type
 *                 example: "Tanulói jogviszony"
 *     responses:
 *       200:
 *         description: Student absence data updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Hianyzas'
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
      atlag,
      felev,
      igazolatlan,
      igazolt,
      intezmeny_tipusa,
      jogviszony,
    } = req.body;

    const updatedData = await update(
      id,
      alapadatok_id,
      tanev_kezdete,
      atlag,
      felev,
      igazolatlan,
      igazolt,
      intezmeny_tipusa,
      jogviszony
    );

    return res.status(200).json(updatedData);
  } catch (error) {
    console.error("Error updating hianyzas data:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

/**
 * @swagger
 * /hianyzas/{alapadatokId}/{tanev}:
 *   delete:
 *     summary: Delete student absence data by school and year
 *     description: Delete all student absence records for a specific school and school year
 *     tags: [Hianyzas]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: alapadatokId
 *         required: true
 *         description: The school identifier
 *         schema:
 *           type: string
 *           format: uuid
 *       - in: path
 *         name: tanev
 *         required: true
 *         description: The school year end
 *         schema:
 *           type: integer
 *           example: 2024
 *     responses:
 *       204:
 *         description: Student absence data deleted successfully
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
    console.error("Error deleting hianyzas data by alapadatok:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
