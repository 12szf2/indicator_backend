import prisma from "../utils/prisma.js";
import * as cache from "../utils/cache.js";
import {
  ServiceCache,
  CACHE_TTL,
  withPerformanceMonitoring,
} from "../utils/serviceUtils.js";
import { queryOptimizations } from "../utils/queryOptimizations.js";

// Initialize service cache
const serviceCache = new ServiceCache("elegedettseg_meres");

export const getAll = withPerformanceMonitoring(
  async function getAll(tanev) {
    return serviceCache.get(
      "all",
      async () => {
        const firstYear = parseInt(tanev) - 4;
        const lastYear = parseInt(tanev);

        return await prisma.elegedettsegMeres.findMany({
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
      CACHE_TTL.LIST,
      tanev
    );
  }
);

export const getAllByAlapadatok = withPerformanceMonitoring(
  async function getAllByAlapadatok(alapadatokId, tanev) {
    return serviceCache.get(
      "by_alapadatok",
      async () => {
        const firstYear = parseInt(tanev) - 4;
        const lastYear = parseInt(tanev);

        return await prisma.elegedettsegMeres.findMany({
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
      tanev
    );
  }
);

export const create = withPerformanceMonitoring(
  async function create(
    alapadatok_id,
    tanev_kezdete,
    szulok_elegedettsege,
    oktatok_elegedettsege,
    tanulok_elegedettsege,
    dualis_kepzohely_elegedettsege,
    munkaero_piac_elegedettsege
  ) {
    const newelegedettsegMeres = await prisma.elegedettsegMeres.create({
      data: {
        alapadatok_id,
        tanev_kezdete: parseInt(tanev_kezdete),
        szulok_elegedettsege: parseFloat(szulok_elegedettsege),
        oktatok_elegedettsege: parseFloat(oktatok_elegedettsege),
        tanulok_elegedettsege: parseFloat(tanulok_elegedettsege),
        dualis_kepzohely_elegedettsege: parseFloat(
          dualis_kepzohely_elegedettsege
        ),
        munkaero_piac_elegedettsege: parseFloat(munkaero_piac_elegedettsege),
      },
    });

    // Invalidate ServiceCache
    serviceCache.invalidateByTags(['all', 'by_alapadatok']);

    return newelegedettsegMeres;
  }
);

export const update = withPerformanceMonitoring(
  async function update(
    id,
    alapadatok_id,
    tanev_kezdete,
    szulok_elegedettsege,
    oktatok_elegedettsege,
    tanulok_elegedettsege,
    dualis_kepzohely_elegedettsege,
    munkaero_piac_elegedettsege
  ) {
    const updatedelegedettsegMeres = await prisma.elegedettsegMeres.update({
      where: { id: parseInt(id) },
      data: {
        alapadatok_id,
        tanev_kezdete: parseInt(tanev_kezdete),
        szulok_elegedettsege: parseFloat(szulok_elegedettsege),
        oktatok_elegedettsege: parseFloat(oktatok_elegedettsege),
        tanulok_elegedettsege: parseFloat(tanulok_elegedettsege),
        dualis_kepzohely_elegedettsege: parseFloat(
          dualis_kepzohely_elegedettsege
        ),
        munkaero_piac_elegedettsege: parseFloat(munkaero_piac_elegedettsege),
      },
    });

    // Invalidate ServiceCache
    serviceCache.invalidateByTags(['all', 'by_alapadatok']);

    return updatedelegedettsegMeres;
  }
);

export const deleteAllByAlapadatok = withPerformanceMonitoring(
  async function deleteAllByAlapadatok(alapadatokId, tanev) {
    const firstYear = parseInt(tanev) - 4;
    const lastYear = parseInt(tanev);

    const deletedCount = await prisma.elegedettsegMeres.deleteMany({
      where: {
        alapadatok_id: alapadatokId,
        tanev_kezdete: {
          gte: firstYear,
          lte: lastYear,
        },
      },
    });

    // Invalidate ServiceCache
    serviceCache.invalidateByTags(['all', 'by_alapadatok']);

    return deletedCount;
  }
);
