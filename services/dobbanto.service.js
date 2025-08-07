import prisma from "../utils/prisma.js";
import * as cache from "../utils/cache.js";
import {
  ServiceCache,
  CACHE_TTL,
  withPerformanceMonitoring,
} from "../utils/serviceUtils.js";
import { queryOptimizations } from "../utils/queryOptimizations.js";

// Initialize service cache
const serviceCache = new ServiceCache("dobbanto");

export const getAll = withPerformanceMonitoring(
  "dobbanto.getAll",
  async function (tanev_kezdete) {
    return serviceCache.get(
      "all",
      async () => {
        const firstYear = parseInt(tanev_kezdete) - 4;
        const lastYear = parseInt(tanev_kezdete);

        return await prisma.dobbanto.findMany({
          where: {
            tanev_kezdete: {
              gte: firstYear,
              lte: lastYear,
            },
          },
          orderBy: {
            tanev_kezdete: "asc",
          },
          include: {
            alapadatok: true,
          },
        });
      },
      CACHE_TTL.MEDIUM,
      tanev_kezdete
    );
  }
);

export const getAllByAlapadatok = withPerformanceMonitoring(
  async function getAllByAlapadatok(alapadatokId, tanev_kezdete) {
    return serviceCache.get(
      "by_alapadatok",
      async () => {
        const firstYear = parseInt(tanev_kezdete) - 4;
        const lastYear = parseInt(tanev_kezdete);

        return await prisma.dobbanto.findMany({
          where: {
            alapadatok_id: alapadatokId,
            tanev_kezdete: {
              gte: firstYear,
              lte: lastYear,
            },
          },
          orderBy: {
            tanev_kezdete: "asc",
          },
          include: {
            alapadatok: true,
          },
        });
      },
      CACHE_TTL.LIST,
      alapadatokId,
      tanev_kezdete
    );
  }
);

export const create = withPerformanceMonitoring(async function create(
  alapadatok_id,
  tanev_kezdete,
  dobbanto_szama,
  tanulok_osszesen
) {
  const newdobbanto = await prisma.dobbanto.create({
    data: {
      alapadatok: { connect: { id: alapadatok_id } },
      tanev_kezdete: parseInt(tanev_kezdete),
      dobbanto_szama: parseInt(dobbanto_szama),
      tanulok_osszesen: parseInt(tanulok_osszesen),
    },
  });

  // Invalidate ServiceCache
  serviceCache.invalidateByTags(["all", "by_alapadatok"]);

  return newdobbanto;
});

export const update = withPerformanceMonitoring(async function update(
  id,
  alapadatok_id,
  tanev_kezdete,
  dobbanto_szama,
  tanulok_osszesen
) {
  const updatedDobbanto = await prisma.dobbanto.update({
    where: { id: id },
    data: {
      alapadatok_id,
      tanev_kezdete: parseInt(tanev_kezdete),
      dobbanto_szama: parseInt(dobbanto_szama),
      tanulok_osszesen: parseInt(tanulok_osszesen),
    },
  });

  // Invalidate ServiceCache
  serviceCache.invalidateByTags(["all", "by_alapadatok"]);

  return updatedDobbanto;
});

export const deleteAllByAlapadatok = withPerformanceMonitoring(
  async function deleteAllByAlapadatok(alapadatokId, tanev_kezdete) {
    const firstYear = parseInt(tanev_kezdete) - 4;
    const lastYear = parseInt(tanev_kezdete);

    const deletedCount = await prisma.dobbanto.deleteMany({
      where: {
        alapadatok_id: alapadatokId,
        tanev_kezdete: {
          gte: firstYear,
          lte: lastYear,
        },
      },
    });

    // Invalidate ServiceCache
    serviceCache.invalidateByTags(["all", "by_alapadatok"]);

    return deletedCount;
  }
);
