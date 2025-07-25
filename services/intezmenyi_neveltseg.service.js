import prisma from "../utils/prisma.js";
import * as cache from "../utils/cache.js";

// Cache TTLs
const CACHE_TTL = {
  LIST: 5 * 60 * 1000, // 5 minutes for lists
  DETAIL: 10 * 60 * 1000, // 10 minutes for details
};

export async function getAll(tanev) {
  const cacheKey = `intezmenyiNeveltseg:all:${tanev}`;
  const cachedData = cache.get(cacheKey);

  if (cachedData) {
    return cachedData;
  }

  const firstYear = parseInt(tanev) - 4;
  const lastYear = parseInt(tanev);

  const data = await prisma.intezmenyiNeveltseg.findMany({
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
    },
  });

  // Store in cache
  cache.set(cacheKey, data, CACHE_TTL.LIST);

  return data;
}

export async function getAllByAlapadatok(alapadatokId, tanev) {
  const cacheKey = `intezmenyiNeveltseg:alapadatok_id:${alapadatokId}:${tanev}`;
  const cachedData = cache.get(cacheKey);

  if (cachedData) {
    return cachedData;
  }

  const firstYear = parseInt(tanev) - 4;
  const lastYear = parseInt(tanev);

  const data = await prisma.intezmenyiNeveltseg.findMany({
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
    },
  });

  // Store in cache
  cache.set(cacheKey, data, CACHE_TTL.LIST);

  return data;
}

export async function create(
  alapadatok_id,
  tanev_kezdete,
  osztaly_jele,
  igazolatlan_ora,
  oktato_testuleti_dicseret,
  oktatoi_dicseret,
  osztalyfonoki_dicseret,
  igazagatoi_dicseret,
  oktato_testuleti_figyelmeztetes,
  oktatoi_figyelmeztetes,
  osztalyfonoki_figyelmeztetes,
  osztalyfonoki_intes,
  osztalyfonoki_megrovas,
  igazgatoi_figyelmeztetes,
  igazgatoi_intes,
  igazgatoi_megrovas,
  fegyelmi_eljaras
) {
  const newintezmenyiNeveltseg = await prisma.intezmenyiNeveltseg.create({
    data: {
      alapadatok_id,
      tanev_kezdete: parseInt(tanev_kezdete),
      osztaly_jele,
      igazolatlan_ora: parseInt(igazolatlan_ora),
      oktato_testuleti_dicseret: parseInt(oktato_testuleti_dicseret),
      oktatoi_dicseret: parseInt(oktatoi_dicseret),
      osztalyfonoki_dicseret: parseInt(osztalyfonoki_dicseret),
      igazgatoi_dicseret: parseInt(igazagatoi_dicseret),
      oktato_testuleti_figyelmeztetes: parseInt(
        oktato_testuleti_figyelmeztetes
      ),
      oktatoi_figyelmeztetes: parseInt(oktatoi_figyelmeztetes),
      osztalyfonoki_figyelmeztetes: parseInt(osztalyfonoki_figyelmeztetes),
      osztalyfonoki_intes: parseInt(osztalyfonoki_intes),
      osztalyfonoki_megrovas: parseInt(osztalyfonoki_megrovas),
      igazgatoi_figyelmeztetes: parseInt(igazgatoi_figyelmeztetes),
      igazgatoi_intes: parseInt(igazgatoi_intes),
      igazgatoi_megrovas: parseInt(igazgatoi_megrovas),
      fegyelmi_eljaras: parseInt(fegyelmi_eljaras),
    },
  });

  // Invalidate cache
  cache.del(`intezmenyiNeveltseg:all:${tanev}`);
  cache.del(`intezmenyiNeveltseg:alapadatok_id:${alapadatok_id}:${tanev}`);

  return newintezmenyiNeveltseg;
}

export async function deleteAllByAlapadatok(alapadatokId, tanev) {
  const firstYear = parseInt(tanev) - 4;
  const lastYear = parseInt(tanev);

  const deletedCount = await prisma.intezmenyiNeveltseg.deleteMany({
    where: {
      alapadatok_id: alapadatokId,
      tanev_kezdete: {
        gte: firstYear,
        lte: lastYear,
      },
    },
  });

  // Invalidate cache
  cache.del(`intezmenyiNeveltseg:all:${tanev}`);
  cache.del(`intezmenyiNeveltseg:alapadatok_id:${alapadatokId}:${tanev}`);

  return deletedCount;
}
