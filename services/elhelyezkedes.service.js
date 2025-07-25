import prisma from "../utils/prisma.js";
import * as cache from "../utils/cache.js";

// Cache TTLs
const CACHE_TTL = {
  LIST: 5 * 60 * 1000, // 5 minutes for lists
  DETAIL: 10 * 60 * 1000, // 10 minutes for details
};

export async function getAll(tanev) {
  const cacheKey = `elhelyezkedes:all:${tanev}`;
  const cachedData = cache.get(cacheKey);

  if (cachedData) {
    return cachedData;
  }

  const firstYear = parseInt(tanev) - 4;
  const lastYear = parseInt(tanev);

  const data = await prisma.elhelyezkedes.findMany({
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

  // Store in cache
  cache.set(cacheKey, data, CACHE_TTL.LIST);

  return data;
}

export async function getAllByAlapadatok(alapadatokId, tanev) {
  const cacheKey = `elhelyezkedes:alapadatok_id:${alapadatokId}:${tanev}`;
  const cachedData = cache.get(cacheKey);

  if (cachedData) {
    return cachedData;
  }

  const firstYear = parseInt(tanev) - 4;
  const lastYear = parseInt(tanev);

  const data = await prisma.elhelyezkedes.findMany({
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

  // Store in cache
  cache.set(cacheKey, data, CACHE_TTL.LIST);

  return data;
}

export async function create(
  szakirany_id,
  szakma_id,
  alapadatok_id,
  tanev_kezdete,
  elhelyezkedok_szama,
  szakmai_okatatasban_sikeresen_vegzettek_szama
) {
  const newElhelyezkedes = await prisma.elhelyezkedes.create({
    data: {
      szakirany_id,
      szakma_id,
      alapadatok_id,
      tanev_kezdete: parseInt(tanev_kezdete),
      elhelyezkedok_szama,
      szakmai_okatatasban_sikeresen_vegzettek_szama,
    },
  });

  // Invalidate cache
  cache.del(`elhelyezkedes:all:${tanev}`);
  cache.del(`elhelyezkedes:alapadatok_id:${alapadatok_id}:${tanev}`);

  return newElhelyezkedes;
}

export async function deleteAllByAlapadatok(alapadatokId, tanev) {
  const firstYear = parseInt(tanev) - 4;
  const lastYear = parseInt(tanev);

  const deletedCount = await prisma.elhelyezkedes.deleteMany({
    where: {
      alapadatok_id: alapadatokId,
      tanev_kezdete: {
        gte: firstYear,
        lte: lastYear,
      },
    },
  });

  // Invalidate cache
  cache.del(`elhelyezkedes:all:${tanev}`);
  cache.del(`elhelyezkedes:alapadatok_id:${alapadatokId}:${tanev}`);

  return deletedCount;
}
