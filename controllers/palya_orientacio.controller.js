import e from "express";
import {
  getAllByAlapadatok,
  create,
  update,
  deleteById
} from "../services/palya_orientacio.service.js";

const router = e.Router();

/**
 * @swagger
 * tags:
 *   name: PalyaOrientacio
 *   description: Pályaorientáció management
 */

/**
 * @swagger
 * /palya_orientacio/{alapadatokId}/{tanev}:
 *   get:
 *     summary: Get palya_orientacio by school and year
 *     tags: [PalyaOrientacio]
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
    const { alapadatokId, tanev } = req.params;
    if (!alapadatokId || !tanev) {
      return res.status(400).json({ error: "alapadatokId and tanev are required" });
    }
    const data = await getAllByAlapadatok(alapadatokId, parseInt(tanev));

    return res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching palya_orientacio data:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

/**
 * @swagger
 * /palya_orientacio:
 *   post:
 *     summary: Create palya_orientacio
 *     tags: [PalyaOrientacio]
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
 *               kategoria:
 *                 type: string
 *               tevekenyseg_neve:
 *                 type: string
 *               resztvevok_szama:
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
      kategoria,
      tevekenyseg_neve,
      resztvevok_szama
    } = req.body;

    const createdData = await create(
      alapadatok_id,
      tanev_kezdete,
      kategoria,
      tevekenyseg_neve,
      resztvevok_szama
    );

    return res.status(201).json(createdData);
  } catch (error) {
    console.error("Error creating palya_orientacio data:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

/**
 * @swagger
 * /palya_orientacio/{id}:
 *   put:
 *     summary: Update palya_orientacio
 *     tags: [PalyaOrientacio]
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
 *               kategoria:
 *                 type: string
 *               tevekenyseg_neve:
 *                 type: string
 *               resztvevok_szama:
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
      kategoria,
      tevekenyseg_neve,
      resztvevok_szama
    } = req.body;

    const updatedData = await update(
      id,
      kategoria,
      tevekenyseg_neve,
      resztvevok_szama
    );

    return res.status(200).json(updatedData);
  } catch (error) {
    console.error("Error updating palya_orientacio data:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

/**
 * @swagger
 * /palya_orientacio/{id}:
 *   delete:
 *     summary: Delete palya_orientacio
 *     tags: [PalyaOrientacio]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Deleted
 *       500:
 *         description: Server error
 */
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await deleteById(id);

    return res.status(204).send();
  } catch (error) {
    console.error("Error deleting palya_orientacio data:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
