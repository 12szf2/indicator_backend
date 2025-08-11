import prisma from "../utils/prisma.js";
import * as cache from "../utils/cache.js";

// Cache TTLs
const CACHE_TTL = {
  LIST: 5 * 60 * 1000, // 5 minutes for lists
  DETAIL: 10 * 60 * 1000, // 10 minutes for details
};

export async function getAll(tanev) {
  const cacheKey = `sajatosNevelesuTanulok:all:${tanev}`;
  const cachedData = cache.get(cacheKey);

  if (cachedData) {
    return cachedData;
  }

  const firstYear = parseInt(tanev) - 4;
  const lastYear = parseInt(tanev);

  const data = await prisma.sajatosNevelesuTanulok.findMany({
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
      alapadatok: true,
    },
  });

  // Store in cache
  cache.set(cacheKey, data, CACHE_TTL.LIST);

  return data;
}

export async function getAllByAlapadatok(alapadatokId, tanev) {
  const cacheKey = `sajatosNevelesuTanulok:alapadatok_id:${alapadatokId}:${tanev}`;
  const cachedData = cache.get(cacheKey);

  if (cachedData) {
    return cachedData;
  }

  const firstYear = parseInt(tanev) - 4;
  const lastYear = parseInt(tanev);

  const data = await prisma.sajatosNevelesuTanulok.findMany({
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
      alapadatok: true,
    },
  });

  // Store in cache
  cache.set(cacheKey, data, CACHE_TTL.LIST);

  return data;
}

export async function create(
  alapadatok_id,
  tanev_kezdete,
  sni_tanulok_szama,
  tanulok_osszesen
) {
  // Validate input parameters
  if (!alapadatok_id) {
    throw new Error("alapadatok_id is required");
  }
  if (!tanev_kezdete) {
    throw new Error("tanev_kezdete is required");
  }

  // Parse and validate numeric values
  const parsedTanevKezdete = parseInt(tanev_kezdete);
  const parsedSniTanulokSzama = parseInt(sni_tanulok_szama) || 0;
  const parsedTanulokOsszesen = parseInt(tanulok_osszesen) || 0;

  if (isNaN(parsedTanevKezdete)) {
    throw new Error("tanev_kezdete must be a valid number");
  }
  if (isNaN(parsedTanulokOsszesen) || parsedTanulokOsszesen === 0) {
    throw new Error("tanulok_osszesen must be a valid positive number");
  }

  const newsajatosNevelesuTanulok = await prisma.sajatosNevelesuTanulok.create({
    data: {
      alapadatok_id,
      tanev_kezdete: parsedTanevKezdete,
      sni_tanulok_szama: parsedSniTanulokSzama,
      tanulok_osszesen: parsedTanulokOsszesen,
    },
  });

  // Invalidate cache
  cache.del(`sajatosNevelesuTanulok:all:${parsedTanevKezdete + 1}`);
  cache.del(
    `sajatosNevelesuTanulok:alapadatok_id:${alapadatok_id}:${parsedTanevKezdete}`
  );

  return newsajatosNevelesuTanulok;
}

export async function update(
  id,
  alapadatok_id,
  tanev_kezdete,
  sni_tanulok_szama,
  tanulok_osszesen
) {
  const updatedSajatosNevelesuTanulok =
    await prisma.sajatosNevelesuTanulok.update({
      where: { id: parseInt(id) },
      data: {
        alapadatok_id,
        tanev_kezdete: parseInt(tanev_kezdete),
        sni_tanulok_szama: parseInt(sni_tanulok_szama),
        tanulok_osszesen: parseInt(tanulok_osszesen),
      },
    });

  // Invalidate cache
  cache.del(`sajatosNevelesuTanulok:all:${tanev_kezdete}`);
  cache.del(
    `sajatosNevelesuTanulok:alapadatok_id:${alapadatok_id}:${tanev_kezdete}`
  );

  return updatedSajatosNevelesuTanulok;
}

export async function deleteAllByAlapadatok(alapadatokId, tanev) {
  const firstYear = parseInt(tanev) - 4;
  const lastYear = parseInt(tanev);

  const deletedCount = await prisma.sajatosNevelesuTanulok.deleteMany({
    where: {
      alapadatok_id: alapadatokId,
      tanev_kezdete: {
        gte: firstYear,
        lte: lastYear,
      },
    },
  });

  // Invalidate cache
  cache.del(`sajatosNevelesuTanulok:all:${tanev}`);
  cache.del(`sajatosNevelesuTanulok:alapadatok_id:${alapadatokId}:${tanev}`);

  return deletedCount;
}
