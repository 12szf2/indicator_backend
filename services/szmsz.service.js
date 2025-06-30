import prisma from "../utils/prisma.js";
import * as cache from "../utils/cache.js";

export async function getAll(tanev) {
  const cacheKey = `szakkepzesiStatisztika:${tanev}`;
  const cachedData = await cache.get(cacheKey);

  if (cachedData) {
    return cachedData;
  }

  const lastYear = parseInt(tanev);
  const fistYear = lastYear - 4;

  const data = await prisma.szakkepzesiStatisztika.findMany({
    where: { tanev: { gte: fistYear, lte: lastYear } },
    orderBy: { createAt: "desc" },
  });

  cache.set(cacheKey, data, 3600); // Cache for 1 hour
  return data;
}

export async function getSzakkepzesiStatisztika(alapadatokId, tanev) {
  const cacheKey = `szakkepzesiStatisztika:${alapadatokId}`;
  const cachedData = await cache.get(cacheKey);

  if (cachedData) {
    return cachedData;
  }

  const lastYear = parseInt(tanev);
  const fistYear = lastYear - 4;

  const data = await prisma.szakkepzesiStatisztika.findMany({
    where: {
      alapadatok_id: alapadatokId,
      tanev: { gte: fistYear, lte: lastYear },
    },
    orderBy: { createAt: "desc" },
  });

  cache.set(cacheKey, data, 3600); // Cache for 1 hour
  return data;
}

export async function createSzakkepzesiStatisztika(
  alapadatok_id,
  szakirany_id,
  szakma_id,
  statisztika_tipus,
  letszam,
  createBy = null
) {
  const newRecord = await prisma.szakkepzesiStatisztika.create({
    data: {
      alapadatok_id: alapadatok_id,
      szakirany_id: szakirany_id,
      szakma_id: szakma_id,
      statisztika_tipus: statisztika_tipus,
      letszam: Number(letszam),
      createBy: createBy,
    },
  });

  // Invalidate cache for the specific alapadatokId
  cache.del(`szakkepzesiStatisztika:${data.alapadatok_id}`);

  return newRecord;
}

export async function updateSzakkepzesiStatisztika(
  id,
  alapadatok_id,
  szakirany_id,
  szakma_id,
  statisztika_tipus,
  letszam
) {
  const updatedRecord = await prisma.szakkepzesiStatisztika.update({
    where: { id },
    data: {
      alapadatok_id: alapadatok_id,
      szakirany_id: szakirany_id,
      szakma_id: szakma_id,
      statisztika_tipus: statisztika_tipus,
      letszam: Number(letszam),
      updatedAt: new Date(),
    },
  });

  // Invalidate cache for the specific alapadatokId
  cache.del(`szakkepzesiStatisztika:${updatedRecord.alapadatok_id}`);

  return updatedRecord;
}

export async function deleteSzakkepzesiStatisztika(id) {
  const record = await prisma.szakkepzesiStatisztika.findUnique({
    where: { id },
  });

  if (!record) {
    throw new Error("Record not found");
  }

  await prisma.szakkepzesiStatisztika.delete({ where: { id } });

  // Invalidate cache for the specific alapadatokId
  cache.del(`szakkepzesiStatisztika:${record.alapadatok_id}`);

  return { message: "Record deleted successfully" };
}
