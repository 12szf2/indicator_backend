import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

/**
 * Configuration options for Swagger JSDoc
 */
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Indicator Backend API",
      version: "1.0.0",
      description: "API documentation for the Indicator application backend",
      contact: {
        name: "API Support",
        url: "https://indicator.pollak.info",
        email: "support@pollak.info",
      },
      license: {
        name: "Private",
        url: "https://indicator.pollak.info/license",
      },
    },
    servers: [
      {
        url: "/api/v1",
        description: "API v1",
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  // Path patterns to API route files that contain JSDoc comments
  apis: ["./controllers/*.js", "./services/*.js", "./index.js"],
};

/**
 * Generate Swagger specification from JSDoc comments
 */
const swaggerSpec = swaggerJsdoc(options);

/**
 * Configure Express to use Swagger
 * @param {object} app - Express application instance
 */
export function setupSwagger(app) {
  // Serve Swagger UI at /api-docs
  app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(swaggerSpec, {
      explorer: true,
      customCss: ".swagger-ui .topbar { display: none }",
      customSiteTitle: "Indicator API Documentation",
    })
  );

  // Serve swagger JSON at /api-docs.json
  app.get("/api-docs.json", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.send(swaggerSpec);
  });

  console.log("Swagger documentation available at /api-docs");
}

/**
 * Common response schemas to be reused in JSDoc comments
 */
export const responseSchemas = {
  Success: {
    type: "object",
    properties: {
      status: {
        type: "string",
        example: "success",
      },
      data: {
        type: "object",
      },
    },
  },
  Error: {
    type: "object",
    properties: {
      status: {
        type: "string",
        example: "error",
      },
      message: {
        type: "string",
        example: "Error message description",
      },
    },
  },
  Unauthorized: {
    type: "object",
    properties: {
      status: {
        type: "string",
        example: "error",
      },
      message: {
        type: "string",
        example: "Unauthorized: Invalid or expired token",
      },
    },
  },
};
