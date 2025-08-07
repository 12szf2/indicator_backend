/**
 * Enhanced service utilities with optimized caching
 */

import * as cache from "../utils/cache.js";
import { queryOptimizations } from "../utils/queryOptimizations.js";

// Enhanced cache TTL configurations
export const CACHE_TTL = {
  VERY_SHORT: 1 * 60 * 1000, // 1 minute - for frequently changing data
  SHORT: 5 * 60 * 1000, // 5 minutes - for lists
  MEDIUM: 10 * 60 * 1000, // 10 minutes - for details
  LONG: 30 * 60 * 1000, // 30 minutes - for relatively static data
  VERY_LONG: 60 * 60 * 1000, // 1 hour - for very static data
};

/**
 * Enhanced caching wrapper for service functions
 * Automatically handles cache invalidation patterns
 */
export class ServiceCache {
  constructor(serviceName) {
    this.serviceName = serviceName;
  }

  /**
   * Generate consistent cache keys
   */
  key(operation, ...params) {
    const cleanParams = params.filter((p) => p !== null && p !== undefined);
    return `${this.serviceName}:${operation}:${cleanParams.join(":")}`;
  }

  /**
   * Get data with caching
   */
  async get(operation, queryFn, ttl = CACHE_TTL.SHORT, ...params) {
    const cacheKey = this.key(operation, ...params);

    // Try to get from cache first
    let data = cache.get(cacheKey);
    if (data !== null) {
      return data;
    }

    // Execute query and cache result
    data = await queryFn();
    cache.set(cacheKey, data, ttl);

    return data;
  }

  /**
   * Invalidate cache patterns for this service
   */
  invalidate(...patterns) {
    patterns.forEach((pattern) => {
      const fullPattern = `${this.serviceName}:${pattern}`;
      cache.delByPattern(fullPattern);
    });
  }

  /**
   * Invalidate all cache for this service
   */
  invalidateAll() {
    cache.delByPattern(`${this.serviceName}:.*`);
  }

  /**
   * Smart cache invalidation based on operations
   */
  invalidateRelated(operation, ...params) {
    switch (operation) {
      case "create":
      case "update":
      case "delete":
        // Invalidate lists and specific items
        this.invalidate("all", "list:.*");
        if (params[0]) {
          // If ID provided
          this.invalidate(`id:${params[0]}`, `alapadatok_id:${params[0]}`);
        }
        break;
      case "createMany":
      case "deleteMany":
        // Invalidate all for bulk operations
        this.invalidateAll();
        break;
    }
  }
}

/**
 * Enhanced query wrapper with automatic caching
 */
export function createCachedQuery(serviceName) {
  const serviceCache = new ServiceCache(serviceName);

  return {
    cache: serviceCache,

    /**
     * Cached findMany operation
     */
    async findMany(
      operation,
      queryOptions,
      ttl = CACHE_TTL.SHORT,
      ...cacheParams
    ) {
      return serviceCache.get(
        operation,
        () =>
          queryOptimizations.getByYearRange(
            serviceName,
            queryOptions.tanev,
            queryOptions.include
          ),
        ttl,
        ...cacheParams
      );
    },

    /**
     * Cached findUnique operation
     */
    async findUnique(
      operation,
      queryOptions,
      ttl = CACHE_TTL.MEDIUM,
      ...cacheParams
    ) {
      return serviceCache.get(
        operation,
        () => prisma[serviceName].findUnique(queryOptions),
        ttl,
        ...cacheParams
      );
    },

    /**
     * Cached findMany with alapadatok filter
     */
    async findManyByAlapadatok(
      operation,
      alapadatokId,
      tanev,
      include = {},
      ttl = CACHE_TTL.SHORT
    ) {
      return serviceCache.get(
        operation,
        () =>
          queryOptimizations.getByAlapadatokOptimized(
            serviceName,
            alapadatokId,
            tanev,
            include
          ),
        ttl,
        alapadatokId,
        tanev
      );
    },

    /**
     * Create with cache invalidation
     */
    async create(data, invalidationPattern = "all") {
      const result = await prisma[serviceName].create({ data });
      serviceCache.invalidateRelated("create", result.id);
      return result;
    },

    /**
     * Update with cache invalidation
     */
    async update(where, data, invalidationPattern = "all") {
      const result = await prisma[serviceName].update({ where, data });
      serviceCache.invalidateRelated("update", where.id);
      return result;
    },

    /**
     * Delete with cache invalidation
     */
    async delete(where) {
      const result = await prisma[serviceName].delete({ where });
      serviceCache.invalidateRelated("delete", where.id);
      return result;
    },

    /**
     * Batch operations with cache invalidation
     */
    async createMany(data) {
      const result = await queryOptimizations.batchCreate(serviceName, data);
      serviceCache.invalidateAll();
      return result;
    },

    async deleteMany(where) {
      const result = await prisma[serviceName].deleteMany({ where });
      serviceCache.invalidateAll();
      return result;
    },
  };
}

/**
 * Utility for cache warming
 */
export class CacheWarmer {
  constructor(services) {
    this.services = services;
  }

  /**
   * Warm up cache for commonly accessed data
   */
  async warmUp() {
    console.log("Starting cache warm-up...");

    try {
      // Warm up basic data that's frequently accessed
      const promises = [];

      // Add common queries that should be pre-cached
      if (this.services.includes("alapadatok")) {
        promises.push(this.warmAlapadatok());
      }

      if (this.services.includes("kompetencia")) {
        promises.push(this.warmKompetencia());
      }

      await Promise.all(promises);
      console.log("Cache warm-up completed successfully");
    } catch (error) {
      console.error("Cache warm-up failed:", error);
    }
  }

  async warmAlapadatok() {
    const { getAll } = await import("../services/alapadatok.service.js");
    await getAll();
  }

  async warmKompetencia() {
    const { getAll } = await import("../services/kompetencia.service.js");
    await getAll();
  }
}

/**
 * Performance monitoring for service operations
 */
export function withPerformanceMonitoring(serviceName, operation) {
  return async function (...args) {
    const startTime = Date.now();

    try {
      const result = await operation.apply(this, args);
      const duration = Date.now() - startTime;

      if (duration > 1000) {
        // Log slow operations
        console.warn(
          `Slow operation detected: ${serviceName} took ${duration}ms`
        );
      }

      return result;
    } catch (error) {
      console.error(`Error in ${serviceName}:`, error);
      throw error;
    }
  };
}
