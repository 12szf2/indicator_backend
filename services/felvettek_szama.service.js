import prisma from "../utils/prisma.js";
import * as cache from "../utils/cache.js";
import {
  ServiceCache,
  CACHE_TTL,
  withPerformanceMonitoring,
} from "../utils/serviceUtils.js";
import { queryOptimizations } from "../utils/queryOptimizations.js";

// Initialize service cache
const serviceCache = new ServiceCache("felvettek_szama");

export const create = withPerformanceMonitoring(
  async function create(data) {
    const {
      alapadatok_id,
      tanev_kezdete,
      szakmaNev,
      szakiranyNev,
      jelentkezo_letszam,
      felveheto_letszam,
      felvett_letszam,
    } = data;

    const szakma = await prisma.szakma.findUnique({
      where: {
        nev: szakmaNev,
      },
    });

    if (!szakma) {
      throw new Error(`Szakma with name ${szakmaNev} not found`);
    }

    const szakirany = await prisma.szakirany.findUnique({
      where: {
        nev: szakiranyNev,
      },
    });

    if (!szakirany) {
      throw new Error(`Szakirany with name ${szakiranyNev} not found`);
    }

    const result = await prisma.felvettek_Szama.create({
      data: {
        alapadatok_id,
        tanev_kezdete,
        szakma_id: szakma.id,
        szakiranyId: szakirany.id,
        jelentkezo_letszam,
        felveheto_letszam,
        felvett_letszam,
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

        return await prisma.felvettek_Szama.findMany({
          where: {
            tanev_kezdete: { gte: firstYear, lte: lastYear },
          },
          include: {
            szakma: true,
            szakirany: true,
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

        return await prisma.felvettek_Szama.findMany({
          where: {
            alapadatok_id,
            tanev_kezdete: { gte: firstYear, lte: lastYear },
          },
          include: {
            szakma: true,
            szakirany: true,
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
      szakmaNev,
      szakiranyNev,
      jelentkezo_letszam,
      felveheto_letszam,
      felvett_letszam,
    } = data;

    const szakma = await prisma.szakma.findUnique({
      where: {
        nev: szakmaNev,
      },
    });
    if (!szakma) {
      throw new Error(`Szakma with name ${szakmaNev} not found`);
    }
    const szakirany = await prisma.szakirany.findUnique({
      where: {
        nev: szakiranyNev,
      },
    });
    if (!szakirany) {
      throw new Error(`Szakirany with name ${szakiranyNev} not found`);
    }
    
    const result = await prisma.felvettek_Szama.update({
      where: {
        id,
      },
      data: {
        alapadatok_id,
        tanev_kezdete,
        szakma_id: szakma.id,
        szakiranyId: szakirany.id,
        jelentkezo_letszam,
        felveheto_letszam,
        felvett_letszam,
      },
    });

    // Invalidate ServiceCache
    serviceCache.invalidateByTags(['all', 'by_id']);

    return result;
  }
);
