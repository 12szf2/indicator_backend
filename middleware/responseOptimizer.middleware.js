/**
 * Response optimization middleware
 */

/**
 * JSON response optimization middleware
 * Provides consistent API responses and automatic pagination
 */
export function responseOptimizer() {
  return (req, res, next) => {
    // Store original json method
    const originalJson = res.json;

    // Override json method with optimizations
    res.json = function (data) {
      // Add response time header
      const responseTime = Date.now() - req.startTime;
      res.set("X-Response-Time", `${responseTime}ms`);

      // Handle different response types
      if (Array.isArray(data)) {
        // Auto-pagination for large arrays
        const page = parseInt(req.query.page) || 1;
        const limit = Math.min(parseInt(req.query.limit) || 100, 1000); // Max 1000 items
        const offset = (page - 1) * limit;

        if (data.length > limit && !req.query.noPagination) {
          const paginatedData = data.slice(offset, offset + limit);
          const totalPages = Math.ceil(data.length / limit);

          res.set({
            "X-Total-Count": data.length,
            "X-Total-Pages": totalPages,
            "X-Current-Page": page,
            "X-Per-Page": limit,
          });

          return originalJson.call(this, {
            data: paginatedData,
            pagination: {
              total: data.length,
              totalPages,
              currentPage: page,
              perPage: limit,
              hasNext: page < totalPages,
              hasPrev: page > 1,
            },
          });
        } else {
          res.set("X-Total-Count", data.length);
        }
      }

      // Standard response wrapper
      const response = {
        success: true,
        data,
        timestamp: new Date().toISOString(),
        ...(process.env.NODE_ENV === "development" && {
          responseTime: `${responseTime}ms`,
          endpoint: `${req.method} ${req.originalUrl}`,
        }),
      };

      return originalJson.call(this, response);
    };

    // Store request start time for response time calculation
    req.startTime = Date.now();

    next();
  };
}

/**
 * Error response formatter
 */
export function errorHandler() {
  return (err, req, res, next) => {
    const responseTime = Date.now() - req.startTime;
    res.set("X-Response-Time", `${responseTime}ms`);

    // Log error for debugging
    console.error("API Error:", {
      error: err.message,
      stack: process.env.NODE_ENV === "development" ? err.stack : undefined,
      endpoint: `${req.method} ${req.originalUrl}`,
      timestamp: new Date().toISOString(),
    });

    // Determine error status code
    const statusCode = err.statusCode || err.status || 500;

    // Create error response
    const errorResponse = {
      success: false,
      error: {
        message: err.message || "Internal Server Error",
        code: err.code || "INTERNAL_ERROR",
        ...(process.env.NODE_ENV === "development" && {
          stack: err.stack,
          details: err.details,
        }),
      },
      timestamp: new Date().toISOString(),
    };

    res.status(statusCode).json(errorResponse);
  };
}

/**
 * 404 handler for unknown routes
 */
export function notFoundHandler() {
  return (req, res) => {
    res.status(404).json({
      success: false,
      error: {
        message: `Route ${req.method} ${req.originalUrl} not found`,
        code: "ROUTE_NOT_FOUND",
      },
      timestamp: new Date().toISOString(),
    });
  };
}

/**
 * Request logging middleware with performance metrics
 */
export function requestLogger() {
  return (req, res, next) => {
    const startTime = Date.now();
    req.startTime = startTime;

    // Log request start (only in development)
    if (process.env.NODE_ENV === "development") {
      console.log(
        `→ ${req.method} ${req.originalUrl} [${new Date().toISOString()}]`
      );
    }

    // Override res.end to log completion
    const originalEnd = res.end;
    res.end = function (...args) {
      const duration = Date.now() - startTime;

      // Log completion with timing
      if (process.env.NODE_ENV === "development") {
        const status = res.statusCode;
        const statusColor = status >= 400 ? "31" : status >= 300 ? "33" : "32";
        console.log(
          `← ${req.method} ${req.originalUrl} \x1b[${statusColor}m${status}\x1b[0m ${duration}ms`
        );
      }

      originalEnd.apply(this, args);
    };

    next();
  };
}
