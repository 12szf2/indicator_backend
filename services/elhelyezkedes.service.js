import prisma from "../utils/prisma.js";
import * as cache from "../utils/cache.js";
import {
  ServiceCache,
  CACHE_TTL,
  withPerformanceMonitoring,
} from "../utils/serviceUtils.js";
import { queryOptimizations } from "../utils/queryOptimizations.js";

// Initialize service cache
const serviceCache = new ServiceCache("elhelyezkedes");

export const create = withPerformanceMonitoring(
  async function create(data) {
    const {
      alapadatok_id,
      tanev_kezdete,
      szakmaNev,
      viszonyNev,
      tanulok_szama,
    } = data;

    const szakma = await prisma.szakma.findUnique({
      where: {
        nev: szakmaNev,
      },
    });

    if (!szakma) {
      throw new Error(`Szakma with name ${szakmaNev} not found`);
    }

    const viszony = await prisma.viszony.findUnique({
      where: {
        nev: viszonyNev,
      },
    });

    if (!viszony) {
      throw new Error(`Viszony with name ${viszonyNev} not found`);
    }

    const result = await prisma.elhelyezkedes.create({
      data: {
        alapadatok_id,
        tanev_kezdete,
        szakma_id: szakma.id,
        viszony_id: viszony.id,
        tanulok_szama,
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

        return await prisma.elhelyezkedes.findMany({
          where: {
            tanev_kezdete: { gte: firstYear, lte: lastYear },
          },
          include: {
            szakma: true,
            viszony: true,
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

        return await prisma.elhelyezkedes.findMany({
          where: {
            alapadatok_id,
            tanev_kezdete: { gte: firstYear, lte: lastYear },
          },
          include: {
            szakma: true,
            viszony: true,
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
      viszonyNev,
      tanulok_szama,
    } = data;

    const szakma = await prisma.szakma.findUnique({
      where: {
        nev: szakmaNev,
      },
    });
    if (!szakma) {
      throw new Error(`Szakma with name ${szakmaNev} not found`);
    }
    const viszony = await prisma.viszony.findUnique({
      where: {
        nev: viszonyNev,
      },
    });
    if (!viszony) {
      throw new Error(`Viszony with name ${viszonyNev} not found`);
    }

    const result = await prisma.elhelyezkedes.update({
      where: {
        id,
      },
      data: {
        alapadatok_id,
        tanev_kezdete,
        szakma_id: szakma.id,
        viszony_id: viszony.id,
        tanulok_szama,
      },
    });

    // Invalidate ServiceCache
    serviceCache.invalidateByTags(['all', 'by_id']);

    return result;
  }
);
