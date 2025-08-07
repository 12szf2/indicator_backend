/**
 * Rate limiting middleware for API protection
 */

const rateLimitStore = new Map();
const WINDOW_SIZE = 15 * 60 * 1000; // 15 minutes
const MAX_REQUESTS = 1000; // Max requests per window per IP

/**
 * Simple in-memory rate limiter
 * @param {Object} options - Configuration options
 * @returns {Function} - Express middleware
 */
export function rateLimit(options = {}) {
  const {
    windowMs = WINDOW_SIZE,
    max = MAX_REQUESTS,
    message = "Too many requests, please try again later.",
    skipSuccessfulRequests = false,
    skipFailedRequests = false,
  } = options;

  return (req, res, next) => {
    // Skip rate limiting for certain routes if needed
    if (
      req.path === "/health" ||
      req.path === "/api/v1/auth/login" ||
      req.path.startsWith("/api-docs") ||
      req.path.startsWith("/system")
    ) {
      return next();
    }

    const key = req.ip || req.connection.remoteAddress;
    const now = Date.now();

    // Clean old entries
    for (const [clientKey, data] of rateLimitStore.entries()) {
      if (now - data.resetTime > windowMs) {
        rateLimitStore.delete(clientKey);
      }
    }

    // Get or create client data
    let clientData = rateLimitStore.get(key);
    if (!clientData || now - clientData.resetTime > windowMs) {
      clientData = {
        count: 0,
        resetTime: now,
      };
      rateLimitStore.set(key, clientData);
    }

    // Check if limit exceeded
    if (clientData.count >= max) {
      const resetTime = Math.ceil((clientData.resetTime + windowMs) / 1000);

      res.set({
        "X-RateLimit-Limit": max.toString(),
        "X-RateLimit-Remaining": "0",
        "X-RateLimit-Reset": resetTime.toString(),
        "Retry-After": Math.ceil(
          (clientData.resetTime + windowMs - now) / 1000
        ).toString(),
      });

      return res.status(429).json({ error: message });
    }

    // Increment counter
    clientData.count++;

    // Set headers
    const resetTime = Math.ceil((clientData.resetTime + windowMs) / 1000);
    res.set({
      "X-RateLimit-Limit": max.toString(),
      "X-RateLimit-Remaining": (max - clientData.count).toString(),
      "X-RateLimit-Reset": resetTime.toString(),
    });

    next();
  };
}

/**
 * API-specific rate limiter with stricter limits
 */
export const apiRateLimit = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 500, // Limit each IP to 500 requests per windowMs
  message: {
    error: "Too many API requests from this IP, please try again later.",
    retryAfter: "15 minutes",
  },
});

/**
 * Auth rate limiter with very strict limits
 */
export const authRateLimit = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10, // Limit each IP to 10 auth attempts per windowMs
  message: {
    error: "Too many authentication attempts, please try again later.",
    retryAfter: "15 minutes",
  },
});
