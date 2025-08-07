import prisma from "../utils/prisma.js";
import * as cache from "../utils/cache.js";
import {
  ServiceCache,
  CACHE_TTL,
  withPerformanceMonitoring,
} from "../utils/serviceUtils.js";
import { queryOptimizations } from "../utils/queryOptimizations.js";

// Initialize service cache
const serviceCache = new ServiceCache("tanulo_letszam");

export const create = withPerformanceMonitoring(async function create(data) {
  const { alapadatok_id, tanev_kezdete, szakmaNev, evfolyam, tanulo_letszam } =
    data;

  const szakma = await prisma.szakma.findUnique({
    where: {
      nev: szakmaNev,
    },
  });

  if (!szakma) {
    throw new Error(`Szakma with name ${szakmaNev} not found`);
  }

  const result = await prisma.tanulo_letszam.create({
    data: {
      alapadatok_id,
      tanev_kezdete,
      szakma_id: szakma.id,
      evfolyam,
      tanulo_letszam,
    },
  });

  // Invalidate ServiceCache
  serviceCache.invalidateByTags(["all", "by_id"]);

  return result;
});

export const getAll = withPerformanceMonitoring(async function getAll(tanev) {
  return serviceCache.get(
    "all",
    async () => {
      const lastYear = parseInt(tanev);
      const firstYear = lastYear - 4;

      return await prisma.tanulo_letszam.findMany({
        where: {
          tanev_kezdete: { gte: firstYear, lte: lastYear },
        },
        include: {
          szakma: true,
        },
        orderBy: { createAt: "desc" },
      });
    },
    CACHE_TTL.LIST,
    tanev
  );
});

export const getById = withPerformanceMonitoring(async function getById(
  alapadatok_id,
  tanev
) {
  return serviceCache.get(
    "by_id",
    async () => {
      const lastYear = parseInt(tanev);
      const firstYear = lastYear - 4;

      return await prisma.tanulo_letszam.findMany({
        where: {
          alapadatok_id,
          tanev_kezdete: { gte: firstYear, lte: lastYear },
        },
        include: {
          szakma: true,
        },
      });
    },
    CACHE_TTL.DETAIL,
    alapadatok_id,
    tanev
  );
});

export const update = withPerformanceMonitoring(async function update(
  id,
  data
) {
  const { alapadatok_id, tanev_kezdete, szakmaNev, evfolyam, tanulo_letszam } =
    data;

  const szakma = await prisma.szakma.findUnique({
    where: {
      nev: szakmaNev,
    },
  });
  if (!szakma) {
    throw new Error(`Szakma with name ${szakmaNev} not found`);
  }

  const result = await prisma.tanulo_letszam.update({
    where: {
      id,
    },
    data: {
      alapadatok_id,
      tanev_kezdete,
      szakma_id: szakma.id,
      evfolyam,
      tanulo_letszam,
    },
  });

  // Invalidate ServiceCache
  serviceCache.invalidateByTags(["all", "by_id"]);

  return result;
});
