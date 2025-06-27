import e from "express";
import { getAll, create, update } from "../services/tablelist.service.js";

const router = e.Router();

/**
 * @swagger
 * tags:
 *   name: TableList
 *   description: Table list management endpoints for managing available data tables
 *
 * components:
 *   schemas:
 *     TableList:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           format: uuid
 *           description: Unique identifier for the table
 *           example: "123e4567-e89b-12d3-a456-426614174000"
 *         name:
 *           type: string
 *           maxLength: 100
 *           description: Name of the table
 *           example: "tanugyi_adatok"
 *         isAvailable:
 *           type: boolean
 *           description: Whether the table is available for access
 *           example: true
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: When the table entry was created
 *           example: "2024-01-01T00:00:00.000Z"
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           nullable: true
 *           description: When the table entry was last updated
 *           example: "2024-01-02T12:30:00.000Z"
 *     TableListInput:
 *       type: object
 *       required:
 *         - name
 *         - isAvailable
 *       properties:
 *         name:
 *           type: string
 *           maxLength: 100
 *           description: Name of the table
 *           example: "tanugyi_adatok"
 *         isAvailable:
 *           type: boolean
 *           description: Whether the table should be available for access
 *           example: true
 *     TableListError:
 *       type: object
 *       properties:
 *         error:
 *           type: string
 *           description: Error message
 *           example: "Invalid table data."
 */

/**
 * @swagger
 * /tablelist:
 *   get:
 *     summary: Get all tables
 *     description: Retrieves a list of all available tables in the system
 *     tags: [TableList]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of tables retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/TableList'
 *             example:
 *               - id: "123e4567-e89b-12d3-a456-426614174000"
 *                 name: "tanugyi_adatok"
 *                 isAvailable: true
 *                 createdAt: "2024-01-01T00:00:00.000Z"
 *                 updatedAt: "2024-01-02T12:30:00.000Z"
 *               - id: "987fcdeb-51d2-4567-8901-123456789abc"
 *                 name: "tanulo_letszam"
 *                 isAvailable: false
 *                 createdAt: "2024-01-01T00:00:00.000Z"
 *                 updatedAt: null
 *       401:
 *         description: Unauthorized - Invalid or missing authentication token
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TableListError'
 *             example:
 *               error: "Unauthorized: Invalid or expired token"
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TableListError'
 *             example:
 *               error: "Internal server error"
 */
router.get("/", async (req, res) => {
  const data = await getAll();

  res.status(200).json(data);
});

/**
 * @swagger
 * /tablelist:
 *   post:
 *     summary: Create a new table
 *     description: Creates a new table entry in the system
 *     tags: [TableList]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/TableListInput'
 *           example:
 *             name: "new_table"
 *             isAvailable: true
 *     responses:
 *       201:
 *         description: Table created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TableList'
 *             example:
 *               id: "123e4567-e89b-12d3-a456-426614174000"
 *               name: "new_table"
 *               isAvailable: true
 *               createdAt: "2024-01-01T00:00:00.000Z"
 *               updatedAt: null
 *       400:
 *         description: Bad request - Invalid input data
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TableListError'
 *             example:
 *               error: "Invalid table data."
 *       401:
 *         description: Unauthorized - Invalid or missing authentication token
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TableListError'
 *             example:
 *               error: "Unauthorized: Invalid or expired token"
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TableListError'
 *             example:
 *               error: "Failed to create table."
 */
router.post("/", async (req, res) => {
  const { name, isAvailable } = req.body;

  if (!name || typeof isAvailable !== "boolean") {
    return res.status(400).json({ error: "Invalid table data." });
  }

  try {
    const newTable = await create(name, isAvailable);
    res.status(201).json(newTable);
  } catch (error) {
    console.error("Error creating table:", error);
    res.status(500).json({ error: "Failed to create table." });
  }
});

/**
 * @swagger
 * /tablelist/{id}:
 *   put:
 *     summary: Update an existing table
 *     description: Updates an existing table entry in the system
 *     tags: [TableList]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Unique identifier of the table to update
 *         schema:
 *           type: string
 *           format: uuid
 *         example: "123e4567-e89b-12d3-a456-426614174000"
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/TableListInput'
 *           example:
 *             name: "updated_table"
 *             isAvailable: false
 *     responses:
 *       200:
 *         description: Table updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TableList'
 *             example:
 *               id: "123e4567-e89b-12d3-a456-426614174000"
 *               name: "updated_table"
 *               isAvailable: false
 *               createdAt: "2024-01-01T00:00:00.000Z"
 *               updatedAt: "2024-01-02T12:30:00.000Z"
 *       400:
 *         description: Bad request - Invalid input data
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TableListError'
 *             example:
 *               error: "Invalid table data."
 *       401:
 *         description: Unauthorized - Invalid or missing authentication token
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TableListError'
 *             example:
 *               error: "Unauthorized: Invalid or expired token"
 *       404:
 *         description: Table not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TableListError'
 *             example:
 *               error: "Table not found"
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TableListError'
 *             example:
 *               error: "Failed to update table."
 */
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { name, isAvailable } = req.body;
  if (!name || typeof isAvailable !== "boolean") {
    return res.status(400).json({ error: "Invalid table data." });
  }

  try {
    const updatedTable = await update(id, name, isAvailable);
    res.status(200).json(updatedTable);
  } catch (error) {
    console.error("Error updating table:", error);
    res.status(500).json({ error: "Failed to update table." });
  }
});

export default router;
