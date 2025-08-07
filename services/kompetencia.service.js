import prisma from "../utils/prisma.js";
import * as cache from "../utils/cache.js";
import {
  ServiceCache,
  CACHE_TTL,
  withPerformanceMonitoring,
} from "../utils/serviceUtils.js";
import { queryOptimizations } from "../utils/queryOptimizations.js";

// Initialize service cache
const serviceCache = new ServiceCache("kompetencia");

export const create = withPerformanceMonitoring(
  async function create(data) {
    const {
      alapadatok_id,
      tanev_kezdete,
      kompetenciaterületNev,
      szakmaNev,
      megszerzett_kompetenciak_szama,
      sikeres_kompetencia_vizsgak_szama,
    } = data;

    const kompetenciaterület = await prisma.kompetenciaterület.findUnique({
      where: {
        nev: kompetenciaterületNev,
      },
    });

    if (!kompetenciaterület) {
      throw new Error(
        `Kompetenciaterület with name ${kompetenciaterületNev} not found`
      );
    }

    const szakma = await prisma.szakma.findUnique({
      where: {
        nev: szakmaNev,
      },
    });

    if (!szakma) {
      throw new Error(`Szakma with name ${szakmaNev} not found`);
    }

    const result = await prisma.kompetencia.create({
      data: {
        alapadatok_id,
        tanev_kezdete,
        kompetenciaterület_id: kompetenciaterület.id,
        szakma_id: szakma.id,
        megszerzett_kompetenciak_szama,
        sikeres_kompetencia_vizsgak_szama,
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

        return await prisma.kompetencia.findMany({
          where: {
            tanev_kezdete: { gte: firstYear, lte: lastYear },
          },
          include: {
            kompetenciaterület: true,
            szakma: true,
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

        return await prisma.kompetencia.findMany({
          where: {
            alapadatok_id,
            tanev_kezdete: { gte: firstYear, lte: lastYear },
          },
          include: {
            kompetenciaterület: true,
            szakma: true,
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
      kompetenciaterületNev,
      szakmaNev,
      megszerzett_kompetenciak_szama,
      sikeres_kompetencia_vizsgak_szama,
    } = data;

    const kompetenciaterület = await prisma.kompetenciaterület.findUnique({
      where: {
        nev: kompetenciaterületNev,
      },
    });
    if (!kompetenciaterület) {
      throw new Error(
        `Kompetenciaterület with name ${kompetenciaterületNev} not found`
      );
    }
    const szakma = await prisma.szakma.findUnique({
      where: {
        nev: szakmaNev,
      },
    });
    if (!szakma) {
      throw new Error(`Szakma with name ${szakmaNev} not found`);
    }

    const result = await prisma.kompetencia.update({
      where: {
        id,
      },
      data: {
        alapadatok_id,
        tanev_kezdete,
        kompetenciaterület_id: kompetenciaterület.id,
        szakma_id: szakma.id,
        megszerzett_kompetenciak_szama,
        sikeres_kompetencia_vizsgak_szama,
      },
    });

    // Invalidate ServiceCache
    serviceCache.invalidateByTags(['all', 'by_id']);

    return result;
  }
);
