/**
 * HTTP Cache middleware
 * Adds cache-control headers to responses
 */

/**
 * Add cache-control headers to the response
 * @param {Object} options - Cache options
 * @param {number} options.maxAge - Max age in seconds
 * @param {boolean} options.private - Whether the cache is private
 * @param {boolean} options.noCache - Whether to use no-cache
 */
export default function cacheMiddleware(options = {}) {
  const {
    maxAge = 60, // Default 60 seconds
    private: isPrivate = true,
    noCache = false,
    staleWhileRevalidate = 60, // 60 seconds
  } = options;

  return (req, res, next) => {
    // Skip caching for POST/PUT/DELETE requests
    if (req.method !== "GET" && req.method !== "HEAD") {
      res.setHeader("Cache-Control", "no-store");
      return next();
    }

    // Generate the Cache-Control header
    if (noCache) {
      res.setHeader("Cache-Control", "no-cache");
    } else {
      const directives = [];

      if (isPrivate) {
        directives.push("private");
      } else {
        directives.push("public");
      }

      if (maxAge > 0) {
        directives.push(`max-age=${maxAge}`);
      }

      if (staleWhileRevalidate > 0) {
        directives.push(`stale-while-revalidate=${staleWhileRevalidate}`);
      }

      res.setHeader("Cache-Control", directives.join(", "));
    }

    // Set Vary header to make sure cache varies by the right headers
    res.setHeader("Vary", "Accept, Authorization");

    // Continue to the next middleware
    next();
  };
}
