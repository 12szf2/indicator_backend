import prisma from "../utils/prisma.js";
import * as cache from "../utils/cache.js";

// Cache TTLs
const CACHE_TTL = {
  LIST: 5 * 60 * 1000, // 5 minutes for lists
  DETAIL: 10 * 60 * 1000, // 10 minutes for details
};

export async function getAll() {
  const cacheKey = "egyOktatoraJutoTanulo:all";
  const cachedData = cache.get(cacheKey);

  if (cachedData) {
    return cachedData;
  }

  const data = await prisma.egyOktatoraJutoTanulo.findMany();

  // Store in cache
  cache.set(cacheKey, data, CACHE_TTL.LIST);

  return data;
}

export async function getById(alapadatok_id) {
  const cacheKey = `egyOktatoraJutoTanulo:id:${alapadatok_id}`;

  const cachedData = cache.get(cacheKey);

  if (cachedData) {
    return cachedData;
  }

  const data = await prisma.egyOktatoraJutoTanulo.findMany({
    where: {
      alapadatok_id: alapadatok_id,
    },
  });

  // Store in cache
  cache.set(cacheKey, data, CACHE_TTL.DETAIL);

  return data;
}

export async function create(tanev_kezdete, letszam, alapadatok_id) {
  const newEntry = await prisma.egyOktatoraJutoTanulo.create({
    data: {
      tanev_kezdete: tanev_kezdete,
      letszam: Number(letszam),
      alapadatok_id: Number(alapadatok_id),
    },
  });

  // Invalidate cache
  cache.invalidate("egyOktatoraJutoTanulo:all");

  return newEntry;
}

export async function update(id, tanev_kezdete, letszam, alapadatok_id) {
  const updatedEntry = await prisma.egyOktatoraJutoTanulo.update({
    where: {
      id: id,
    },
    data: {
      tanev_kezdete: tanev_kezdete,
      letszam: Number(letszam),
      alapadatok_id: Number(alapadatok_id),
    },
  });

  // Invalidate cache
  cache.invalidate("egyOktatoraJutoTanulo:all");
  cache.invalidate(`egyOktatoraJutoTanulo:id:${id}`);

  return updatedEntry;
}
