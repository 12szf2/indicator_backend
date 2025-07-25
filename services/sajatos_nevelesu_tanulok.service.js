import prisma from "../utils/prisma.js";
import * as cache from "../utils/cache.js";

// Cache TTLs
const CACHE_TTL = {
  LIST: 5 * 60 * 1000, // 5 minutes for lists
  DETAIL: 10 * 60 * 1000, // 10 minutes for details
};

export async function getAll(tanev) {
  const cacheKey = `sajatosNevelesuTanulok:all:${tanev}`;
  const cachedData = cache.get(cacheKey);

  if (cachedData) {
    return cachedData;
  }

  const firstYear = parseInt(tanev) - 4;
  const lastYear = parseInt(tanev);

  const data = await prisma.sajatosNevelesuTanulok.findMany({
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
  const cacheKey = `sajatosNevelesuTanulok:alapadatok_id:${alapadatokId}:${tanev}`;
  const cachedData = cache.get(cacheKey);

  if (cachedData) {
    return cachedData;
  }

  const firstYear = parseInt(tanev) - 4;
  const lastYear = parseInt(tanev);

  const data = await prisma.sajatosNevelesuTanulok.findMany({
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
  sni_tanulok_szama,
  tanulok_osszesen
) {
  const newsajatosNevelesuTanulok = await prisma.sajatosNevelesuTanulok.create({
    data: {
      alapadatok_id,
      tanev_kezdete: parseInt(tanev_kezdete),
      sni_tanulok_szama: parseInt(sni_tanulok_szama),
      tanulok_osszesen: parseInt(tanulok_osszesen),
    },
  });

  // Invalidate cache
  cache.del(`sajatosNevelesuTanulok:all:${tanev}`);
  cache.del(`sajatosNevelesuTanulok:alapadatok_id:${alapadatok_id}:${tanev}`);

  return newsajatosNevelesuTanulok;
}

export async function deleteAllByAlapadatok(alapadatokId, tanev) {
  const firstYear = parseInt(tanev) - 4;
  const lastYear = parseInt(tanev);

  const deletedCount = await prisma.sajatosNevelesuTanulok.deleteMany({
    where: {
      alapadatok_id: alapadatokId,
      tanev_kezdete: {
        gte: firstYear,
        lte: lastYear,
      },
    },
  });

  // Invalidate cache
  cache.del(`sajatosNevelesuTanulok:all:${tanev}`);
  cache.del(`sajatosNevelesuTanulok:alapadatok_id:${alapadatokId}:${tanev}`);

  return deletedCount;
}
