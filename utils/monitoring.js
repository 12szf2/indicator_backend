/**
 * Performance monitoring and health check utilities
 */

import prisma from "./prisma.js";
import { stats as cacheStats } from "./cache.js";

// Performance metrics storage
const metrics = {
  requests: {
    total: 0,
    by_endpoint: new Map(),
    by_status: new Map(),
    response_times: [],
  },
  database: {
    queries: 0,
    slow_queries: 0,
    errors: 0,
    connection_pool: {},
  },
  cache: {
    hits: 0,
    misses: 0,
    hit_rate: 0,
  },
  memory: {
    heap_used: 0,
    heap_total: 0,
    external: 0,
    rss: 0,
  },
  uptime: process.uptime(),
  last_updated: new Date(),
};

/**
 * Update performance metrics
 */
export function updateMetrics(req, res, responseTime) {
  metrics.requests.total++;

  // Track by endpoint
  const endpoint = `${req.method} ${req.route?.path || req.path}`;
  const endpointCount = metrics.requests.by_endpoint.get(endpoint) || 0;
  metrics.requests.by_endpoint.set(endpoint, endpointCount + 1);

  // Track by status code
  const statusCount = metrics.requests.by_status.get(res.statusCode) || 0;
  metrics.requests.by_status.set(res.statusCode, statusCount + 1);

  // Track response times (keep last 1000)
  metrics.requests.response_times.push(responseTime);
  if (metrics.requests.response_times.length > 1000) {
    metrics.requests.response_times.shift();
  }

  // Update memory usage
  const memUsage = process.memoryUsage();
  metrics.memory = {
    heap_used: Math.round(memUsage.heapUsed / 1024 / 1024), // MB
    heap_total: Math.round(memUsage.heapTotal / 1024 / 1024), // MB
    external: Math.round(memUsage.external / 1024 / 1024), // MB
    rss: Math.round(memUsage.rss / 1024 / 1024), // MB
  };

  metrics.uptime = process.uptime();
  metrics.last_updated = new Date();
}

/**
 * Get current performance metrics
 */
export function getMetrics() {
  // Calculate average response time
  const responseTimes = metrics.requests.response_times;
  const avgResponseTime =
    responseTimes.length > 0
      ? responseTimes.reduce((a, b) => a + b, 0) / responseTimes.length
      : 0;

  // Get cache stats
  const currentCacheStats = cacheStats();

  // Convert Maps to objects for JSON serialization
  const endpointStats = Object.fromEntries(metrics.requests.by_endpoint);
  const statusStats = Object.fromEntries(metrics.requests.by_status);

  return {
    ...metrics,
    requests: {
      ...metrics.requests,
      by_endpoint: endpointStats,
      by_status: statusStats,
      avg_response_time: Math.round(avgResponseTime * 100) / 100, // Round to 2 decimals
      response_times: undefined, // Don't expose raw array
    },
    cache: currentCacheStats,
    database: {
      ...metrics.database,
      status: "connected", // Could be enhanced with actual connection status
    },
  };
}

/**
 * Health check endpoint data
 */
export async function getHealthCheck() {
  const startTime = Date.now();

  try {
    // Test database connection
    await prisma.$queryRaw`SELECT 1`;
    const dbResponseTime = Date.now() - startTime;

    const health = {
      status: "healthy",
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      version: process.env.npm_package_version || "1.0.0",
      environment: process.env.NODE_ENV || "development",
      services: {
        database: {
          status: "healthy",
          response_time: `${dbResponseTime}ms`,
        },
        cache: {
          status: "healthy",
          ...cacheStats(),
        },
        memory: {
          status:
            process.memoryUsage().heapUsed < 500 * 1024 * 1024
              ? "healthy"
              : "warning", // 500MB threshold
          usage: metrics.memory,
        },
      },
    };

    return health;
  } catch (error) {
    return {
      status: "unhealthy",
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      error: error.message,
      services: {
        database: {
          status: "unhealthy",
          error: error.message,
        },
      },
    };
  }
}

/**
 * Performance monitoring middleware
 */
export function performanceMonitoringMiddleware() {
  return (req, res, next) => {
    const startTime = Date.now();

    // Override res.end to capture metrics
    const originalEnd = res.end;
    res.end = function (...args) {
      const responseTime = Date.now() - startTime;
      updateMetrics(req, res, responseTime);
      originalEnd.apply(this, args);
    };

    next();
  };
}

/**
 * Reset metrics (useful for testing or periodic resets)
 */
export function resetMetrics() {
  metrics.requests = {
    total: 0,
    by_endpoint: new Map(),
    by_status: new Map(),
    response_times: [],
  };
  metrics.database = {
    queries: 0,
    slow_queries: 0,
    errors: 0,
    connection_pool: {},
  };
  metrics.last_updated = new Date();
}

// Auto-reset metrics daily to prevent memory growth
setInterval(resetMetrics, 24 * 60 * 60 * 1000); // 24 hours
