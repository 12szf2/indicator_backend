import prisma from "../utils/prisma.js";
import * as cache from "../utils/cache.js";

// Cache TTLs
const CACHE_TTL = {
  LIST: 5 * 60 * 1000, // 5 minutes for lists
  DETAIL: 10 * 60 * 1000, // 10 minutes for details
};

export async function getAll(tanev_kezdete) {
  const cacheKey = `dobbanto:all:${tanev_kezdete}`;
  const cachedData = cache.get(cacheKey);

  if (cachedData) {
    return cachedData;
  }

  const firstYear = parseInt(tanev_kezdete) - 4;
  const lastYear = parseInt(tanev_kezdete);

  const data = await prisma.dobbanto.findMany({
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

export async function getAllByAlapadatok(alapadatokId, tanev_kezdete) {
  const cacheKey = `dobbanto:alapadatok_id:${alapadatokId}:${tanev_kezdete}`;
  const cachedData = cache.get(cacheKey);

  if (cachedData) {
    return cachedData;
  }

  const firstYear = parseInt(tanev_kezdete) - 4;
  const lastYear = parseInt(tanev_kezdete);

  const data = await prisma.dobbanto.findMany({
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
  dobbanto_szama,
  tanulok_osszesen
) {
  const newdobbanto = await prisma.dobbanto.create({
    data: {
      alapadatok: { connect: { id: alapadatok_id } },
      tanev_kezdete: parseInt(tanev_kezdete),
      dobbanto_szama: parseInt(dobbanto_szama),
      tanulok_osszesen: parseInt(tanulok_osszesen),
    },
  });

  // Invalidate cache
  cache.del(`dobbanto:all:${tanev_kezdete}`);
  cache.del(`dobbanto:alapadatok_id:${alapadatok_id}:${tanev_kezdete}`);

  return newdobbanto;
}

export async function update(
  id,
  alapadatok_id,
  tanev_kezdete,
  dobbanto_szama,
  tanulok_osszesen
) {
  const updatedDobbanto = await prisma.dobbanto.update({
    where: { id: id },
    data: {
      alapadatok_id,
      tanev_kezdete: parseInt(tanev_kezdete),
      dobbanto_szama: parseInt(dobbanto_szama),
      tanulok_osszesen: parseInt(tanulok_osszesen),
    },
  });

  // Invalidate cache
  cache.del(`dobbanto:all:${tanev_kezdete}`);
  cache.del(`dobbanto:alapadatok_id:${alapadatok_id}:${tanev_kezdete}`);

  return updatedDobbanto;
}

export async function deleteAllByAlapadatok(alapadatokId, tanev_kezdete) {
  const firstYear = parseInt(tanev_kezdete) - 4;
  const lastYear = parseInt(tanev_kezdete);

  const deletedCount = await prisma.dobbanto.deleteMany({
    where: {
      alapadatok_id: alapadatokId,
      tanev_kezdete: {
        gte: firstYear,
        lte: lastYear,
      },
    },
  });

  // Invalidate cache
  cache.del(`dobbanto:all:${tanev_kezdete}`);
  cache.del(`dobbanto:alapadatok_id:${alapadatokId}:${tanev_kezdete}`);

  return deletedCount;
}
