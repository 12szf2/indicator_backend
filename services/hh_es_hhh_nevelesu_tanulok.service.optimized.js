import prisma from "../utils/prisma.js";
import * as cache from "../utils/cache.js";
import {
  ServiceCache,
  CACHE_TTL,
  withPerformanceMonitoring,
} from "../utils/serviceUtils.js";
import { queryOptimizations } from "../utils/queryOptimizations.js";

// Initialize service cache
const serviceCache = new ServiceCache("hh_es_hhh_nevelesu_tanulok");

export const create = withPerformanceMonitoring(async function create(data) {
  const {
    alapadatok_id,
    tanev_kezdete,
    hh_nevelesu_tanulok_szama,
    hhh_nevelesu_tanulok_szama,
  } = data;

  const result = await prisma.hh_es_hhh_nevelesu_tanulok.create({
    data: {
      alapadatok_id,
      tanev_kezdete,
      hh_nevelesu_tanulok_szama,
      hhh_nevelesu_tanulok_szama,
    },
  });

  // Invalidate ServiceCache
  serviceCache.invalidateByTags(["all", "by_id"]);

  return result;
});

export const getAll = withPerformanceMonitoring(async function getAll(tanev) {
  return serviceCache.get(
    "all",
    async () => {
      const lastYear = parseInt(tanev);
      const firstYear = lastYear - 4;

      return await prisma.hh_es_hhh_nevelesu_tanulok.findMany({
        where: {
          tanev_kezdete: { gte: firstYear, lte: lastYear },
        },
        orderBy: { createAt: "desc" },
      });
    },
    CACHE_TTL.LIST,
    tanev
  );
});

export const getById = withPerformanceMonitoring(async function getById(
  alapadatok_id,
  tanev
) {
  return serviceCache.get(
    "by_id",
    async () => {
      const lastYear = parseInt(tanev);
      const firstYear = lastYear - 4;

      return await prisma.hh_es_hhh_nevelesu_tanulok.findMany({
        where: {
          alapadatok_id,
          tanev_kezdete: { gte: firstYear, lte: lastYear },
        },
      });
    },
    CACHE_TTL.DETAIL,
    alapadatok_id,
    tanev
  );
});

export const update = withPerformanceMonitoring(async function update(
  id,
  data
) {
  const {
    alapadatok_id,
    tanev_kezdete,
    hh_nevelesu_tanulok_szama,
    hhh_nevelesu_tanulok_szama,
  } = data;

  const result = await prisma.hh_es_hhh_nevelesu_tanulok.update({
    where: {
      id,
    },
    data: {
      alapadatok_id,
      tanev_kezdete,
      hh_nevelesu_tanulok_szama,
      hhh_nevelesu_tanulok_szama,
    },
  });

  // Invalidate ServiceCache
  serviceCache.invalidateByTags(["all", "by_id"]);

  return result;
});
