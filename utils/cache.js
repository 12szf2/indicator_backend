/**
 * Simple in-memory cache utility
 * Provides general-purpose caching with TTL support for the backend
 */

// Main cache store
const cache = new Map();

// Default TTL in milliseconds (5 minutes)
const DEFAULT_TTL = 5 * 60 * 1000;

/**
 * Get a value from the cache
 * @param {string} key - The cache key
 * @returns {any|null} - The cached value or null if not found/expired
 */
export function get(key) {
  const item = cache.get(key);

  // Return null if not in cache or key doesn't exist
  if (!item) return null;

  // Check if item has expired
  if (item.expiry && item.expiry < Date.now()) {
    cache.delete(key); // Clean up expired item
    return null;
  }

  return item.value;
}

/**
 * Set a value in the cache
 * @param {string} key - The cache key
 * @param {any} value - The value to cache
 * @param {number|null} ttl - Time to live in milliseconds (default: 5 minutes)
 */
export function set(key, value, ttl = DEFAULT_TTL) {
  const expiry = ttl ? Date.now() + ttl : null;

  cache.set(key, {
    value,
    expiry,
  });
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
    return false;
  }

  return true;
}

/**
 * Delete a specific key from the cache
 * @param {string} key - The cache key
 */
export function del(key) {
  cache.delete(key);
}

/**
 * Delete all keys that match a pattern
 * @param {string} pattern - The pattern to match keys against
 */
export function delByPattern(pattern) {
  const regex = new RegExp(pattern);
  for (const key of cache.keys()) {
    if (regex.test(key)) {
      cache.delete(key);
    }
  }
}

/**
 * Clear the entire cache
 */
export function clear() {
  cache.clear();
}

/**
 * Get stats about the cache
 * @returns {Object} - Stats about the cache
 */
export function stats() {
  let size = 0;
  let expired = 0;
  const now = Date.now();
  for (const [_, item] of cache.entries()) {
    if (item.expiry && item.expiry < now) {
      expired++;
    } else {
      size++;
    }
  }

  return {
    size,
    expired,
    total: cache.size,
  };
}

/**
 * Wrap an async function with caching
 * @param {Function} fn - The function to wrap
 * @param {string} keyPrefix - Prefix for the cache key
 * @param {number} ttl - Time to live in milliseconds
 * @returns {Function} - The wrapped function
 */
export function cached(fn, keyPrefix, ttl = DEFAULT_TTL) {
  return async (...args) => {
    const key = `${keyPrefix}:${JSON.stringify(args)}`;
    const cached = get(key);

    if (cached !== null) {
      return cached;
    }

    const result = await fn(...args);
    set(key, result, ttl);
    return result;
  };
}

/**
 * Convenience function to invalidate cache entries by pattern
 * @param {string} pattern - The pattern to match (e.g., 'users:*')
 * @returns {boolean} - Always returns true for ease of use
 */
export function invalidate(pattern) {
  delByPattern(pattern);
  return true;
}
