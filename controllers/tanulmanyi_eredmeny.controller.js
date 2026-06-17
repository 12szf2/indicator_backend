import e from "express";
import prisma from "../utils/prisma.js";

const router = e.Router();

/**
 * @swagger
 * tags:
 *   name: Tanulmanyi Eredmeny
 *   description: Tanulmanyi eredmeny management
 */

/**
 * @swagger
 * /tanulmanyi_eredmeny/{alapadatok_id}/{tanev}:
 *   get:
 *     summary: Get Tanulmanyi eredmeny data by school
 *     description: Retrieve all Tanulmanyi eredmeny statistics for a specific school (ignoring the tanev parameter as per requirement to return all years)
 *     tags: [Tanulmanyi Eredmeny]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: alapadatok_id
 *         required: true
 *         description: Basic data ID reference
 *         schema:
 *           type: string
 *           example: "60d5ecb74f0b2c1234567890"
 *       - in: path
 *         name: tanev
 *         required: true
 *         description: The school year start (e.g., 2023 for 2023-2024 school year)
 *         schema:
 *           type: integer
 *           example: 2023
 *     responses:
 *       200:
 *         description: Tanulmanyi eredmeny data retrieved successfully
 *       500:
 *         description: Server error
 */
router.get("/:alapadatok_id/:tanev", async (req, res) => {
  try {
    const { alapadatok_id } = req.params;
    const eredmenyek = await prisma.tanulmanyiEredmeny.findMany({
      where: {
        alapadatok_id: alapadatok_id,
      },
      orderBy: [
        { tanev_kezdete: "desc" },
        { intezmeny_tipusa: "asc" },
        { jogviszony: "asc" },
        { felev: "asc" }
      ]
    });
    res.status(200).json(eredmenyek);
  } catch (error) {
    console.error("Error fetching tanulmanyi_eredmeny:", error);
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

/**
 * @swagger
 * /tanulmanyi_eredmeny:
 *   post:
 *     summary: Create Tanulmanyi eredmeny data
 *     tags: [Tanulmanyi Eredmeny]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       201:
 *         description: Data created successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */
router.post("/", async (req, res) => {
  try {
    const {
      alapadatok_id,
      tanev_kezdete,
      intezmeny_tipusa,
      jogviszony,
      felev,
      kituno,
      bukott
    } = req.body;

    if (!alapadatok_id || !tanev_kezdete || !intezmeny_tipusa || !jogviszony || !felev) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const ujEredmeny = await prisma.tanulmanyiEredmeny.create({
      data: {
        alapadatok_id,
        tanev_kezdete: parseInt(tanev_kezdete),
        intezmeny_tipusa,
        jogviszony,
        felev,
        kituno: kituno !== undefined && kituno !== null ? parseInt(kituno) : null,
        bukott: bukott !== undefined && bukott !== null ? parseInt(bukott) : null
      }
    });

    res.status(201).json(ujEredmeny);
  } catch (error) {
    console.error("Error creating tanulmanyi_eredmeny:", error);
    if (error.code === 'P2002') {
      return res.status(409).json({ error: "Record already exists for this unique combination" });
    }
    res.status(500).json({ error: "Failed to create data" });
  }
});

/**
 * @swagger
 * /tanulmanyi_eredmeny/{id}:
 *   put:
 *     summary: Update Tanulmanyi eredmeny data by ID
 *     tags: [Tanulmanyi Eredmeny]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Record ID
 *         schema:
 *           type: integer
 *           example: 1
 *     responses:
 *       200:
 *         description: Data updated successfully
 *       400:
 *         description: Bad request
 *       404:
 *         description: Not found
 *       500:
 *         description: Internal server error
 */
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const {
      alapadatok_id,
      tanev_kezdete,
      intezmeny_tipusa,
      jogviszony,
      felev,
      kituno,
      bukott
    } = req.body;

    if (!alapadatok_id || !tanev_kezdete || !intezmeny_tipusa || !jogviszony || !felev) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const updatedEredmeny = await prisma.tanulmanyiEredmeny.update({
      where: { id: parseInt(id) },
      data: {
        alapadatok_id,
        tanev_kezdete: parseInt(tanev_kezdete),
        intezmeny_tipusa,
        jogviszony,
        felev,
        kituno: kituno !== undefined && kituno !== null ? parseInt(kituno) : null,
        bukott: bukott !== undefined && bukott !== null ? parseInt(bukott) : null
      }
    });

    res.status(200).json(updatedEredmeny);
  } catch (error) {
    console.error("Error updating tanulmanyi_eredmeny:", error);
    if (error.code === 'P2025') {
      return res.status(404).json({ error: "Record not found" });
    }
    if (error.code === 'P2002') {
      return res.status(409).json({ error: "Update would create a duplicate record" });
    }
    res.status(500).json({ error: "Failed to update data" });
  }
});

export default router;
