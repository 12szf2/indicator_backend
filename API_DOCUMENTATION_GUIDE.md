# Swagger Documentation Guide

This guide explains how to add and maintain Swagger API documentation for the Indicator Backend.

## Overview

Our API documentation uses [Swagger UI](https://swagger.io/tools/swagger-ui/) via the `swagger-ui-express` package and [Swagger JSDoc](https://github.com/Surnet/swagger-jsdoc) to generate the OpenAPI specification from JSDoc comments in our code.

The documentation is available at `/api-docs` when the server is running.

## How to Document Endpoints

### Basic Structure

To document an API endpoint, add JSDoc comments above the route handler:

```javascript
/**
 * @swagger
 * /path/to/endpoint:
 *   method:
 *     summary: Brief description
 *     description: Longer description of what the endpoint does
 *     tags: [Category]
 *     parameters:
 *       - in: path/query/header/cookie
 *         name: paramName
 *         schema:
 *           type: string
 *         required: true
 *         description: Parameter description
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               property1:
 *                 type: string
 *     responses:
 *       200:
 *         description: Success response description
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Schema'
 *       400:
 *         description: Error response description
 */
```

### Define Models/Schemas

Define reusable schemas in your files:

```javascript
/**
 * @swagger
 * components:
 *   schemas:
 *     ModelName:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         name:
 *           type: string
 *           example: Example Name
 */
```

### Common Data Types

- `string`
- `number`
- `integer`
- `boolean`
- `array`
- `object`

### Security

Our API uses JWT Bearer authentication:

```javascript
/**
 * @swagger
 * /secure/endpoint:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     // rest of documentation
 */
```

## Best Practices

1. **Group Related Endpoints**: Use the same tag for related endpoints to ensure they're organized logically in the UI.
2. **Use Schemas**: Define and reuse schemas for consistent documentation and to avoid duplication.
3. **Include Examples**: Provide realistic example values for all properties to help API consumers understand the expected data.
4. **Document Error Responses**: Include documentation for all possible error responses, with proper status codes and response formats.
5. **Keep Documentation Updated**: Update the documentation when endpoints change to ensure it always reflects the current state of the API.
6. **Consistent Naming**: Use consistent naming conventions for parameters, properties, and schemas across the entire API.
7. **Be Descriptive**: Provide clear, concise descriptions for endpoints, parameters, and response objects.
8. **Use Security Definitions**: Always include security requirements for protected endpoints.
9. **Validate Documentation**: Regularly check the Swagger UI to ensure the documentation renders correctly and makes sense.
10. **Document Required Fields**: Clearly indicate which fields are required in request bodies and parameters.

## Available Tags

- `Authentication`: User authentication and token management
- `Users`: User management endpoints
- `Cache`: Cache management endpoints
- `Alapadatok`: Basic school information management
- `Kompetencia`: Competency measurement data management
- `Tanulo_letszam`: Student enrollment data management
- `Felvettek_szama`: Student admission data management
- `Tanugyi_adatok`: Educational data management

## Adding New Tags

To add a new tag, include it in the tag definition at the top of your controller file:

```javascript
/**
 * @swagger
 * tags:
 *   name: NewTagName
 *   description: Description of this category of endpoints
 */
```

## Examples

See existing controllers like `auth.controller.js`, `user.controller.js`, and `cache.controller.js` for examples of how to document different types of endpoints and schemas.

## Testing and Verification

1. **Access Swagger UI**: After starting the server, navigate to `/api-docs` in your browser.
2. **Verify Endpoint Documentation**: Check that all endpoints are properly documented and organized under the correct tags.
3. **Test Try It Out Feature**: Use the Swagger UI "Try it out" feature to test endpoints directly from the documentation.
4. **Check for Schema Accuracy**: Ensure the request and response schemas match the actual API behavior.
5. **Verify Security Requirements**: Make sure protected endpoints require authentication in the documentation.

## Common Issues and Solutions

1. **Documentation Not Showing Up**: Ensure your JSDoc comments have the `@swagger` tag and follow the proper format.
2. **Schema References Not Working**: Check that schema references (`$ref`) point to properly defined schemas.
3. **Invalid OpenAPI Specification**: Use a validator to check for syntax errors in your Swagger documentation.
4. **Inconsistent Response Formats**: Ensure your actual API responses match the documented schemas.
5. **Missing Required Fields**: Make sure all required fields are properly marked as `required` in schemas.
