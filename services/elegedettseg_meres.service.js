import prisma from "../utils/prisma.js";
import * as cache from "../utils/cache.js";

// Cache TTLs
const CACHE_TTL = {
  LIST: 5 * 60 * 1000, // 5 minutes for lists
  DETAIL: 10 * 60 * 1000, // 10 minutes for details
};

export async function getAll(tanev) {
  const cacheKey = `elegedettsegMeres:all:${tanev}`;
  const cachedData = cache.get(cacheKey);

  if (cachedData) {
    return cachedData;
  }

  const firstYear = parseInt(tanev) - 4;
  const lastYear = parseInt(tanev);

  const data = await prisma.elegedettsegMeres.findMany({
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
  const cacheKey = `elegedettsegMeres:alapadatok_id:${alapadatokId}:${tanev}`;
  const cachedData = cache.get(cacheKey);

  if (cachedData) {
    return cachedData;
  }

  const firstYear = parseInt(tanev) - 4;
  const lastYear = parseInt(tanev);

  const data = await prisma.elegedettsegMeres.findMany({
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
  szulok_elegedettsege,
  oktatok_elegedettsege,
  tanulok_elegedettsege,
  dualis_kepzohely_elegedettsege,
  munkaero_piac_elegedettsege
) {
  const newelegedettsegMeres = await prisma.elegedettsegMeres.create({
    data: {
      alapadatok_id,
      tanev_kezdete: parseInt(tanev_kezdete),
      szulok_elegedettsege: parseFloat(szulok_elegedettsege),
      oktatok_elegedettsege: parseFloat(oktatok_elegedettsege),
      tanulok_elegedettsege: parseFloat(tanulok_elegedettsege),
      dualis_kepzohely_elegedettsege: parseFloat(
        dualis_kepzohely_elegedettsege
      ),
      munkaero_piac_elegedettsege: parseFloat(munkaero_piac_elegedettsege),
    },
  });

  // Invalidate cache
  cache.del(`elegedettsegMeres:all:${tanev}`);
  cache.del(`elegedettsegMeres:alapadatok_id:${alapadatok_id}:${tanev}`);

  return newelegedettsegMeres;
}

export async function deleteAllByAlapadatok(alapadatokId, tanev) {
  const firstYear = parseInt(tanev) - 4;
  const lastYear = parseInt(tanev);

  const deletedCount = await prisma.elegedettsegMeres.deleteMany({
    where: {
      alapadatok_id: alapadatokId,
      tanev_kezdete: {
        gte: firstYear,
        lte: lastYear,
      },
    },
  });

  // Invalidate cache
  cache.del(`elegedettsegMeres:all:${tanev}`);
  cache.del(`elegedettsegMeres:alapadatok_id:${alapadatokId}:${tanev}`);

  return deletedCount;
}
