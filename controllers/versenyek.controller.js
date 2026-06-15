import {
  create,
  getAll,
  getAllByAlapadatok,
  update,
} from "../services/versenyek.service.js";
import e from "express";

const router = e.Router();

/**
 * @swagger
 * /api/v1/versenyek/{tanev}:
 *   get:
 *     summary: Get competitions by year
 *     description: Retrieve all competitions for a specific school year
 *     tags:
 *       - Versenyek
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: tanev
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *         description: School year start year (e.g., 2023)
 *         example: "2023"
 *     responses:
 *       200:
 *         description: List of competitions
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/VersenyekRecord'
 *       401:
 *         description: Unauthorized
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Unauthorized"
 *       500:
 *         description: Internal server error
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
    console.error("Error fetching competitions:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

/**
 * @swagger
 * /api/v1/versenyek/{alapadatokId}/{tanev}:
 *   get:
 *     summary: Get competitions by school and year
 *     description: Retrieve competitions for a specific school and year
 *     tags:
 *       - Versenyek
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: alapadatokId
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         description: School identifier
 *         example: 1
 *       - name: tanev
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *         description: School year start year (e.g., 2023)
 *         example: "2023"
 *     responses:
 *       200:
 *         description: List of competitions for the specific school
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/VersenyekRecord'
 *       401:
 *         description: Unauthorized
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Unauthorized"
 *       500:
 *         description: Internal server error
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
    const { alapadatokId, tanev } = req.params;
    const data = await getAllByAlapadatok(alapadatokId, tanev);

    return res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching competitions by alapadatokId:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

/**
 * @swagger
 * /api/v1/versenyek:
 *   post:
 *     summary: Create new competition record
 *     description: Create a new competition entry with participation and results data
 *     tags:
 *       - Versenyek
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - versenyKategoria
 *               - versenyNev
 *               - alapadatokId
 *               - helyezett1
 *               - helyezett1_3
 *               - dontobeJutott
 *               - nevezettekSzama
 *               - tanevKezdete
 *             properties:
 *               versenyKategoria:
 *                 type: string
 *                 description: Competition category
 *                 example: "Országos"
 *               versenyNev:
 *                 type: string
 *                 description: Competition name
 *                 example: "XXII. Országos Szakmai Tanulmányi Verseny"
 *               alapadatokId:
 *                 type: integer
 *                 description: School identifier reference
 *                 example: 1
 *               helyezett1:
 *                 type: integer
 *                 description: Number of 1st place winners
 *                 example: 2
 *               helyezett1_3:
 *                 type: integer
 *                 description: Number of 1st-3rd place winners
 *                 example: 5
 *               dontobeJutott:
 *                 type: integer
 *                 description: Number of finalists
 *                 example: 8
 *               nevezettekSzama:
 *                 type: integer
 *                 description: Number of participants
 *                 example: 25
 *               tanevKezdete:
 *                 type: integer
 *                 description: School year start year
 *                 example: 2023
 *     responses:
 *       201:
 *         description: Competition record created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/VersenyekRecord'
 *       400:
 *         description: Bad request - Invalid input data
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Invalid input data"
 *       401:
 *         description: Unauthorized
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Unauthorized"
 *       500:
 *         description: Internal server error
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
      kategoria,
      verseny_neve,
      alapadatok_id,
      helyezett_1,
      helyezett_1_3,
      dontobeJutott,
      nevezettekSzama,
      tanev_kezdete,
    } = req.body;

    const data = await create(
      kategoria, // versenyKategoria
      verseny_neve, // versenyNev
      helyezett_1, // helyezett_1
      helyezett_1_3, // helyezett_1_3
      dontobeJutott, // dontobeJutott
      nevezettekSzama, // nevezettekSzama
      tanev_kezdete, // tanev_kezdete
      alapadatok_id // alapadatokId
    );

    return res.status(201).json(data);
  } catch (error) {
    console.error("Error creating competition:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

/**
 * @swagger
 * /api/v1/versenyek/{id}:
 *   put:
 *     summary: Update competition record
 *     description: Update an existing competition record with new data
 *     tags:
 *       - Versenyek
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         description: Competition record ID
 *         example: 1
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - versenyKategoria
 *               - versenyNev
 *               - alapadatokId
 *               - helyezett1
 *               - helyezett1_3
 *               - dontobeJutott
 *               - nevezettekSzama
 *               - tanevKezdete
 *             properties:
 *               versenyKategoria:
 *                 type: string
 *                 description: Competition category
 *                 example: "Országos"
 *               versenyNev:
 *                 type: string
 *                 description: Competition name
 *                 example: "XXII. Országos Szakmai Tanulmányi Verseny"
 *               alapadatokId:
 *                 type: integer
 *                 description: School identifier reference
 *                 example: 1
 *               helyezett1:
 *                 type: integer
 *                 description: Number of 1st place winners
 *                 example: 2
 *               helyezett1_3:
 *                 type: integer
 *                 description: Number of 1st-3rd place winners
 *                 example: 5
 *               dontobeJutott:
 *                 type: integer
 *                 description: Number of finalists
 *                 example: 8
 *               nevezettekSzama:
 *                 type: integer
 *                 description: Number of participants
 *                 example: 25
 *               tanevKezdete:
 *                 type: integer
 *                 description: School year start year
 *                 example: 2023
 *     responses:
 *       200:
 *         description: Competition record updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/VersenyekRecord'
 *       400:
 *         description: Bad request - Invalid input data
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Invalid input data"
 *       401:
 *         description: Unauthorized
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Unauthorized"
 *       404:
 *         description: Competition record not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Competition not found"
 *       500:
 *         description: Internal server error
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
      kategoria,
      verseny_neve,
      alapadatok_id,
      helyezes_1,
      helyezes_1_3,
      helyezes_1_10,
      versenyre_nevezettek,
      tanev_kezdete,
    } = req.body;

    const data = await update(
      id,
      kategoria, // versenyKategoria
      verseny_neve, // versenyNev
      helyezes_1, // helyezett_1
      helyezes_1_3, // helyezett_1_3
      helyezes_1_10, // dontobeJutott
      versenyre_nevezettek, // nevezettekSzama
      tanev_kezdete // tanev_kezdete
    );

    return res.status(200).json(data);
  } catch (error) {
    console.error("Error updating competition:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
