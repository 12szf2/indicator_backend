import prisma from "../utils/prisma.js";
import * as cache from "../utils/cache.js";

// Cache TTLs
const CACHE_TTL = {
  LIST: 5 * 60 * 1000, // 5 minutes for lists
  DETAIL: 10 * 60 * 1000, // 10 minutes for details
};

export async function getAll(tanev) {
  const cacheKey = `muhelyiskola:all:${tanev}`;
  const cachedData = cache.get(cacheKey);

  if (cachedData) {
    return cachedData;
  }

  const firstYear = parseInt(tanev) - 4;
  const lastYear = parseInt(tanev);

  const data = await prisma.muhelyiskola.findMany({
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

  // Store in cache
  cache.set(cacheKey, data, CACHE_TTL.LIST);

  return data;
}

export async function getAllByAlapadatok(alapadatokId, tanev) {
  const cacheKey = `muhelyiskola:alapadatok_id:${alapadatokId}:${tanev}`;
  const cachedData = cache.get(cacheKey);

  if (cachedData) {
    return cachedData;
  }

  const firstYear = parseInt(tanev) - 4;
  const lastYear = parseInt(tanev);

  const data = await prisma.muhelyiskola.findMany({
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

  // Store in cache
  cache.set(cacheKey, data, CACHE_TTL.LIST);

  return data;
}

export async function create(
  alapadatok_id,
  tanev_kezdete,
  reszszakmat_szerezok_szama,
  muhelyiskola_tanuloi_osszletszam
) {
  const newmuhelyiskola = await prisma.muhelyiskola.create({
    data: {
      alapadatok_id,
      tanev_kezdete: parseInt(tanev_kezdete),
      reszszakmat_szerezok_szama: parseInt(reszszakmat_szerezok_szama),
      muhelyiskola_tanuloi_osszletszam: parseInt(
        muhelyiskola_tanuloi_osszletszam
      ),
    },
  });

  // Invalidate cache
  cache.del(`muhelyiskola:all:${tanev}`);
  cache.del(`muhelyiskola:alapadatok_id:${alapadatok_id}:${tanev}`);

  return newmuhelyiskola;
}

export async function deleteAllByAlapadatok(alapadatokId, tanev) {
  const firstYear = parseInt(tanev) - 4;
  const lastYear = parseInt(tanev);

  const deletedCount = await prisma.muhelyiskola.deleteMany({
    where: {
      alapadatok_id: alapadatokId,
      tanev_kezdete: {
        gte: firstYear,
        lte: lastYear,
      },
    },
  });

  // Invalidate cache
  cache.del(`muhelyiskola:all:${tanev}`);
  cache.del(`muhelyiskola:alapadatok_id:${alapadatokId}:${tanev}`);

  return deletedCount;
}
