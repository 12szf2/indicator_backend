import prisma from "../utils/prisma.js";
import * as cache from "../utils/cache.js";

// Cache TTLs
const CACHE_TTL = {
  LIST: 5 * 60 * 1000, // 5 minutes for lists
  DETAIL: 10 * 60 * 1000, // 10 minutes for details
};

export async function getAll(tanev) {
  const cacheKey = `hHEsHHHTanulok:all:${tanev}`;
  const cachedData = cache.get(cacheKey);

  if (cachedData) {
    return cachedData;
  }

  const firstYear = parseInt(tanev) - 4;
  const lastYear = parseInt(tanev);

  const data = await prisma.hHEsHHHTanulok.findMany({
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
    },
  });

  // Store in cache
  cache.set(cacheKey, data, CACHE_TTL.LIST);

  return data;
}

export async function getAllByAlapadatok(alapadatokId, tanev) {
  const cacheKey = `hHEsHHHTanulok:alapadatok_id:${alapadatokId}:${tanev}`;
  const cachedData = cache.get(cacheKey);

  if (cachedData) {
    return cachedData;
  }

  const firstYear = parseInt(tanev) - 4;
  const lastYear = parseInt(tanev);

  const data = await prisma.hHEsHHHTanulok.findMany({
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
    },
  });

  // Store in cache
  cache.set(cacheKey, data, CACHE_TTL.LIST);

  return data;
}

export async function create(
  alapadatok_id,
  tanev_kezdete,
  hh_tanulo_letszam,
  tanuloi_osszletszam
) {
  const newhHEsHHHTanulok = await prisma.hHEsHHHTanulok.create({
    data: {
      alapadatok_id,
      tanev_kezdete: parseInt(tanev_kezdete),
      hh_tanulo_letszam: parseInt(hh_tanulo_letszam),
      tanuloi_osszletszam: parseInt(tanuloi_osszletszam),
    },
  });

  // Invalidate cache
  cache.del(`hHEsHHHTanulok:all:${tanev}`);
  cache.del(`hHEsHHHTanulok:alapadatok_id:${alapadatok_id}:${tanev}`);

  return newhHEsHHHTanulok;
}

export async function deleteAllByAlapadatok(alapadatokId, tanev) {
  const firstYear = parseInt(tanev) - 4;
  const lastYear = parseInt(tanev);

  const deletedCount = await prisma.hHEsHHHTanulok.deleteMany({
    where: {
      alapadatok_id: alapadatokId,
      tanev_kezdete: {
        gte: firstYear,
        lte: lastYear,
      },
    },
  });

  // Invalidate cache
  cache.del(`hHEsHHHTanulok:all:${tanev}`);
  cache.del(`hHEsHHHTanulok:alapadatok_id:${alapadatokId}:${tanev}`);

  return deletedCount;
}
