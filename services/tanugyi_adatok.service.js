import prisma from "../utils/prisma.js";
import * as cache from "../utils/cache.js";

// Cache TTLs
const CACHE_TTL = {
  LIST: 5 * 60 * 1000, // 5 minutes for lists
  DETAIL: 10 * 60 * 1000, // 10 minutes for details
};

export async function getAll(alapadatok_id, ev) {
  const cacheKey = `tanugyi_adatok:alapadatok_id:${alapadatok_id}${
    ev ? `:ev:${ev}` : ""
  }`;
  const cachedData = cache.get(cacheKey);

  if (cachedData) {
    return cachedData;
  }

  const data = await prisma.tanugyi_Adatok.findMany({
    where: {
      alapadatok_id,
    },
  });

  // Store in cache
  cache.set(cacheKey, data, CACHE_TTL.LIST);

  return data;
}

export async function createMany(alapadatok_id, data) {
  // Invalidate cache
  cache.delByPattern(`tanugyi_adatok:alapadatok_id:${alapadatok_id}.*`);

  await prisma.tanugyi_Adatok.deleteMany({
    where: {
      alapadatok_id: alapadatok_id,
    },
  });

  let year = new Date().getFullYear();
  const month = new Date().getMonth();

  if (month < 6) {
    year -= 1;
  }

  data.map((item) => {
    item.alapadatok_id = alapadatok_id;
    item.createBy = "cc2c2d68-5b38-4f9b-9e4f-1a3c9a0fb2a4";
    item.tanev_kezdete = year;
  });

  data.forEach((element) => {
    delete element.__index;
    delete element.__errors;
  });

  const createdData = await prisma.tanugyi_Adatok.createMany({
    data,
  });

  return createdData;
}
