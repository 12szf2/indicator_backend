import prisma from "../utils/prisma.js";
import * as cache from "../utils/cache.js";
import {
  ServiceCache,
  CACHE_TTL,
  withPerformanceMonitoring,
} from "../utils/serviceUtils.js";
import { queryOptimizations } from "../utils/queryOptimizations.js";

// Initialize service cache
const serviceCache = new ServiceCache("oktato_egyeb_tev");

export const create = withPerformanceMonitoring(
  async function create(data) {
    const {
      alapadatok_id,
      tanev_kezdete,
      tevekenysegNev,
      oktato_neme,
      oktato_letszam,
    } = data;

    const tevekenyseg = await prisma.tevekenyseg.findUnique({
      where: {
        nev: tevekenysegNev,
      },
    });

    if (!tevekenyseg) {
      throw new Error(`Tevekenyseg with name ${tevekenysegNev} not found`);
    }

    const result = await prisma.oktato_egyeb_tev.create({
      data: {
        alapadatok_id,
        tanev_kezdete,
        tevekenyseg_id: tevekenyseg.id,
        oktato_neme,
        oktato_letszam,
      },
    });

    // Invalidate ServiceCache
    serviceCache.invalidateByTags(['all', 'by_id']);

    return result;
  }
);

export const getAll = withPerformanceMonitoring(
  async function getAll(tanev) {
    return serviceCache.get(
      "all",
      async () => {
        const lastYear = parseInt(tanev);
        const firstYear = lastYear - 4;

        return await prisma.oktato_egyeb_tev.findMany({
          where: {
            tanev_kezdete: { gte: firstYear, lte: lastYear },
          },
          include: {
            tevekenyseg: true,
          },
          orderBy: { createAt: "desc" },
        });
      },
      CACHE_TTL.LIST,
      tanev
    );
  }
);

export const getById = withPerformanceMonitoring(
  async function getById(alapadatok_id, tanev) {
    return serviceCache.get(
      "by_id",
      async () => {
        const lastYear = parseInt(tanev);
        const firstYear = lastYear - 4;

        return await prisma.oktato_egyeb_tev.findMany({
          where: {
            alapadatok_id,
            tanev_kezdete: { gte: firstYear, lte: lastYear },
          },
          include: {
            tevekenyseg: true,
          },
        });
      },
      CACHE_TTL.DETAIL,
      alapadatok_id,
      tanev
    );
  }
);

export const update = withPerformanceMonitoring(
  async function update(id, data) {
    const {
      alapadatok_id,
      tanev_kezdete,
      tevekenysegNev,
      oktato_neme,
      oktato_letszam,
    } = data;

    const tevekenyseg = await prisma.tevekenyseg.findUnique({
      where: {
        nev: tevekenysegNev,
      },
    });
    if (!tevekenyseg) {
      throw new Error(`Tevekenyseg with name ${tevekenysegNev} not found`);
    }

    const result = await prisma.oktato_egyeb_tev.update({
      where: {
        id,
      },
      data: {
        alapadatok_id,
        tanev_kezdete,
        tevekenyseg_id: tevekenyseg.id,
        oktato_neme,
        oktato_letszam,
      },
    });

    // Invalidate ServiceCache
    serviceCache.invalidateByTags(['all', 'by_id']);

    return result;
  }
);
