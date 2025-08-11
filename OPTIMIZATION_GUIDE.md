# Service Optimization Utilities

This document explains how to use the `ServiceCache` and `ServicePattern` utilities to simplify and optimize your services.

## Overview

These utilities provide:

- **ServiceCache**: Consistent caching patterns with automatic invalidation
- **ServicePattern**: Common CRUD operations with built-in caching
- **CACHE_TTL**: Predefined cache time-to-live constants

## ServiceCache

### Basic Usage

```javascript
import { ServiceCache, CACHE_TTL } from '../utils/ServiceCache.js';

const cache = new ServiceCache('myService');

// Get data with caching
const data = await cache.get(
  'operation_name',
  async () => {
    // Your expensive operation here
    return await database.query();
  },
  CACHE_TTL.SHORT,
  'param1', 'param2' // Additional cache key parameters
);

// Invalidate cache
cache.invalidate('operation_name:*');
cache.invalidateAll(); // Clear all service cache
```

### Cache TTL Constants

```javascript
CACHE_TTL.VERY_SHORT  // 1 minute  - for frequently changing data
CACHE_TTL.SHORT       // 5 minutes - for lists
CACHE_TTL.MEDIUM      // 10 minutes - for details
CACHE_TTL.LONG        // 30 minutes - for relatively static data
CACHE_TTL.VERY_LONG   // 1 hour - for very static data
```

## ServicePattern

### Basic Setup

```javascript
import { ServicePattern } from '../utils/ServicePattern.js';

const pattern = new ServicePattern(
  'tableName',    // Prisma model name
  'id',          // Primary key field
  {              // Include relations
    relation1: true,
    relation2: { include: { nested: true } }
  },
  {}             // Select specific fields (empty = all fields)
);
```

### Available Methods

#### Read Operations (Automatically Cached)

```javascript
// Find all records
const all = await pattern.findAll();

// Find by ID
const record = await pattern.findById(123);

// Find by alapadatok ID
const records = await pattern.findAllByAlapadatok(456);

// Find by year range (current year - 4 to current year)
const yearData = await pattern.findAllByYear(2024);

// Find by alapadatok and year
const filtered = await pattern.findByAlapadatokIdAndYear(456, 2024);

// Convenience methods
const currentYear = await pattern.findAllCurrentYear();
const currentForAlapadatok = await pattern.findByAlapadatokCurrentYear(456);

// Count records
const count = await pattern.count({ where: 'condition' });

// Check existence
const exists = await pattern.exists(123);
```

#### Write Operations (Automatic Cache Invalidation)

```javascript
// Create record
const created = await pattern.create({
  field1: 'value1',
  field2: 'value2'
});

// Create multiple records
const created = await pattern.createMany([
  { field1: 'value1' },
  { field1: 'value2' }
]);

// Update record
const updated = await pattern.update(123, {
  field1: 'newValue'
});

// Delete record
const deleted = await pattern.delete(123);

// Bulk delete
const result = await pattern.deleteMany({ condition: 'value' });

// Delete by alapadatok
const result = await pattern.deleteByAlapadatokId(456);

// Delete by alapadatok and year
const result = await pattern.deleteByAlapadatokIdAndYear(456, 2024);
```

## Migration Example

### Before (Original Service)

```javascript
// Manual caching - repetitive and error-prone
export async function getAll(tanev) {
  const cacheKey = `felvettek_szama:all:${tanev}`;
  const cachedData = cache.get(cacheKey);
  
  if (cachedData) {
    return cachedData;
  }
  
  const data = await prisma.felvettek_Szama.findMany({
    where: { /* complex where */ },
    include: { szakma: true, szakirany: true }
  });
  
  cache.set(cacheKey, data, CACHE_TTL.LIST);
  return data;
}

export async function create(data) {
  // Manual cache invalidation
  cache.del("felvettek_szama:all");
  cache.del(`felvettek_szama:alapadatok_id:${data.alapadatok_id}`);
  
  return await prisma.felvettek_Szama.create({ data });
}
```

### After (With ServicePattern)

```javascript
import { ServicePattern, CACHE_TTL } from '../utils/ServicePattern.js';

const pattern = new ServicePattern('felvettek_Szama', 'id', {
  szakma: true,
  szakirany: true
});

export async function getAll(tanev) {
  return await pattern.serviceCache.get(
    'all_with_year',
    async () => {
      const { firstYear, lastYear } = pattern.getYearRange(tanev);
      return await prisma.felvettek_Szama.findMany({
        where: { tanev_kezdete: { gte: firstYear, lte: lastYear } },
        include: pattern.include
      });
    },
    CACHE_TTL.SHORT,
    tanev
  );
}

export async function create(data) {
  // Automatic cache invalidation
  return await pattern.create(data);
}
```

## Benefits

1. **Reduced Code**: 30-50% less boilerplate code
2. **Consistency**: Uniform caching patterns across services
3. **Maintainability**: Centralized cache logic
4. **Error Prevention**: Automatic cache invalidation
5. **Performance**: Optimized cache key generation
6. **Flexibility**: Easy to extend and customize

## Best Practices

1. Use appropriate TTL values based on data volatility
2. Include relevant parameters in cache keys
3. Use bulk operations for better performance
4. Handle errors gracefully
5. Monitor cache hit rates in production

## Advanced Usage

### Custom Cache Operations

```javascript
// Manual cache control when needed
pattern.serviceCache.invalidateByYear(2024);
pattern.serviceCache.invalidateByAlapadatokId(456);

// Get cache statistics
const stats = pattern.serviceCache.getStats();
```

### Helper Methods

```javascript
// Get current academic year
const currentYear = pattern.getCurrentAcademicYear();

// Get year range for queries
const { firstYear, lastYear } = pattern.getYearRange(2024);
```