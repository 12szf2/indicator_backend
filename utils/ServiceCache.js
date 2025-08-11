export const CACHE_TTL = {
  VERY_SHORT: 1 * 60 * 1000, // 1 minute - for frequently changing data
  SHORT: 5 * 60 * 1000, // 5 minutes - for lists
  MEDIUM: 10 * 60 * 1000, // 10 minutes - for details
  LONG: 30 * 60 * 1000, // 30 minutes - for relatively static data
  VERY_LONG: 60 * 60 * 1000, // 1 hour - for very static data
};

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
