import prisma from "../utils/prisma.js";
import * as cache from "../utils/cache.js";

// Cache TTLs
const CACHE_TTL = {
  LIST: 5 * 60 * 1000, // 5 minutes for lists
  DETAIL: 10 * 60 * 1000, // 10 minutes for details
};

export async function getAll() {
  const cacheKey = "kompetencia:all";
  const cachedData = cache.get(cacheKey);

  if (cachedData) {
    return cachedData;
  }

  const data = await prisma.kompetencia.findMany();

  // Store in cache
  cache.set(cacheKey, data, CACHE_TTL.LIST);

  return data;
}

export async function getById(id) {
  const cacheKey = `kompetencia:alapadatok_id:${id}`;
  const cachedData = cache.get(cacheKey);

  if (cachedData) {
    return cachedData;
  }

  const data = await prisma.kompetencia.findMany({
    where: {
      alapadatok_id: id,
    },
  });

  // Store in cache
  cache.set(cacheKey, data, CACHE_TTL.DETAIL);

  return data;
}

export async function create(
  alapadatok_id,
  tanev_kezdete,
  mat_orsz_p,
  szoveg_orsz_p,
  mat_int_p,
  szoveg_int_p,
  kepzes_forma
) {
  // Invalidate related caches
  cache.del("kompetencia:all");
  cache.del(`kompetencia:alapadatok_id:${alapadatok_id}`);

  await deleteAllByAlapadatokId(alapadatok_id, tanev_kezdete);

  const data = await prisma.kompetencia.create({
    data: {
      alapadatok_id: alapadatok_id,
      tanev_kezdete: Number(tanev_kezdete),
      mat_int_p,
      mat_orsz_p,
      szoveg_int_p,
      szoveg_orsz_p,
      kepzes_forma,
    },
  });

  return data;
}

export async function deleteAllByAlapadatokId(alapadatok_id, year) {
  const data = await prisma.kompetencia.deleteMany({
    where: {
      alapadatok_id: alapadatok_id,
      tanev_kezdete: Number(year),
    },
  });

  return data;
}
