import prisma from "../utils/prisma.js";
import * as cache from "../utils/cache.js";

// Cache TTLs
const CACHE_TTL = {
  LIST: 5 * 60 * 1000, // 5 minutes for lists
  DETAIL: 10 * 60 * 1000, // 10 minutes for details
};

export async function getAll(tanev) {
  const cacheKey = `lemorzsolodas:all:${tanev}`;
  const cachedData = cache.get(cacheKey);

  if (cachedData) {
    return cachedData;
  }

  const firstYear = parseInt(tanev) - 4;
  const lastYear = parseInt(tanev);

  const data = await prisma.lemorzsolodas.findMany({
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
  const cacheKey = `lemorzsolodas:alapadatok_id:${alapadatokId}:${tanev}`;
  const cachedData = cache.get(cacheKey);

  if (cachedData) {
    return cachedData;
  }

  const firstYear = parseInt(tanev) - 4;
  const lastYear = parseInt(tanev);

  const data = await prisma.lemorzsolodas.findMany({
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
  lemorzsolodo_tanulok_szama,
  oktober_es_belepett_tanulok_szama
) {
  const newlemorzsolodas = await prisma.lemorzsolodas.create({
    data: {
      szakirany_id,
      szakma_id,
      alapadatok_id,
      tanev_kezdete: parseInt(tanev_kezdete),
      lemorzsolodo_tanulok_szama: parseInt(lemorzsolodo_tanulok_szama),
      oktober_es_belepett_tanulok_szama: parseInt(
        oktober_es_belepett_tanulok_szama
      ),
    },
  });

  // Invalidate cache
  cache.del(`lemorzsolodas:all:${tanev}`);
  cache.del(`lemorzsolodas:alapadatok_id:${alapadatok_id}:${tanev}`);

  return newlemorzsolodas;
}

export async function update(
  id,
  szakirany_id,
  szakma_id,
  alapadatok_id,
  tanev_kezdete,
  lemorzsolodo_tanulok_szama,
  oktober_es_belepett_tanulok_szama
) {
  const updatedlemorzsolodas = await prisma.lemorzsolodas.update({
    where: { id: parseInt(id) },
    data: {
      szakirany_id,
      szakma_id,
      alapadatok_id,
      tanev_kezdete: parseInt(tanev_kezdete),
      lemorzsolodo_tanulok_szama: parseInt(lemorzsolodo_tanulok_szama),
      oktober_es_belepett_tanulok_szama: parseInt(
        oktober_es_belepett_tanulok_szama
      ),
    },
  });
  // Invalidate cache
  cache.del(`lemorzsolodas:all:${tanev_kezdete}`);
  cache.del(`lemorzsolodas:alapadatok_id:${alapadatok_id}:${tanev_kezdete}`);

  return updatedlemorzsolodas;
}

export async function deleteAllByAlapadatok(alapadatokId, tanev) {
  const firstYear = parseInt(tanev) - 4;
  const lastYear = parseInt(tanev);

  const deletedCount = await prisma.lemorzsolodas.deleteMany({
    where: {
      alapadatok_id: alapadatokId,
      tanev_kezdete: {
        gte: firstYear,
        lte: lastYear,
      },
    },
  });

  // Invalidate cache
  cache.del(`lemorzsolodas:all:${tanev}`);
  cache.del(`lemorzsolodas:alapadatok_id:${alapadatokId}:${tanev}`);

  return deletedCount;
}
