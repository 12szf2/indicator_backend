import prisma from "../utils/prisma.js";
import * as cache from "../utils/cache.js";
import {
  ServiceCache,
  CACHE_TTL,
  withPerformanceMonitoring,
} from "../utils/serviceUtils.js";
import { queryOptimizations } from "../utils/queryOptimizations.js";

// Initialize service cache
const serviceCache = new ServiceCache("elegedettseg");

export const getAll = withPerformanceMonitoring(
  "elegedettseg.getAll",
  async function (tanev) {
    return serviceCache.get(
      "all",
      async () => {
        const firstYear = parseInt(tanev) - 4;
        const lastYear = parseInt(tanev);

        return await prisma.elegedettseg.findMany({
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
            szakirany: true,
            szakma: true,
          },
        });
      },
      CACHE_TTL.MEDIUM,
      tanev
    );
  }
);

export const getAllByAlapadatok = withPerformanceMonitoring(
  "elegedettseg.getAllByAlapadatok",
  async function (alapadatokId, tanev) {
    return serviceCache.get(
      "by_alapadatok",
      async () => {
        const firstYear = parseInt(tanev) - 4;
        const lastYear = parseInt(tanev);

        return await prisma.elegedettseg.findMany({
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
            szakirany: true,
            szakma: true,
          },
        });
      },
      CACHE_TTL.MEDIUM,
      alapadatokId,
      tanev
    );
  }
);

export const create = withPerformanceMonitoring(
  "elegedettseg.create",
  async function (
    szakirany_id,
    szakma_id,
    alapadatok_id,
    tanev_kezdete,
    munkaadok_elegedettsege
  ) {
    // Smart cache invalidation
    serviceCache.invalidateRelated("create", alapadatok_id, tanev_kezdete);

    const newelegedettseg = await prisma.elegedettseg.create({
      data: {
        szakirany_id,
        szakma_id,
        alapadatok_id,
        tanev_kezdete: parseInt(tanev_kezdete),
        munkaadok_elegedettsege,
      },
    });

    return newelegedettseg;
  }
);

export const update = withPerformanceMonitoring(
  "elegedettseg.update",
  async function (
    id,
    szakirany_id,
    szakma_id,
    alapadatok_id,
    tanev_kezdete,
    munkaadok_elegedettsege
  ) {
    // Smart cache invalidation
    serviceCache.invalidateRelated("update", id, alapadatok_id, tanev_kezdete);

    const updatedelegedettseg = await prisma.elegedettseg.update({
      where: { id: parseInt(id) },
      data: {
        szakirany_id,
        szakma_id,
        alapadatok_id,
        tanev_kezdete: parseInt(tanev_kezdete),
        munkaadok_elegedettsege,
      },
    });

    return updatedelegedettseg;
  }
);

export const deleteAllByAlapadatok = withPerformanceMonitoring(
  "elegedettseg.deleteAllByAlapadatok",
  async function (alapadatokId, tanev) {
    // Smart cache invalidation
    serviceCache.invalidateRelated("deleteAll", alapadatokId, tanev);

    const firstYear = parseInt(tanev) - 4;
    const lastYear = parseInt(tanev);

    const deletedCount = await prisma.elegedettseg.deleteMany({
      where: {
        alapadatok_id: alapadatokId,
        tanev_kezdete: {
          gte: firstYear,
          lte: lastYear,
        },
      },
    });

    return deletedCount;
  }
);
