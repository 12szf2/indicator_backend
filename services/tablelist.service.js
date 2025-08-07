import { PrismaClient } from "../generated/prisma/client.js";
import {
  ServiceCache,
  CACHE_TTL,
  withPerformanceMonitoring,
} from "../utils/serviceUtils.js";
import { queryOptimizations } from "../utils/queryOptimizations.js";

const prisma = new PrismaClient();

// Initialize service cache
const serviceCache = new ServiceCache("tablelist");

export const getAll = withPerformanceMonitoring(
  "tablelist.getAll",
  async function () {
    return serviceCache.get(
      "all",
      async () => {
        return await prisma.tableList.findMany();
      },
      CACHE_TTL.MEDIUM
    );
  }
);

export const create = withPerformanceMonitoring(
  "tablelist.create",
  async function (name, isAvailable) {
    // Smart cache invalidation
    serviceCache.invalidateRelated("create");

    const newTable = await prisma.tableList.create({
      data: {
        name,
        isAvailable,
      },
    });

    return newTable;
  }
);

export const update = withPerformanceMonitoring(
  "tablelist.update",
  async function (id, name, isAvailable) {
    // Smart cache invalidation
    serviceCache.invalidateRelated("update", id);

    const updatedTable = await prisma.tableList.update({
      where: { id: Number(id) },
      data: {
        name,
        isAvailable,
      },
    });

    return updatedTable;
  }
);
