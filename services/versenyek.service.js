import prisma from "../utils/prisma.js";
import * as cache from "../utils/cache.js";

// Cache TTLs
const CACHE_TTL = {
  LIST: 5 * 60 * 1000, // 5 minutes for lists
  DETAIL: 10 * 60 * 1000, // 10 minutes for details
};

export async function getAll(tanev) {
  const cacheKey = "versenyek:all";
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
}

export async function getAllByAlapadatok(alapadatokId, tanev) {
  const cacheKey = `felvettek_szama:alapadatok_id:${alapadatokId}`;
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

export async function create(
  versenyKategoria,
  versenyNev,
  helyezett_1,
  helyezett_1_3,
  dontobeJutott,
  nevezettekSzama,
  tanev_kezdete,
  alapadatokId
) {
  // Invalidate relevant caches
  cache.del("felvettek_szama:all");
  cache.del(`felvettek_szama:alapadatok_id:${alapadatokId}`);

  const data = await prisma.versenyek.create({
    data: {
      helyezett_1,
      helyezett_1_3,
      dontobeJutott,
      nevezettekSzama,
      tanev_kezdete,
      alapadatok_id: alapadatokId,
      versenyNev: {
        connectOrCreate: {
          id: versenyNev,
          create: {
            nev: versenyNev,
            versenyKategoria: {
              connectOrCreate: {
                id: versenyKategoria,
                create: {
                  nev: versenyKategoria,
                },
              },
            },
          },
        },
      },
    },
  });

  return data;
}

export async function update(
  id,
  versenyKategoria,
  versenyNev,
  helyezett_1,
  helyezett_1_3,
  dontobeJutott,
  nevezettekSzama,
  tanev_kezdete
) {
  // Invalidate relevant caches
  cache.del("felvettek_szama:all");
  cache.del(`felvettek_szama:alapadatok_id:${alapadatokId}`);

  const data = await prisma.versenyek.update({
    where: { id },
    data: {
      helyezett_1,
      helyezett_1_3,
      dontobeJutott,
      nevezettekSzama,
      tanev_kezdete,
      versenyNev: {
        connectOrCreate: {
          id: versenyNev,
          create: {
            nev: versenyNev,
            versenyKategoria: {
              connectOrCreate: {
                id: versenyKategoria,
                create: {
                  nev: versenyKategoria,
                },
              },
            },
          },
        },
      },
    },
  });

  return data;
}
