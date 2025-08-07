/**
 * Health check and metrics controller
 */

import { getHealthCheck, getMetrics } from "../utils/monitoring.js";
import { stats as cacheStats, clear as clearCache } from "../utils/cache.js";
import express from "express";

const router = express.Router();

/**
 * Health check endpoint
 * GET /health
 */
router.get("/health", async (req, res) => {
  try {
    const health = await getHealthCheck();
    const statusCode = health.status === "healthy" ? 200 : 503;
    res.status(statusCode).json(health);
  } catch (error) {
    res.status(503).json({
      status: "unhealthy",
      timestamp: new Date().toISOString(),
      error: error.message,
    });
  }
});

/**
 * Performance metrics endpoint
 * GET /metrics
 */
router.get("/metrics", (req, res) => {
  try {
    const metrics = getMetrics();
    res.json(metrics);
  } catch (error) {
    res.status(500).json({
      error: "Failed to retrieve metrics",
      message: error.message,
    });
  }
});

/**
 * Cache statistics endpoint
 * GET /cache/stats
 */
router.get("/cache/stats", (req, res) => {
  try {
    const stats = cacheStats();
    res.json(stats);
  } catch (error) {
    res.status(500).json({
      error: "Failed to retrieve cache stats",
      message: error.message,
    });
  }
});

/**
 * Clear cache endpoint (admin only)
 * POST /cache/clear
 */
router.post("/cache/clear", (req, res) => {
  try {
    clearCache();
    res.json({
      success: true,
      message: "Cache cleared successfully",
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    res.status(500).json({
      error: "Failed to clear cache",
      message: error.message,
    });
  }
});

/**
 * Server info endpoint
 * GET /info
 */
router.get("/info", (req, res) => {
  res.json({
    name: "Indicator Backend API",
    version: process.env.npm_package_version || "1.0.0",
    environment: process.env.NODE_ENV || "development",
    node_version: process.version,
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
    features: {
      caching: true,
      compression: true,
      rate_limiting: true,
      monitoring: true,
      session_store: "prisma",
    },
  });
});

export default router;
