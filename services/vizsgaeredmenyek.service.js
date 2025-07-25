import prisma from "../utils/prisma.js";
import * as cache from "../utils/cache.js";

// Cache TTLs
const CACHE_TTL = {
  LIST: 5 * 60 * 1000, // 5 minutes for lists
  DETAIL: 10 * 60 * 1000, // 10 minutes for details
};

export async function getAll(tanev) {
  const cacheKey = `vizsgaEredmenyek:all:${tanev}`;
  const cachedData = cache.get(cacheKey);

  if (cachedData) {
    return cachedData;
  }

  const firstYear = parseInt(tanev) - 4;
  const lastYear = parseInt(tanev);

  const data = await prisma.vizsgaEredmenyek.findMany({
    where: {
      tanev_kezdete: {
        gte: firstYear,
        lte: lastYear,
      },
    },
    orderBy: {
      datum: "asc",
    },
    include: {
      alapadatok: {
        select: {
          nev: true,
        },
      },
      szakirany: true,
      szakma: true,
    },
  });

  // Store in cache
  cache.set(cacheKey, data, CACHE_TTL.LIST);

  return data;
}

export async function getAllByAlapadatok(alapadatokId, tanev) {
  const cacheKey = `vizsgaEredmenyek:alapadatok_id:${alapadatokId}:${tanev}`;
  const cachedData = cache.get(cacheKey);

  if (cachedData) {
    return cachedData;
  }

  const firstYear = parseInt(tanev) - 4;
  const lastYear = parseInt(tanev);

  const data = await prisma.vizsgaEredmenyek.findMany({
    where: {
      alapadatok_id: alapadatokId,
      tanev_kezdete: {
        gte: firstYear,
        lte: lastYear,
      },
    },
    orderBy: {
      datum: "asc",
    },
    include: {
      alapadatok: {
        select: {
          nev: true,
        },
      },
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
  szakmai_vizsga_eredmeny,
  agazati_alapvizsga_eredmeny,
  magyar_nyelv_eretsegi_eredmeny,
  matematika_eretsegi_eredmeny,
  tortenelem_eretsegi_eredmeny,
  angol_nyelv_eretsegi_eredmeny,
  agazati_szakmai_eretsegi_eredmeny
) {
  const newvizsgaEredmenyek = await prisma.vizsgaEredmenyek.create({
    data: {
      szakirany_id,
      szakma_id,
      alapadatok_id,
      tanev_kezdete: parseInt(tanev_kezdete),
      szakmai_vizsga_eredmeny: parseFloat(szakmai_vizsga_eredmeny),
      agazati_alapvizsga_eredmeny: parseFloat(agazati_alapvizsga_eredmeny),
      magyar_nyelv_eretsegi_eredmeny: parseFloat(
        magyar_nyelv_eretsegi_eredmeny
      ),
      matematika_eretsegi_eredmeny: parseFloat(matematika_eretsegi_eredmeny),
      tortenelem_eretsegi_eredmeny: parseFloat(tortenelem_eretsegi_eredmeny),
      angol_nyelv_eretsegi_eredmeny: parseFloat(angol_nyelv_eretsegi_eredmeny),
      agazati_szakmai_eretsegi_eredmeny: parseFloat(
        agazati_szakmai_eretsegi_eredmeny
      ),
    },
  });

  // Invalidate cache
  cache.del(`vizsgaEredmenyek:all:${tanev}`);
  cache.del(`vizsgaEredmenyek:alapadatok_id:${alapadatok_id}:${tanev}`);

  return newvizsgaEredmenyek;
}

export async function deleteAllByAlapadatok(alapadatokId, tanev) {
  const firstYear = parseInt(tanev) - 4;
  const lastYear = parseInt(tanev);

  const deletedCount = await prisma.vizsgaEredmenyek.deleteMany({
    where: {
      alapadatok_id: alapadatokId,
      tanev_kezdete: {
        gte: firstYear,
        lte: lastYear,
      },
    },
  });

  // Invalidate cache
  cache.del(`vizsgaEredmenyek:all:${tanev}`);
  cache.del(`vizsgaEredmenyek:alapadatok_id:${alapadatokId}:${tanev}`);

  return deletedCount;
}
