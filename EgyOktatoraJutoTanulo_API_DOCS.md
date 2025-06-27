# EgyOktatoraJutoTanulo Controller API Documentation

## Overview

The `EgyOktatoraJutoTanulo` controller manages student-to-teacher ratio data for educational institutions. This endpoint allows CRUD operations on student-to-teacher ratio records.

## Endpoints Summary

### Base URL

```
/api/v1/egy_oktatora_juto_tanulo
```

### Authentication

All endpoints require JWT Bearer authentication.

## Available Endpoints

### 1. GET /egy_oktatora_juto_tanulo

**Summary**: Get all student-to-teacher ratio records

**Description**: Retrieves a list of all student-to-teacher ratio data for all schools

**Response**: Array of `EgyOktatoraJutoTanulo` objects

### 2. GET /egy_oktatora_juto_tanulo/{alapadatok_id}

**Summary**: Get student-to-teacher ratio records by school ID

**Description**: Retrieves student-to-teacher ratio data for a specific school

**Parameters**:

- `alapadatok_id` (path, required): UUID of the school

**Response**: Array of `EgyOktatoraJutoTanulo` objects for the specified school

### 3. POST /egy_oktatora_juto_tanulo

**Summary**: Create a new student-to-teacher ratio record

**Description**: Creates a new student-to-teacher ratio data entry for a school

**Request Body** (required):

```json
{
  "tanev_kezdete": 2024,
  "letszam": 25,
  "alapadatok_id": "123e4567-e89b-12d3-a456-426614174000"
}
```

**Response**: Created `EgyOktatoraJutoTanulo` object (201 status)

### 4. PUT /egy_oktatora_juto_tanulo/{id}

**Summary**: Update an existing student-to-teacher ratio record

**Description**: Updates an existing student-to-teacher ratio data entry

**Parameters**:

- `id` (path, required): UUID of the record to update

**Request Body** (required):

```json
{
  "tanev_kezdete": 2024,
  "letszam": 30,
  "alapadatok_id": "123e4567-e89b-12d3-a456-426614174000"
}
```

**Response**: Updated `EgyOktatoraJutoTanulo` object (200 status)

## Data Model

### EgyOktatoraJutoTanulo Schema

```typescript
interface EgyOktatoraJutoTanulo {
  id: string; // UUID - Unique identifier
  alapadatok_id: string; // UUID - Reference to school data
  tanev_kezdete: number; // Integer - Academic year start (e.g., 2024)
  letszam: number; // Integer - Number of students per teacher
  createAt: string; // ISO date - Creation timestamp
  createBy: string | null; // Creator information
  updatedAt: string | null; // ISO date - Last update timestamp
  updatedBy: string | null; // Last updater information
  alapadatok?: Alapadatok; // Related school information
}
```

### Input Schema

```typescript
interface EgyOktatoraJutoTanuloInput {
  tanev_kezdete: number; // Required - Academic year (1900-2100)
  letszam: number; // Required - Students per teacher (≥0)
  alapadatok_id: string; // Required - School UUID
}
```

## Error Responses

All endpoints return consistent error responses:

### Common Status Codes

- `200`: Success (GET, PUT)
- `201`: Created (POST)
- `400`: Bad Request - Missing required fields or invalid data
- `401`: Unauthorized - Invalid or missing authentication token
- `404`: Not Found - Resource doesn't exist (GET by ID, PUT)
- `500`: Internal Server Error

### Error Response Format

```json
{
  "error": "Error message description"
}
```

## Examples

### Create a new record

```bash
curl -X POST /api/v1/egy_oktatora_juto_tanulo \
  -H "Authorization: Bearer <token>" \
  -H "Content-Type: application/json" \
  -d '{
    "tanev_kezdete": 2024,
    "letszam": 25,
    "alapadatok_id": "123e4567-e89b-12d3-a456-426614174000"
  }'
```

### Get records for a specific school

```bash
curl -X GET /api/v1/egy_oktatora_juto_tanulo/123e4567-e89b-12d3-a456-426614174000 \
  -H "Authorization: Bearer <token>"
```

### Update an existing record

```bash
curl -X PUT /api/v1/egy_oktatora_juto_tanulo/123e4567-e89b-12d3-a456-426614174000 \
  -H "Authorization: Bearer <token>" \
  -H "Content-Type: application/json" \
  -d '{
    "tanev_kezdete": 2024,
    "letszam": 30,
    "alapadatok_id": "123e4567-e89b-12d3-a456-426614174000"
  }'
```

## Business Logic Notes

- **Academic Year**: The `tanev_kezdete` field represents the starting year of an academic year (e.g., 2024 for the 2024/2025 academic year)
- **Student Count**: The `letszam` field represents the number of students assigned per teacher
- **Caching**: The service implements caching for improved performance (5-minute TTL for lists, 10-minute TTL for details)
- **Data Validation**: All required fields must be provided and meet the specified constraints
- **Audit Trail**: The system tracks creation and update information

## Integration

This controller integrates with:

- **Alapadatok**: References school basic information
- **Authentication**: Requires valid JWT tokens
- **Caching**: Uses Redis-based caching for performance
- **Logging**: All operations are logged for audit purposes

## Testing

Use the Swagger UI at `/api-docs` to:

1. View complete API documentation
2. Test endpoints with the "Try it out" feature
3. Validate request/response formats
4. Check authentication requirements

## Related Documentation

- [API Documentation Guide](./API_DOCUMENTATION_GUIDE.md)
- [Complete OpenAPI Specification](./openapi.yaml)
- [API Overview](./API_README.md)
