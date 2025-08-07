import prisma from "../utils/prisma.js";
import * as cache from "../utils/cache.js";
import {
  ServiceCache,
  CACHE_TTL,
  withPerformanceMonitoring,
} from "../utils/serviceUtils.js";
import { queryOptimizations } from "../utils/queryOptimizations.js";

// Initialize service cache
const serviceCache = new ServiceCache("versenyek");

export const getAll = withPerformanceMonitoring(
  "versenyek.getAll",
  async function (tanev) {
    return serviceCache.get(
      "all",
      async () => {
        const firstYear = parseInt(tanev) - 4;
        const lastYear = parseInt(tanev);

        return await prisma.versenyek.findMany({
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
            versenyNev: true,
            alapadatok: true,
          },
        });
      },
      CACHE_TTL.MEDIUM,
      tanev
    );
  }
);

export const getAllByAlapadatok = withPerformanceMonitoring(
  "versenyek.getAllByAlapadatok",
  async function (alapadatokId, tanev) {
    return serviceCache.get(
      "alapadatok_id",
      async () => {
        const firstYear = parseInt(tanev) - 4;
        const lastYear = parseInt(tanev);

        return await prisma.versenyek.findMany({
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
            versenyNev: true,
            alapadatok: true,
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
  "versenyek.create",
  async function (
    versenyKategoria,
    versenyNev,
    helyezett_1,
    helyezett_1_3,
    dontobeJutott,
    nevezettekSzama,
    tanev_kezdete,
    alapadatokId
  ) {
    // Smart cache invalidation
    serviceCache.invalidateRelated("create", alapadatokId);

    const data = await prisma.versenyek.create({
      data: {
        helyezett_1,
        helyezett_1_3,
        dontobeJutott,
        nevezettekSzama,
        tanev_kezdete,
        alapadatok_id: alapadatokId,
        versenyNev: {
          connectOrCreate: {
            id: versenyNev,
            create: {
              nev: versenyNev,
              versenyKategoria: {
                connectOrCreate: {
                  id: versenyKategoria,
                  create: {
                    nev: versenyKategoria,
                  },
                },
              },
            },
          },
        },
      },
    });

    return data;
  }
);

export const update = withPerformanceMonitoring(
  "versenyek.update",
  async function (
    id,
    versenyKategoria,
    versenyNev,
    helyezett_1,
    helyezett_1_3,
    dontobeJutott,
    nevezettekSzama,
    tanev_kezdete
  ) {
    // Smart cache invalidation
    serviceCache.invalidateRelated("update", id);

    const data = await prisma.versenyek.update({
      where: { id },
      data: {
        helyezett_1,
        helyezett_1_3,
        dontobeJutott,
        nevezettekSzama,
        tanev_kezdete,
        versenyNev: {
          connectOrCreate: {
            id: versenyNev,
            create: {
              nev: versenyNev,
              versenyKategoria: {
                connectOrCreate: {
                  id: versenyKategoria,
                  create: {
                    nev: versenyKategoria,
                  },
                },
              },
            },
          },
        },
      },
    });

    return data;
  }
);

export const deleteVerseny = withPerformanceMonitoring(
  "versenyek.delete",
  async function (id) {
    // Smart cache invalidation
    serviceCache.invalidateRelated("delete", id);

    const data = await prisma.versenyek.delete({
      where: { id },
    });

    return data;
  }
);
