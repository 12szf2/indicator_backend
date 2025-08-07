import prisma from "../utils/prisma.js";
import * as cache from "../utils/cache.js";
import {
  ServiceCache,
  CACHE_TTL,
  withPerformanceMonitoring,
} from "../utils/serviceUtils.js";
import { queryOptimizations } from "../utils/queryOptimizations.js";

// Initialize service cache
const serviceCache = new ServiceCache("egy_oktatora_juto_tanulo");

export const getAll = withPerformanceMonitoring(
  "egy_oktatora_juto_tanulo.getAll",
  async function () {
    return serviceCache.get(
      "all",
      async () => {
        return await prisma.egyOktatoraJutoTanulo.findMany();
      },
      CACHE_TTL.MEDIUM
    );
  }
);

export const getById = withPerformanceMonitoring(
  "egy_oktatora_juto_tanulo.getById",
  async function (alapadatok_id) {
    return serviceCache.get(
      "by_id",
      async () => {
        return await prisma.egyOktatoraJutoTanulo.findMany({
          where: {
            alapadatok_id: alapadatok_id,
          },
        });
      },
      CACHE_TTL.MEDIUM,
      alapadatok_id
    );
  }
);

export const create = withPerformanceMonitoring(async function create(
  tanev_kezdete,
  letszam,
  alapadatok_id
) {
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
});

export const update = withPerformanceMonitoring(async function update(
  id,
  tanev_kezdete,
  letszam,
  alapadatok_id
) {
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
});
