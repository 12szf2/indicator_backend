import e from "express";
import {
  getAll,
  getAllByAlapadatok,
  create,
  deleteAllByAlapadatok,
  update,
} from "../services/intezmenyi_neveltseg.service.js";

const router = e.Router();

/**
 * @swagger
 * tags:
 *   name: Intezmenyi_neveltseg
 *   description: Institutional education level data management
 *
 * components:
 *   schemas:
 *     IntezmenyiNeveltseg:
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
 *         pedagogusok_szama:
 *           type: integer
 *           description: Number of educators
 *           example: 52
 *         egyetemi_vegzettsegu_pedagogusok_szama:
 *           type: integer
 *           description: Number of university-educated educators
 *           example: 35
 *         foiskol_vegzettsegu_pedagogusok_szama:
 *           type: integer
 *           description: Number of college-educated educators
 *           example: 15
 *         egyeb_vegzettsegu_pedagogusok_szama:
 *           type: integer
 *           description: Number of educators with other qualifications
 *           example: 2
 *         osztaly_jele:
 *           type: string
 *           description: Class designation
 *           example: "9A"
 *         igazolatlan_ora:
 *           type: integer
 *           description: Number of unexcused hours
 *           example: 25
 *         oktato_testuleti_dicseret:
 *           type: integer
 *           description: Teaching staff commendations
 *           example: 5
 *         oktatoi_dicseret:
 *           type: integer
 *           description: Teacher commendations
 *           example: 12
 *         osztalyfonoki_dicseret:
 *           type: integer
 *           description: Class teacher commendations
 *           example: 8
 *         igazagatoi_dicseret:
 *           type: integer
 *           description: Principal commendations
 *           example: 3
 *         oktato_testuleti_figyelmeztetes:
 *           type: integer
 *           description: Teaching staff warnings
 *           example: 2
 *         oktatoi_figyelmeztetes:
 *           type: integer
 *           description: Teacher warnings
 *           example: 4
 *         osztalyfonoki_figyelmeztetes:
 *           type: integer
 *           description: Class teacher warnings
 *           example: 6
 *         osztalyfonoki_intes:
 *           type: integer
 *           description: Class teacher reprimands
 *           example: 3
 *         osztalyfonoki_megrovas:
 *           type: integer
 *           description: Class teacher reproofs
 *           example: 1
 *         igazgatoi_figyelmeztetes:
 *           type: integer
 *           description: Principal warnings
 *           example: 2
 *         igazgatoi_intes:
 *           type: integer
 *           description: Principal reprimands
 *           example: 1
 *         igazgatoi_megrovas:
 *           type: integer
 *           description: Principal reproofs
 *           example: 0
 *         fegyelmi_eljaras:
 *           type: integer
 *           description: Disciplinary procedures
 *           example: 1
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
 *         - osztaly_jele
 */

/**
 * @swagger
 * /intezmenyi_neveltseg/{tanev}:
 *   get:
 *     summary: Get institutional education level data by school year
 *     description: Retrieve institutional education level data for a specific school year and previous 4 years
 *     tags: [Intezmenyi_neveltseg]
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
 *         description: Institutional education level data retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/IntezmenyiNeveltseg'
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
    console.error("Error fetching intezmenyi neveltseg data:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

/**
 * @swagger
 * /intezmenyi_neveltseg/{alapadatokId}/{tanev}:
 *   get:
 *     summary: Get institutional education level data by school and year
 *     description: Retrieve institutional education level data for a specific school and school year
 *     tags: [Intezmenyi_neveltseg]
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
 *         description: Institutional education level data retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/IntezmenyiNeveltseg'
 *       401:
 *         description: Unauthorized - Invalid or missing token
 *       500:
 *         description: Server error
 *   delete:
 *     summary: Delete institutional education level data by school and year
 *     description: Delete all institutional education level data for a specific school and school year
 *     tags: [Intezmenyi_neveltseg]
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
 *         description: Institutional education level data deleted successfully
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
    console.error("Error fetching intezmenyi neveltseg data:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

/**
 * @swagger
 * /intezmenyi_neveltseg:
 *   post:
 *     summary: Create new institutional education level data
 *     description: Create new institutional education level data entry
 *     tags: [Intezmenyi_neveltseg]
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
 *               - osztaly_jele
 *             properties:
 *               alapadatok_id:
 *                 type: integer
 *                 description: School identifier reference
 *                 example: 1
 *               tanev_kezdete:
 *                 type: integer
 *                 description: School year start year
 *                 example: 2023
 *               osztaly_jele:
 *                 type: string
 *                 description: Class designation
 *                 example: "9A"
 *               igazolatlan_ora:
 *                 type: integer
 *                 description: Number of unexcused hours
 *                 example: 25
 *               oktato_testuleti_dicseret:
 *                 type: integer
 *                 description: Teaching staff commendations
 *                 example: 5
 *               oktatoi_dicseret:
 *                 type: integer
 *                 description: Teacher commendations
 *                 example: 12
 *               osztalyfonoki_dicseret:
 *                 type: integer
 *                 description: Class teacher commendations
 *                 example: 8
 *               igazagatoi_dicseret:
 *                 type: integer
 *                 description: Principal commendations
 *                 example: 3
 *               oktato_testuleti_figyelmeztetes:
 *                 type: integer
 *                 description: Teaching staff warnings
 *                 example: 2
 *               oktatoi_figyelmeztetes:
 *                 type: integer
 *                 description: Teacher warnings
 *                 example: 4
 *               osztalyfonoki_figyelmeztetes:
 *                 type: integer
 *                 description: Class teacher warnings
 *                 example: 6
 *               osztalyfonoki_intes:
 *                 type: integer
 *                 description: Class teacher reprimands
 *                 example: 3
 *               osztalyfonoki_megrovas:
 *                 type: integer
 *                 description: Class teacher reproofs
 *                 example: 1
 *               igazgatoi_figyelmeztetes:
 *                 type: integer
 *                 description: Principal warnings
 *                 example: 2
 *               igazgatoi_intes:
 *                 type: integer
 *                 description: Principal reprimands
 *                 example: 1
 *               igazgatoi_megrovas:
 *                 type: integer
 *                 description: Principal reproofs
 *                 example: 0
 *               fegyelmi_eljaras:
 *                 type: integer
 *                 description: Disciplinary procedures
 *                 example: 1
 *     responses:
 *       201:
 *         description: Institutional education level data created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/IntezmenyiNeveltseg'
 *       400:
 *         description: Bad request - Invalid input data
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
      osztaly_jele,
      igazolatlan_ora,
      oktato_testuleti_dicseret,
      oktatoi_dicseret,
      osztalyfonoki_dicseret,
      igazagatoi_dicseret,
      oktato_testuleti_figyelmeztetes,
      oktatoi_figyelmeztetes,
      osztalyfonoki_figyelmeztetes,
      osztalyfonoki_intes,
      osztalyfonoki_megrovas,
      igazgatoi_figyelmeztetes,
      igazgatoi_intes,
      igazgatoi_megrovas,
      fegyelmi_eljaras,
    } = req.body;

    const createdData = await create(
      alapadatok_id,
      tanev_kezdete,
      osztaly_jele,
      igazolatlan_ora,
      oktato_testuleti_dicseret,
      oktatoi_dicseret,
      osztalyfonoki_dicseret,
      igazagatoi_dicseret,
      oktato_testuleti_figyelmeztetes,
      oktatoi_figyelmeztetes,
      osztalyfonoki_figyelmeztetes,
      osztalyfonoki_intes,
      osztalyfonoki_megrovas,
      igazgatoi_figyelmeztetes,
      igazgatoi_intes,
      igazgatoi_megrovas,
      fegyelmi_eljaras
    );

    return res.status(201).json(createdData);
  } catch (error) {
    console.error("Error creating intezmenyi neveltseg data:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

router.put("/:alapadatokId/:tanev", async (req, res) => {
  try {
    const { alapadatokId, tanev } = req.params;
    const {
      osztaly_jele,
      igazolatlan_ora,
      oktato_testuleti_dicseret,
      oktatoi_dicseret,
      osztalyfonoki_dicseret,
      igazagatoi_dicseret,
      oktato_testuleti_figyelmeztetes,
      oktatoi_figyelmeztetes,
      osztalyfonoki_figyelmeztetes,
      osztalyfonoki_intes,
      osztalyfonoki_megrovas,
      igazgatoi_figyelmeztetes,
      igazgatoi_intes,
      igazgatoi_megrovas,
      fegyelmi_eljaras,
    } = req.body;

    // Assuming you have a service function to update the data
    const updatedData = await update(
      alapadatokId,
      tanev,
      osztaly_jele,
      igazolatlan_ora,
      oktato_testuleti_dicseret,
      oktatoi_dicseret,
      osztalyfonoki_dicseret,
      igazagatoi_dicseret,
      oktato_testuleti_figyelmeztetes,
      oktatoi_figyelmeztetes,
      osztalyfonoki_figyelmeztetes,
      osztalyfonoki_intes,
      osztalyfonoki_megrovas,
      igazgatoi_figyelmeztetes,
      igazgatoi_intes,
      igazgatoi_megrovas,
      fegyelmi_eljaras
    );

    return res.status(200).json(updatedData);
  } catch (error) {
    console.error("Error updating intezmenyi neveltseg data:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

router.delete("/:alapadatokId/:tanev", async (req, res) => {
  try {
    const { alapadatokId, tanev } = req.params;

    await deleteAllByAlapadatok(alapadatokId, tanev);

    return res.status(204).send();
  } catch (error) {
    console.error(
      "Error deleting intezmenyi neveltseg data by alapadatok:",
      error
    );
    return res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
