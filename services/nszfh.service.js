import prisma from "../utils/prisma.js";
import * as cache from "../utils/cache.js";
import {
  ServiceCache,
  CACHE_TTL,
  withPerformanceMonitoring,
} from "../utils/serviceUtils.js";
import { queryOptimizations } from "../utils/queryOptimizations.js";

// Initialize service cache
const serviceCache = new ServiceCache("nszfh");

export const getAll = withPerformanceMonitoring(async function getAll(tanev) {
  const cacheKey = "nszfh:all";
  const cachedData = cache.get(cacheKey);

  if (cachedData) {
    return cachedData;
  }
  const firstYear = parseInt(tanev) - 4;
  const lastYear = parseInt(tanev);

  const data = await prisma.versenyek.findMany({
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
      versenyNev: true,
      alapadatok: true,
    },
  });

  // Store in cache
  cache.set(cacheKey, data, CACHE_TTL.LIST);

  return data;
});

export const getAllByAlapadatok = withPerformanceMonitoring(
  async function getAllByAlapadatok(alapadatokId, tanev) {
    const cacheKey = `nszfh:alapadatok_id:${alapadatokId}`;
    const cachedData = cache.get(cacheKey);

    if (cachedData) {
      return cachedData;
    }

    const firstYear = parseInt(tanev) - 4;
    const lastYear = parseInt(tanev);

    const data = await prisma.versenyek.findMany({
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
        versenyNev: true,
        alapadatok: true,
      },
    });

    // Store in cache
    cache.set(cacheKey, data, CACHE_TTL.LIST);

    return data;
  }
);

export const create = withPerformanceMonitoring(async function create(
  alapadatok_id,
  tanev_kezdete,
  kat_1_mat_bemeneti,
  kat_1_mat_kimeneti,
  kat_1_szoveg_bemeneti,
  kat_1_szoveg_kimeneti,
  kat_2_mat_bemeneti,
  kat_2_mat_kimeneti,
  kat_2_szoveg_bemeneti,
  kat_2_szoveg_kimeneti,
  kat_3_mat_bemeneti,
  kat_3_mat_kimeneti,
  kat_3_szoveg_bemeneti,
  kat_3_szoveg_kimeneti,
  kat_4_mat_bemeneti,
  kat_4_mat_kimeneti,
  kat_4_szoveg_bemeneti,
  kat_4_szoveg_kimeneti,
  kat_5_mat_bemeneti,
  kat_5_mat_kimeneti,
  kat_5_szoveg_bemeneti,
  kat_5_szoveg_kimeneti
) {
  // Invalidate relevant caches
  cache.del("nszfh:all");
  cache.del(`nszfh:alapadatok_id:${alapadatok_id}`);

  const data = await prisma.versenyek.create({
    data: {
      alapadatok_id,
      tanev_kezdete,
      kat_1_mat_bemeneti,
      kat_1_mat_kimeneti,
      kat_1_szoveg_bemeneti,
      kat_1_szoveg_kimeneti,
      kat_2_mat_bemeneti,
      kat_2_mat_kimeneti,
      kat_2_szoveg_bemeneti,
      kat_2_szoveg_kimeneti,
      kat_3_mat_bemeneti,
      kat_3_mat_kimeneti,
      kat_3_szoveg_bemeneti,
      kat_3_szoveg_kimeneti,
      kat_4_mat_bemeneti,
      kat_4_mat_kimeneti,
      kat_4_szoveg_bemeneti,
      kat_4_szoveg_kimeneti,
      kat_5_mat_bemeneti,
      kat_5_mat_kimeneti,
      kat_5_szoveg_bemeneti,
      kat_5_szoveg_kimeneti,
    },
    include: {
      versenyNev: true,
      alapadatok: true,
    },
  });
  // Store in cache
  cache.set(`nszfh:alapadatok_id:${alapadatok_id}`, data, CACHE_TTL.LIST);

  return data;
});

export const update = withPerformanceMonitoring(async function update(
  id,
  alapadatok_id,
  tanev_kezdete,
  kat_1_mat_bemeneti,
  kat_1_mat_kimeneti,
  kat_1_szoveg_bemeneti,
  kat_1_szoveg_kimeneti,
  kat_2_mat_bemeneti,
  kat_2_mat_kimeneti,
  kat_2_szoveg_bemeneti,
  kat_2_szoveg_kimeneti,
  kat_3_mat_bemeneti,
  kat_3_mat_kimeneti,
  kat_3_szoveg_bemeneti,
  kat_3_szoveg_kimeneti,
  kat_4_mat_bemeneti,
  kat_4_mat_kimeneti,
  kat_4_szoveg_bemeneti,
  kat_4_szoveg_kimeneti,
  kat_5_mat_bemeneti,
  kat_5_mat_kimeneti,
  kat_5_szoveg_bemeneti,
  kat_5_szoveg_kimeneti
) {
  // Invalidate relevant caches
  cache.del("nszfh:all");
  cache.del(`nszfh:alapadatok_id:${alapadatok_id}`);

  const data = await prisma.versenyek.update({
    where: { id },
    data: {
      alapadatok_id,
      tanev_kezdete,
      kat_1_mat_bemeneti,
      kat_1_mat_kimeneti,
      kat_1_szoveg_bemeneti,
      kat_1_szoveg_kimeneti,
      kat_2_mat_bemeneti,
      kat_2_mat_kimeneti,
      kat_2_szoveg_bemeneti,
      kat_2_szoveg_kimeneti,
      kat_3_mat_bemeneti,
      kat_3_mat_kimeneti,
      kat_3_szoveg_bemeneti,
      kat_3_szoveg_kimeneti,
      kat_4_mat_bemeneti,
      kat_4_mat_kimeneti,
      kat_4_szoveg_bemeneti,
      kat_4_szoveg_kimeneti,
      kat_5_mat_bemeneti,
      kat_5_mat_kimeneti,
      kat_5_szoveg_bemeneti,
      kat_5_szoveg_kimeneti,
    },
    include: {
      versenyNev: true,
      alapadatok: true,
    },
  });

  // Store in cache
  cache.set(`nszfh:alapadatok_id:${alapadatok_id}`, data, CACHE_TTL.LIST);

  return data;
});

export const deleteAllByAlapadatok = withPerformanceMonitoring(
  async function deleteAllByAlapadatok(alapadatokId, tanev) {
    // Invalidate relevant caches
    cache.del("nszfh:all");
    cache.del(`nszfh:alapadatok_id:${alapadatokId}`);

    const data = await prisma.versenyek.deleteMany({
      where: {
        alapadatok_id: alapadatokId,
        tanev_kezdete: tanev,
      },
    });

    return data;
  }
);
