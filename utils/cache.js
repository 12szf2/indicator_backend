/**
 * Enhanced in-memory cache utility with LRU eviction and memory monitoring
 * Provides general-purpose caching with TTL support for the backend
 */

// Main cache store with metadata
const cache = new Map();
const cacheStats = {
  hits: 0,
  misses: 0,
  sets: 0,
  deletes: 0,
  evictions: 0,
};

// Configuration
const DEFAULT_TTL = 5 * 60 * 1000; // 5 minutes
const MAX_CACHE_SIZE = 10000; // Maximum number of items
const CLEANUP_INTERVAL = 60 * 1000; // Cleanup every minute
const MEMORY_THRESHOLD = 100 * 1024 * 1024; // 100MB threshold

// LRU tracking
const accessOrder = new Map(); // key -> timestamp
let lastAccessTime = 0;

/**
 * Get a value from the cache
 * @param {string} key - The cache key
 * @returns {any|null} - The cached value or null if not found/expired
 */
export function get(key) {
  const item = cache.get(key);

  // Return null if not in cache or key doesn't exist
  if (!item) {
    cacheStats.misses++;
    return null;
  }

  // Check if item has expired
  if (item.expiry && item.expiry < Date.now()) {
    cache.delete(key);
    accessOrder.delete(key);
    cacheStats.misses++;
    cacheStats.evictions++;
    return null;
  }

  // Update access order for LRU
  accessOrder.set(key, ++lastAccessTime);
  cacheStats.hits++;

  return item.value;
}

/**
 * Set a value in the cache with LRU eviction
 * @param {string} key - The cache key
 * @param {any} value - The value to cache
 * @param {number|null} ttl - Time to live in milliseconds (default: 5 minutes)
 */
export function set(key, value, ttl = DEFAULT_TTL) {
  // Check cache size and evict LRU items if necessary
  if (cache.size >= MAX_CACHE_SIZE) {
    evictLRU();
  }

  const expiry = ttl ? Date.now() + ttl : null;
  const size = estimateSize(value);

  cache.set(key, {
    value,
    expiry,
    size,
    createdAt: Date.now(),
  });

  accessOrder.set(key, ++lastAccessTime);
  cacheStats.sets++;
}

/**
 * Evict least recently used items
 */
function evictLRU() {
  const sortedByAccess = [...accessOrder.entries()].sort((a, b) => a[1] - b[1]);
  const toEvict = sortedByAccess.slice(0, Math.ceil(MAX_CACHE_SIZE * 0.1)); // Evict 10%

  for (const [key] of toEvict) {
    cache.delete(key);
    accessOrder.delete(key);
    cacheStats.evictions++;
  }
}

/**
 * Estimate memory size of a value
 * @param {any} value - Value to estimate
 * @returns {number} - Estimated size in bytes
 */
function estimateSize(value) {
  try {
    return new Blob([JSON.stringify(value)]).size;
  } catch {
    return 1024; // Default 1KB estimate
  }
}

/**
 * Check if a key exists in the cache and is not expired
 * @param {string} key - The cache key
 * @returns {boolean} - True if the key exists and is not expired
 */
export function has(key) {
  const item = cache.get(key);
  if (!item) return false;

  if (item.expiry && item.expiry < Date.now()) {
    cache.delete(key);
    accessOrder.delete(key);
    cacheStats.evictions++;
    return false;
  }

  return true;
}

/**
 * Delete a specific key from the cache
 * @param {string} key - The cache key
 */
export function del(key) {
  const deleted = cache.delete(key);
  accessOrder.delete(key);
  if (deleted) cacheStats.deletes++;
  return deleted;
}

/**
 * Delete all keys that match a pattern
 * @param {string} pattern - The pattern to match keys against
 */
export function delByPattern(pattern) {
  const regex = new RegExp(pattern);
  let deletedCount = 0;

  for (const key of cache.keys()) {
    if (regex.test(key)) {
      cache.delete(key);
      accessOrder.delete(key);
      deletedCount++;
    }
  }

  cacheStats.deletes += deletedCount;
  return deletedCount;
}

/**
 * Clear the entire cache
 */
export function clear() {
  cache.clear();
  accessOrder.clear();
  lastAccessTime = 0;

  // Reset stats
  cacheStats.hits = 0;
  cacheStats.misses = 0;
  cacheStats.sets = 0;
  cacheStats.deletes = 0;
  cacheStats.evictions = 0;
}

/**
 * Get detailed stats about the cache
 * @returns {Object} - Stats about the cache
 */
export function stats() {
  let totalSize = 0;
  let expired = 0;
  let validEntries = 0;
  const now = Date.now();

  for (const [_, item] of cache.entries()) {
    totalSize += item.size || 0;
    if (item.expiry && item.expiry < now) {
      expired++;
    } else {
      validEntries++;
    }
  }

  const hitRate =
    cacheStats.hits + cacheStats.misses > 0
      ? (
          (cacheStats.hits / (cacheStats.hits + cacheStats.misses)) *
          100
        ).toFixed(2)
      : 0;

  return {
    ...cacheStats,
    hitRate: `${hitRate}%`,
    totalEntries: cache.size,
    validEntries,
    expiredEntries: expired,
    estimatedMemoryUsage: `${(totalSize / 1024 / 1024).toFixed(2)} MB`,
    maxCacheSize: MAX_CACHE_SIZE,
  };
}

/**
 * Wrap an async function with intelligent caching
 * @param {Function} fn - The function to wrap
 * @param {string} keyPrefix - Prefix for the cache key
 * @param {number} ttl - Time to live in milliseconds
 * @returns {Function} - The wrapped function
 */
export function cached(fn, keyPrefix, ttl = DEFAULT_TTL) {
  return async (...args) => {
    const key = `${keyPrefix}:${JSON.stringify(args)}`;
    const cachedResult = get(key);

    if (cachedResult !== null) {
      return cachedResult;
    }

    const result = await fn(...args);
    set(key, result, ttl);
    return result;
  };
}

/**
 * Batch get multiple keys
 * @param {string[]} keys - Array of cache keys
 * @returns {Object} - Object with key-value pairs
 */
export function mget(keys) {
  const results = {};
  for (const key of keys) {
    const value = get(key);
    if (value !== null) {
      results[key] = value;
    }
  }
  return results;
}

/**
 * Batch set multiple key-value pairs
 * @param {Object} pairs - Object with key-value pairs
 * @param {number} ttl - Time to live in milliseconds
 */
export function mset(pairs, ttl = DEFAULT_TTL) {
  for (const [key, value] of Object.entries(pairs)) {
    set(key, value, ttl);
  }
}

/**
 * Cleanup expired entries periodically
 */
function cleanupExpired() {
  const now = Date.now();
  const expiredKeys = [];

  for (const [key, item] of cache.entries()) {
    if (item.expiry && item.expiry < now) {
      expiredKeys.push(key);
    }
  }

  for (const key of expiredKeys) {
    cache.delete(key);
    accessOrder.delete(key);
    cacheStats.evictions++;
  }

  if (expiredKeys.length > 0) {
    console.log(`Cache cleanup: removed ${expiredKeys.length} expired entries`);
  }
}

// Start periodic cleanup
setInterval(cleanupExpired, CLEANUP_INTERVAL);

// Monitor memory usage
function checkMemoryUsage() {
  if (process.memoryUsage().heapUsed > MEMORY_THRESHOLD) {
    console.warn("High memory usage detected, clearing cache");
    evictLRU();
  }
}

setInterval(checkMemoryUsage, CLEANUP_INTERVAL * 2);

// Export cache instance for direct access if needed
export { cache as _cacheInstance };

/**
 * Convenience function to invalidate cache entries by pattern
 * @param {string} pattern - The pattern to match (e.g., 'users:*')
 * @returns {boolean} - Always returns true for ease of use
 */
export function invalidate(pattern) {
  delByPattern(pattern);
  return true;
}
