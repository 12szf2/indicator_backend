import prisma from "../utils/prisma.js";
import * as cache from "../utils/cache.js";

// Cache TTLs
const CACHE_TTL = {
  LIST: 5 * 60 * 1000, // 5 minutes for lists
  DETAIL: 10 * 60 * 1000, // 10 minutes for details
};

export async function getAll(tanev) {
  const cacheKey = `szakmaiVizsgaEredmenyek:all:${tanev}`;
  const cachedData = cache.get(cacheKey);

  if (cachedData) {
    return cachedData;
  }

  const firstYear = parseInt(tanev) - 4;
  const lastYear = parseInt(tanev);

  const data = await prisma.szakmaiVizsgaEredmenyek.findMany({
    where: {
      tanev_kezdete: {
        gte: firstYear,
        lte: lastYear,
      },
    },
    orderBy: {
      datum: "asc",
    },
    include: {
      alapadatok: {
        select: {
          nev: true,
        },
      },
      szakirany: true,
      szakma: true,
    },
  });

  // Store in cache
  cache.set(cacheKey, data, CACHE_TTL.LIST);

  return data;
}

export async function getAllByAlapadatok(alapadatokId, tanev) {
  const cacheKey = `szakmaiVizsgaEredmenyek:alapadatok_id:${alapadatokId}:${tanev}`;
  const cachedData = cache.get(cacheKey);

  if (cachedData) {
    return cachedData;
  }

  const firstYear = parseInt(tanev) - 4;
  const lastYear = parseInt(tanev);

  const data = await prisma.szakmaiVizsgaEredmenyek.findMany({
    where: {
      alapadatok_id: alapadatokId,
      tanev_kezdete: {
        gte: firstYear,
        lte: lastYear,
      },
    },
    orderBy: {
      datum: "asc",
    },
    include: {
      alapadatok: {
        select: {
          nev: true,
        },
      },
      szakirany: true,
      szakma: true,
    },
  });

  // Store in cache
  cache.set(cacheKey, data, CACHE_TTL.LIST);

  return data;
}

export async function create(
  szakirany_id,
  szakma_id,
  alapadatok_id,
  tanev_kezdete,
  vizsgara_bocsathatoak_szama,
  sikeres_vizsgazok_szama
) {
  const newszakmaiVizsgaEredmenyek =
    await prisma.szakmaiVizsgaEredmenyek.create({
      data: {
        szakirany_id,
        szakma_id,
        alapadatok_id,
        tanev_kezdete: parseInt(tanev_kezdete),
        vizsgara_bocsathatoak_szama: parseInt(vizsgara_bocsathatoak_szama),
        sikeres_vizsgazok_szama: parseInt(sikeres_vizsgazok_szama),
      },
    });

  // Invalidate cache
  cache.del(`szakmaiVizsgaEredmenyek:all:${tanev}`);
  cache.del(`szakmaiVizsgaEredmenyek:alapadatok_id:${alapadatok_id}:${tanev}`);

  return newszakmaiVizsgaEredmenyek;
}

export async function deleteAllByAlapadatok(alapadatokId, tanev) {
  const firstYear = parseInt(tanev) - 4;
  const lastYear = parseInt(tanev);

  const deletedCount = await prisma.szakmaiVizsgaEredmenyek.deleteMany({
    where: {
      alapadatok_id: alapadatokId,
      tanev_kezdete: {
        gte: firstYear,
        lte: lastYear,
      },
    },
  });

  // Invalidate cache
  cache.del(`szakmaiVizsgaEredmenyek:all:${tanev}`);
  cache.del(`szakmaiVizsgaEredmenyek:alapadatok_id:${alapadatokId}:${tanev}`);

  return deletedCount;
}
