import e from "express";
import {
  getAll,
  getAllByAlapadatok,
  create,
  deleteAllByAlapadatok,
  update,
} from "../services/elhelyezkedes.service.js";

const router = e.Router();

/**
 * @swagger
 * tags:
 *   name: Elhelyezkedes
 *   description: Graduate placement data management
 *
 * components:
 *   schemas:
 *     Elhelyezkedes:
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
 *         elhelyezkedok_szama:
 *           type: integer
 *           description: Number of graduates who found employment
 *           example: 72
 *         szakmai_okatatasban_sikeresen_vegzettek_szama:
 *           type: integer
 *           description: Number of graduates who successfully completed professional education
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
 *         - elhelyezkedok_szama
 *         - szakmai_okatatasban_sikeresen_vegzettek_szama
 */

/**
 * @swagger
 * /elhelyezkedes/{tanev}:
 *   get:
 *     summary: Get graduate placement data by school year
 *     description: Retrieve graduate placement data for a specific school year and previous 4 years
 *     tags: [Elhelyezkedes]
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
 *         description: Graduate placement data retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Elhelyezkedes'
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
    console.error("Error fetching elhelyezkedes data:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

/**
 * @swagger
 * /elhelyezkedes/{alapadatokId}/{tanev}:
 *   get:
 *     summary: Get graduate placement data by school and year
 *     description: Retrieve graduate placement data for a specific school and school year
 *     tags: [Elhelyezkedes]
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
 *         description: Graduate placement data retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Elhelyezkedes'
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
router.get("/:alapadatokId/:tanev", async (req, res) => {
  try {
    const alapadatokId = req.params.alapadatokId;
    const tanev = req.params.tanev;
    const data = await getAllByAlapadatok(alapadatokId, tanev);

    return res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching elhelyezkedes data:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

/**
 * @swagger
 * /elhelyezkedes:
 *   post:
 *     summary: Create new graduate placement data
 *     description: Create new graduate placement data entry
 *     tags: [Elhelyezkedes]
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
 *               - elhelyezkedok_szama
 *               - szakmai_okatatasban_sikeresen_vegzettek_szama
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
 *               elhelyezkedok_szama:
 *                 type: integer
 *                 description: Number of graduates who found employment
 *                 example: 72
 *               szakmai_okatatasban_sikeresen_vegzettek_szama:
 *                 type: integer
 *                 description: Number of graduates who successfully completed professional education
 *                 example: 85
 *     responses:
 *       201:
 *         description: Graduate placement data created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Elhelyezkedes'
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
      szakirany_id,
      szakma_id,
      alapadatok_id,
      tanev_kezdete,
      elhelyezkedok_szama,
      szakmai_okatatasban_sikeresen_vegzettek_szama,
    } = req.body;

    const createdData = await create(
      szakirany_id,
      szakma_id,
      alapadatok_id,
      tanev_kezdete,
      elhelyezkedok_szama,
      szakmai_okatatasban_sikeresen_vegzettek_szama
    );

    return res.status(201).json(createdData);
  } catch (error) {
    console.error("Error creating elhelyezkedes data:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

/**
 * @swagger
 * /elhelyezkedes/{id}:
 *   put:
 *     summary: Update graduate placement data
 *     description: Update an existing graduate placement record
 *     tags: [Elhelyezkedes]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The graduate placement record identifier
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
 *               elhelyezkedok_szama:
 *                 type: integer
 *                 description: Number of graduates who found employment
 *                 example: 72
 *               szakmai_okatatasban_sikeresen_vegzettek_szama:
 *                 type: integer
 *                 description: Number of graduates who successfully completed professional education
 *                 example: 85
 *     responses:
 *       200:
 *         description: Graduate placement data updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Elhelyezkedes'
 *       400:
 *         description: Bad request - Invalid input data
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
    const id = parseInt(req.params.id);
    const {
      szakirany_id,
      szakma_id,
      alapadatok_id,
      tanev_kezdete,
      elhelyezkedok_szama,
      szakmai_okatatasban_sikeresen_vegzettek_szama,
    } = req.body;

    const updatedData = await update(
      id,
      szakirany_id,
      szakma_id,
      alapadatok_id,
      tanev_kezdete,
      elhelyezkedok_szama,
      szakmai_okatatasban_sikeresen_vegzettek_szama
    );

    return res.status(200).json(updatedData);
  } catch (error) {
    console.error("Error updating elhelyezkedes data:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

/**
 * @swagger
 * /elhelyezkedes/{alapadatokId}/{tanev}:
 *   delete:
 *     summary: Delete graduate placement data by school and year
 *     description: Delete all graduate placement data for a specific school and school year
 *     tags: [Elhelyezkedes]
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
 *         description: Graduate placement data deleted successfully
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
router.delete("/:alapadatokId/:tanev", async (req, res) => {
  try {
    const { alapadatokId, tanev } = req.params;

    await deleteAllByAlapadatok(alapadatokId, tanev);

    return res.status(204).send();
  } catch (error) {
    console.error("Error deleting elhelyezkedes data by alapadatok:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
