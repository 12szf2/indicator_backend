# Indicator Backend API Documentation

## Overview

This document provides comprehensive information about the Indicator Backend API endpoints, including the OpenAPI documentation for the TableList controller.

## Access Documentation

### Swagger UI

- **URL**: `http://localhost:5300/api-docs` (requires authentication)
- **Features**: Interactive API testing, comprehensive endpoint documentation
- **Authentication**: Required (JWT Bearer token)

### OpenAPI Specification

- **File**: `openapi.yaml` - Complete OpenAPI 3.0 specification
- **URL**: `http://localhost:5300/api-docs.json` - JSON format specification

## Quick Start

1. **Start the server**:

   ```bash
   npm run dev
   ```

2. **Access API documentation**:

   - Navigate to `http://localhost:5300/api-docs`
   - Login first using the authentication endpoints

3. **Test endpoints**:
   - Use the "Try it out" feature in Swagger UI
   - Include your JWT token in the Authorization header

## TableList API Endpoints

The TableList controller manages available data tables in the system.

### Base URL

```
/api/v1/tablelist
```

### Authentication

All TableList endpoints require JWT Bearer authentication.

### Endpoints

#### GET /tablelist

Retrieve all available tables.

**Response**: Array of table objects

```json
[
  {
    "id": "123e4567-e89b-12d3-a456-426614174000",
    "name": "tanugyi_adatok",
    "isAvailable": true,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-02T12:30:00.000Z"
  }
]
```

#### POST /tablelist

Create a new table entry.

**Request Body**:

```json
{
  "name": "new_table",
  "isAvailable": true
}
```

**Response**: Created table object (201 status)

#### PUT /tablelist/{id}

Update an existing table.

**Parameters**:

- `id` (path): UUID of the table to update

**Request Body**:

```json
{
  "name": "updated_table",
  "isAvailable": false
}
```

**Response**: Updated table object (200 status)

### Error Responses

All endpoints return consistent error responses:

```json
{
  "error": "Error message description"
}
```

Common status codes:

- `400`: Bad Request - Invalid input data
- `401`: Unauthorized - Missing or invalid token
- `404`: Not Found - Resource doesn't exist
- `500`: Internal Server Error - Server-side error

## Authentication Flow

1. **Login**: POST `/api/v1/auth/login`

   ```json
   {
     "email": "user@example.com",
     "password": "password"
   }
   ```

2. **Receive token**: Extract `token` from response

3. **Use token**: Include in Authorization header:
   ```
   Authorization: Bearer <your-token>
   ```

## Data Models

### TableList Schema

```typescript
interface TableList {
  id: string; // UUID
  name: string; // Max 100 characters
  isAvailable: boolean; // Availability status
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string, nullable
}
```

### Input Schema

```typescript
interface TableListInput {
  name: string; // Required, max 100 characters
  isAvailable: boolean; // Required
}
```

## Development

### Adding Documentation

Follow the existing JSDoc pattern in controllers:

```javascript
/**
 * @swagger
 * /endpoint:
 *   method:
 *     summary: Brief description
 *     tags: [TagName]
 *     // ... rest of documentation
 */
```

### Validation

- Check Swagger UI after changes
- Validate OpenAPI spec syntax
- Test endpoints with "Try it out"

## Files Structure

```
├── controllers/
│   ├── tablelist.controller.js    # TableList endpoints with Swagger docs
│   └── ...                        # Other controllers
├── utils/
│   └── swagger.js                 # Swagger configuration
├── openapi.yaml                   # Complete OpenAPI specification
└── API_DOCUMENTATION_GUIDE.md     # Documentation guidelines
```

## Support

For API support or questions:

- **Email**: support@pollak.info
- **Documentation**: Available at `/api-docs` when server is running
- **Issues**: Check the API_DOCUMENTATION_GUIDE.md for common problems

## Security

- All endpoints (except auth) require JWT authentication
- Tokens expire and need refreshing
- Use HTTPS in production
- Follow the principle of least privilege for user permissions
