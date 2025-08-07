/**
 * Database query optimization utilities
 */
import prisma from "./prisma.js";

// Common query patterns with optimizations
export const queryOptimizations = {
  // Batch operations to reduce database round trips
  batchCreate: async (model, data, batchSize = 1000) => {
    const results = [];
    for (let i = 0; i < data.length; i += batchSize) {
      const batch = data.slice(i, i + batchSize);
      const result = await prisma[model].createMany({
        data: batch,
        skipDuplicates: true,
      });
      results.push(result);
    }
    return results;
  },

  // Optimized year range queries
  getByYearRange: async (model, tanev, include = {}) => {
    const firstYear = parseInt(tanev) - 4;
    const lastYear = parseInt(tanev);

    return await prisma[model].findMany({
      where: {
        tanev_kezdete: {
          gte: firstYear,
          lte: lastYear,
        },
      },
      orderBy: {
        tanev_kezdete: "asc",
      },
      include,
    });
  },

  // Optimized alapadatok queries with select
  getByAlapadatokOptimized: async (
    model,
    alapadatokId,
    tanev,
    selectFields = {}
  ) => {
    const firstYear = parseInt(tanev) - 4;
    const lastYear = parseInt(tanev);

    return await prisma[model].findMany({
      where: {
        alapadatok_id: alapadatokId,
        tanev_kezdete: {
          gte: firstYear,
          lte: lastYear,
        },
      },
      select: Object.keys(selectFields).length > 0 ? selectFields : undefined,
      orderBy: {
        tanev_kezdete: "asc",
      },
    });
  },

  // Use transactions for multiple related operations
  transactionalUpdate: async (operations) => {
    return await prisma.$transaction(operations, {
      timeout: 10000,
      isolationLevel: "ReadCommitted",
    });
  },
};

// Database performance monitoring
export const dbMetrics = {
  logSlowQueries: (threshold = 1000) => {
    return prisma.$extends({
      query: {
        $allModels: {
          async $allOperations({ model, operation, args, query }) {
            const start = Date.now();
            const result = await query(args);
            const duration = Date.now() - start;

            if (duration > threshold) {
              console.warn(
                `Slow query detected: ${model}.${operation} took ${duration}ms`
              );
            }

            return result;
          },
        },
      },
    });
  },
};
