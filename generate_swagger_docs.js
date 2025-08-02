#!/usr/bin/env node
/**
 * Script to add Swagger documentation to all remaining controllers
 */

const controllersToDocument = [
  {
    file: "dobbanto.controller.js",
    tag: "Dobbanto",
    description: "Repeating students data management",
    schema: "Dobbanto",
    routePrefix: "/dobbanto",
  },
  {
    file: "muhelyiskola.controller.js",
    tag: "Muhelyiskola",
    description: "Workshop school data management",
    schema: "Muhelyiskola",
    routePrefix: "/muhelyiskola",
  },
  {
    file: "nszfh.controller.js",
    tag: "NSZFH",
    description: "NSZFH data management",
    schema: "NSZFH",
    routePrefix: "/nszfh",
  },
  {
    file: "sajatos_nevelesu_tanulok.controller.js",
    tag: "Sajatos_nevelesu_tanulok",
    description: "Students with special needs data management",
    schema: "SajatosNeveluTanulok",
    routePrefix: "/sajatos_nevelesu_tanulok",
  },
  {
    file: "szakmai_vizsga_eredmenyek.service.controller.js",
    tag: "Szakmai_vizsga_eredmenyek",
    description: "Professional exam results data management",
    schema: "SzakmaiVizsgaEredmenyek",
    routePrefix: "/szakmai_vizsga_eredmenyek",
  },
  {
    file: "szmsz.controller.js",
    tag: "SZMSZ",
    description: "SZMSZ data management",
    schema: "SZMSZ",
    routePrefix: "/szmsz",
  },
  {
    file: "vizsgaeredmenyek.controller.js",
    tag: "Vizsgaeredmenyek",
    description: "Exam results data management",
    schema: "Vizsgaeredmenyek",
    routePrefix: "/vizsgaeredmenyek",
  },
];

// Template for basic CRUD controller documentation
const generateControllerDocumentation = (config) => {
  return `/**
 * @swagger
 * tags:
 *   name: ${config.tag}
 *   description: ${config.description}
 *
 * components:
 *   schemas:
 *     ${config.schema}:
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
 * ${config.routePrefix}/{tanev}:
 *   get:
 *     summary: Get ${config.description.toLowerCase()} by school year
 *     description: Retrieve ${config.description.toLowerCase()} for a specific school year and previous 4 years
 *     tags: [${config.tag}]
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
 *         description: Data retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/${config.schema}'
 *       401:
 *         description: Unauthorized - Invalid or missing token
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * ${config.routePrefix}/{alapadatokId}/{tanev}:
 *   get:
 *     summary: Get ${config.description.toLowerCase()} by school and year
 *     description: Retrieve ${config.description.toLowerCase()} for a specific school and school year
 *     tags: [${config.tag}]
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
 *         description: Data retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/${config.schema}'
 *       401:
 *         description: Unauthorized - Invalid or missing token
 *       500:
 *         description: Server error
 *   delete:
 *     summary: Delete ${config.description.toLowerCase()} by school and year
 *     description: Delete all ${config.description.toLowerCase()} for a specific school and school year
 *     tags: [${config.tag}]
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
 *         description: Data deleted successfully
 *       401:
 *         description: Unauthorized - Invalid or missing token
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * ${config.routePrefix}:
 *   post:
 *     summary: Create new ${config.description.toLowerCase()}
 *     description: Create new ${config.description.toLowerCase()} entry
 *     tags: [${config.tag}]
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
 *     responses:
 *       201:
 *         description: Data created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/${config.schema}'
 *       400:
 *         description: Bad request - Invalid input data
 *       401:
 *         description: Unauthorized - Invalid or missing token
 *       500:
 *         description: Server error
 */`;
};

console.log(
  "📝 Generated Swagger documentation templates for remaining controllers:"
);
console.log("");

controllersToDocument.forEach((config) => {
  console.log(`## ${config.file}`);
  console.log("```javascript");
  console.log(generateControllerDocumentation(config));
  console.log("```");
  console.log("");
});

console.log(
  "📋 Add these documentation blocks to the beginning of each respective controller file."
);
console.log(
  "📋 Make sure to import the router at the top and adjust any specific field names as needed."
);
