# Indicator Backend API - Complete Documentation

## Table of Contents

1. [Overview](#overview)
2. [Quick Start](#quick-start)
3. [Authentication](#authentication)
4. [API Documentation Access](#api-documentation-access)
5. [Complete Controller Documentation](#complete-controller-documentation)
6. [Swagger Documentation Guide](#swagger-documentation-guide)
7. [Development Guidelines](#development-guidelines)
8. [Documentation Maintenance](#documentation-maintenance)

## Overview

The Indicator Backend API is a comprehensive educational data management system that handles various aspects of school data, student analytics, satisfaction measurements, exam results, and administrative information. The API serves as the backend for educational institutions to manage and analyze their data.

### Key Features

- **Educational Data Management**: Comprehensive CRUD operations for school data
- **Student Analytics**: Student-to-teacher ratios, enrollment numbers, special needs tracking
- **Performance Tracking**: Exam results, competition data, graduation placement
- **Satisfaction Measurements**: Employer and student satisfaction surveys
- **Administrative Tools**: User management, caching, logging, and authentication

### Technology Stack

- **Framework**: Express.js
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: JWT Bearer tokens
- **Documentation**: OpenAPI 3.0.0 with Swagger UI
- **API Version**: v1

## Quick Start

### 1. Start the Server

```bash
npm run dev
```

The server will start on `http://localhost:5300`

### 2. Access API Documentation

- **Swagger UI**: `http://localhost:5300/api-docs` (requires authentication)
- **OpenAPI JSON**: `http://localhost:5300/api-docs.json`

### 3. Authentication Flow

1. Use authentication endpoints to obtain JWT token
2. Include token in Authorization header: `Bearer <your-jwt-token>`
3. Access protected endpoints with valid token

### 4. Test Endpoints

- Use Swagger UI's "Try it out" feature
- Include JWT token in Authorization header
- Test endpoints interactively

## Authentication

All API endpoints require JWT Bearer authentication unless otherwise specified.

### Authentication Header Format

```
Authorization: Bearer <your-jwt-token>
```

### Public Endpoints

- `POST /api/v1/auth/login` - User login
- `POST /api/v1/auth/register` - User registration (if enabled)

## API Documentation Access

### Swagger UI

- **URL**: `http://localhost:5300/api-docs`
- **Features**:
  - Interactive API testing
  - Comprehensive endpoint documentation
  - Schema validation
  - Request/response examples
- **Requirements**: Valid JWT authentication

### OpenAPI Specification

- **Main File**: `openapi.yaml` - Complete OpenAPI 3.0 specification
- **Format**: YAML/JSON
- **Content**: All schemas, endpoints, authentication requirements

## Complete Controller Documentation

The API consists of 25+ controllers, all fully documented with OpenAPI specifications. Below is the complete list of available controllers and their purposes:

### Core Controllers

#### 1. Authentication & User Management

- **auth.controller.js** - User authentication, login, token management
- **user.controller.js** - User profile management, CRUD operations
- **cache.controller.js** - Cache management and optimization
- **log.controller.js** - System logging and audit trails

#### 2. Basic Data Management

- **alapadatok.controller.js** - Basic school information and metadata
- **tablelist.controller.js** - Available data tables management

### Student Data Controllers

#### 3. Student Information

- **tanulo_letszam.controller.js** - Student enrollment numbers
- **egy_oktatora_juto_tanulo.controller.js** - Student-to-teacher ratios
- **felvettek_szama.controller.js** - Admitted students data
- **sajatos_nevelesu_tanulok.controller.js** - Students with special educational needs
- **hh_es_hhh_nevelesu_tanulok.controller.js** - Disadvantaged students (HH/HHH)

#### 4. Academic Performance

- **tanugyi_adatok.controller.js** - Academic records and transcripts
- **vizsgaeredmenyek.controller.js** - Exam results and assessments
- **szakmai_vizsga_eredmenyek.service.controller.js** - Professional exam results
- **kompetencia.controller.js** - Competency assessments
- **lemorzsolodas.controller.js** - Student dropout tracking
- **dobbanto.controller.js** - Repeating students data

### Institutional Data Controllers

#### 5. School Management

- **intezmenyi_neveltseg.controller.js** - Institutional education levels
- **muhelyiskola.controller.js** - Workshop school programs
- **szmsz.controller.js** - SZMSZ vocational statistics
- **nszfh.controller.js** - NSZFH competency assessments

#### 6. Performance & Satisfaction

- **elhelyezkedes.controller.js** - Graduate placement tracking
- **elegedettseg.controller.js** - Employer satisfaction surveys
- **elegedettseg_meres.controller.js** - Satisfaction measurement tools
- **versenyek.controller.js** - Competition and contest data

### Documentation Status

✅ **All 25+ controllers are fully documented** with:

- Complete OpenAPI schemas
- Comprehensive endpoint documentation
- Request/response examples
- Authentication requirements
- Error handling specifications

## Swagger Documentation Guide

### Adding Documentation to New Endpoints

When creating new API endpoints, follow this structure for Swagger JSDoc comments:

```javascript
/**
 * @swagger
 * /api/v1/endpoint:
 *   get:
 *     summary: Brief description of the endpoint
 *     description: Detailed description of what this endpoint does
 *     tags: [ControllerName]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: Unique identifier
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/SchemaName'
 *       401:
 *         description: Unauthorized - Invalid or missing JWT token
 *       500:
 *         description: Internal server error
 */
```

### Schema Definition

Define reusable schemas in the components section:

```javascript
/**
 * @swagger
 * components:
 *   schemas:
 *     SchemaName:
 *       type: object
 *       required:
 *         - requiredField1
 *         - requiredField2
 *       properties:
 *         id:
 *           type: string
 *           format: uuid
 *           description: Unique identifier
 *         name:
 *           type: string
 *           description: Name field
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Creation timestamp
 */
```

### Authentication Documentation

All protected endpoints should include:

```javascript
/**
 * @swagger
 * security:
 *   - bearerAuth: []
 */
```

### Common Response Patterns

#### Success Responses

- **200**: Successful GET/PUT operations
- **201**: Successful POST operations
- **204**: Successful DELETE operations

#### Error Responses

- **400**: Bad Request - Invalid input data
- **401**: Unauthorized - Missing or invalid JWT token
- **404**: Not Found - Resource doesn't exist
- **500**: Internal Server Error

## Development Guidelines

### API Design Principles

1. **RESTful Design**: Follow REST conventions for endpoint naming and HTTP methods
2. **Consistent Responses**: Use standardized response formats across all endpoints
3. **Proper Status Codes**: Return appropriate HTTP status codes
4. **Authentication**: Protect all endpoints except public auth endpoints
5. **Validation**: Validate all input data before processing

### Endpoint Naming Conventions

```
GET    /api/v1/resource        # Get all resources
GET    /api/v1/resource/{id}   # Get specific resource
POST   /api/v1/resource        # Create new resource
PUT    /api/v1/resource/{id}   # Update specific resource
DELETE /api/v1/resource/{id}   # Delete specific resource
```

### Common URL Patterns

- **By School**: `/api/v1/resource/{alapadatok_id}`
- **By Year**: `/api/v1/resource/year/{year}`
- **By School & Year**: `/api/v1/resource/{alapadatok_id}/{year}`

### Request/Response Format

#### Request Headers

```
Content-Type: application/json
Authorization: Bearer <jwt-token>
```

#### Standard Response Format

```json
{
  "success": true,
  "data": [...],
  "message": "Operation completed successfully"
}
```

#### Error Response Format

```json
{
  "success": false,
  "error": "Error message",
  "details": "Additional error details"
}
```

## Documentation Maintenance

### File Organization

- **Primary Documentation**: This file (`API_DOCUMENTATION.md`)
- **OpenAPI Specification**: `openapi.yaml` - Complete API specification
- **Controller Comments**: Swagger JSDoc comments in individual controller files

### Keeping Documentation Updated

1. **New Endpoints**: Add Swagger JSDoc comments to new controller methods
2. **Schema Changes**: Update schemas in `openapi.yaml` when data models change
3. **Version Updates**: Update version information when API changes
4. **Testing**: Validate documentation with `npm run validate-docs`

### Documentation Validation

Run the documentation validator to ensure consistency:

```bash
node validate-docs.js
```

### Swagger UI Updates

The Swagger UI automatically updates when:

- Server restarts after code changes
- JSDoc comments are modified
- `openapi.yaml` file is updated

### Best Practices

1. **Keep Comments Current**: Update JSDoc comments when modifying endpoints
2. **Use Examples**: Include request/response examples in documentation
3. **Describe Edge Cases**: Document error conditions and special behaviors
4. **Test Documentation**: Use Swagger UI to verify documentation accuracy
5. **Version Control**: Track documentation changes in git commits

---

## Additional Resources

- **OpenAPI Specification**: [OpenAPI 3.0.0 Documentation](https://swagger.io/specification/)
- **Swagger JSDoc**: [Swagger JSDoc Guide](https://github.com/Surnet/swagger-jsdoc)
- **Express.js**: [Express.js Documentation](https://expressjs.com/)
- **Prisma ORM**: [Prisma Documentation](https://www.prisma.io/docs/)

---

_This documentation covers the complete Indicator Backend API system. For specific endpoint details, refer to the Swagger UI at `/api-docs` or the `openapi.yaml` specification file._
