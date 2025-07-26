import prisma from "../utils/prisma.js";
import * as cache from "../utils/cache.js";

// Cache TTLs
const CACHE_TTL = {
  LIST: 5 * 60 * 1000, // 5 minutes for lists
  DETAIL: 10 * 60 * 1000, // 10 minutes for details
};

export async function create(
  alapadatok_id,
  tanev_kezdete,
  szakmaNev,
  szakiranyNev,
  jelentkezo_letszam,
  felveheto_letszam,
  felvett_letszam
) {
  // Invalidate relevant caches
  cache.del("felvettek_szama:all");
  cache.del(`felvettek_szama:alapadatok_id:${alapadatok_id}`);
  const szakma = await prisma.szakma.findUnique({
    where: {
      szakmaNev,
    },
  });

  if (!szakma) {
    throw new Error(`Szakma with name ${szakmaNev} not found`);
  }

  const szakirany = await prisma.szakirany.findUnique({
    where: {
      szakiranyNev,
    },
  });

  if (!szakirany) {
    throw new Error(`Szakirany with name ${szakiranyNev} not found`);
  }

  return await prisma.felvettek_Szama.create({
    data: {
      alapadatok_id,
      tanev_kezdete,
      szakma_id: szakma.id,
      szakiranyId: szakirany.id,
      jelentkezo_letszam,
      felveheto_letszam,
      felvett_letszam,
    },
  });
}

export async function getAll() {
  const cacheKey = "felvettek_szama:all";
  const cachedData = cache.get(cacheKey);

  if (cachedData) {
    return cachedData;
  }

  const data = await prisma.felvettek_Szama.findMany();

  // Store in cache
  cache.set(cacheKey, data, CACHE_TTL.LIST);

  return data;
}

export async function getById(alapadatok_id) {
  const cacheKey = `felvettek_szama:alapadatok_id:${alapadatok_id}`;
  const cachedData = cache.get(cacheKey);

  if (cachedData) {
    return cachedData;
  }

  const data = await prisma.felvettek_Szama.findMany({
    where: {
      alapadatok_id,
    },
    include: {
      szakma: true,
      szakirany: true,
    },
  });

  // Store in cache
  cache.set(cacheKey, data, CACHE_TTL.DETAIL);

  return data;
}

export async function update(
  id,
  alapadatok_id,
  tanev_kezdete,
  szakmaNev,
  szakiranyNev,
  jelentkezo_letszam,
  felveheto_letszam,
  felvett_letszam
) {
  // Invalidate relevant caches
  cache.del("felvettek_szama:all");
  cache.del(`felvettek_szama:alapadatok_id:${alapadatok_id}`);
  const szakma = await prisma.szakma.findUnique({
    where: {
      szakmaNev,
    },
  });
  if (!szakma) {
    throw new Error(`Szakma with name ${szakmaNev} not found`);
  }
  const szakirany = await prisma.szakirany.findUnique({
    where: {
      szakiranyNev,
    },
  });
  if (!szakirany) {
    throw new Error(`Szakirany with name ${szakiranyNev} not found`);
  }
  return await prisma.felvettek_Szama.update({
    where: {
      id,
    },
    data: {
      alapadatok_id,
      tanev_kezdete,
      szakma_id: szakma.id,
      szakiranyId: szakirany.id,
      jelentkezo_letszam,
      felveheto_letszam,
      felvett_letszam,
    },
  });
}
