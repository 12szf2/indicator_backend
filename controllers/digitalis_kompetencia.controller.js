import e from "express";
import {
  getAllByAlapadatok,
  create,
  update,
} from "../services/digitalis_kompetencia.service.js";

const router = e.Router();

/**
 * @swagger
 * tags:
 *   name: DigitalisKompetencia
 *   description: Digitalis kompetencia management
 */

/**
 * @swagger
 * /digitalis_kompetencia/{alapadatokId}/{tanev}:
 *   get:
 *     summary: Get digitalis kompetencia by school and year
 *     tags: [DigitalisKompetencia]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: alapadatokId
 *         required: true
 *         schema:
 *           type: string
 *       - in: path
 *         name: tanev
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Success
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
    console.error("Error fetching digitalis_kompetencia data:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

/**
 * @swagger
 * /digitalis_kompetencia:
 *   post:
 *     summary: Create digitalis kompetencia
 *     tags: [DigitalisKompetencia]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               alapadatok_id:
 *                 type: string
 *               tanev_kezdete:
 *                 type: integer
 *               fejleszto_oktatok_szama:
 *                 type: string
 *               hasznalo_oktatok_szama:
 *                 type: string
 *     responses:
 *       201:
 *         description: Created
 *       500:
 *         description: Server error
 */
router.post("/", async (req, res) => {
  try {
    const {
      alapadatok_id,
      tanev_kezdete,
      fejleszto_oktatok_szama,
      hasznalo_oktatok_szama
    } = req.body;

    const createdData = await create(
      alapadatok_id,
      tanev_kezdete,
      fejleszto_oktatok_szama,
      hasznalo_oktatok_szama
    );

    return res.status(201).json(createdData);
  } catch (error) {
    console.error("Error creating digitalis_kompetencia data:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

/**
 * @swagger
 * /digitalis_kompetencia/{id}:
 *   put:
 *     summary: Update digitalis kompetencia
 *     tags: [DigitalisKompetencia]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               alapadatok_id:
 *                 type: string
 *               tanev_kezdete:
 *                 type: integer
 *               fejleszto_oktatok_szama:
 *                 type: string
 *               hasznalo_oktatok_szama:
 *                 type: string
 *     responses:
 *       200:
 *         description: Updated
 *       500:
 *         description: Server error
 */
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const {
      alapadatok_id,
      tanev_kezdete,
      fejleszto_oktatok_szama,
      hasznalo_oktatok_szama
    } = req.body;

    const updatedData = await update(
      id,
      alapadatok_id,
      tanev_kezdete,
      fejleszto_oktatok_szama,
      hasznalo_oktatok_szama
    );

    return res.status(200).json(updatedData);
  } catch (error) {
    console.error("Error updating digitalis_kompetencia data:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
