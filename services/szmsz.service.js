import prisma from "../utils/prisma.js";
import * as cache from "../utils/cache.js";

export async function getAll(tanev) {
  const cacheKey = `szakkepzesiMunkaszerzodesAranya:${tanev}`;
  const cachedData = await cache.get(cacheKey);

  console.log("Fetching szakkepzesiMunkaszerzodesAranya data for year:", tanev);

  if (cachedData) {
    return cachedData;
  }

  const lastYear = parseInt(tanev);
  const fistYear = lastYear - 4;

  const data = await prisma.szakkepzesiMunkaszerzodesAranya.findMany({
    where: { tanev_kezdete: { gte: fistYear, lte: lastYear } },
    orderBy: { createAt: "desc" },
  });

  cache.set(cacheKey, data, 3600); // Cache for 1 hour
  return data;
}

export async function getSzakkepzesiMunkaszerzodesAranya(alapadatokId, tanev) {
  const cacheKey = `szakkepzesiMunkaszerzodesAranya:${alapadatokId}:${tanev}`;
  const cachedData = await cache.get(cacheKey);

  if (cachedData) {
    return cachedData;
  }

  const lastYear = parseInt(tanev);
  const firstYear = lastYear - 4;

  const data = await prisma.szakkepzesiMunkaszerzodesAranya.findMany({
    where: {
      alapadatok_id: alapadatokId,
      tanev_kezdete: { gte: firstYear, lte: lastYear },
    },
    include: {
      szakirany: true,
      szakma: true,
    },
    orderBy: { createAt: "desc" },
  });

  cache.set(cacheKey, data, 3600); // Cache for 1 hour
  return data;
}

export async function createSzakkepzesiMunkaszerzodesAranya(
  alapadatok_id,
  szakiranyNev,
  szakmaNev,
  tanulok_osszeletszam,
  munkaszerzodeses_tanulok_szama,
  createBy = null,
  tanev_kezdete
) {
  let newRecord;
  if (szakmaNev && szakmaNev !== "Nincs meghatározva") {
    newRecord = await prisma.szakkepzesiMunkaszerzodesAranya.create({
      data: {
        alapadatok: { connect: { id: alapadatok_id } },
        szakirany: { connect: { nev: szakiranyNev } },
        szakma: { connect: { nev: szakmaNev } },
        tanev_kezdete: tanev_kezdete,
        tanulok_osszeletszam: Number(tanulok_osszeletszam),
        munkaszerzodeses_tanulok_szama: Number(munkaszerzodeses_tanulok_szama),
        createAt: new Date(),
        createBy: createBy,
      },
    });
  } else {
    newRecord = await prisma.szakkepzesiMunkaszerzodesAranya.create({
      data: {
        alapadatok: { connect: { id: alapadatok_id } },
        szakirany: { connect: { nev: szakiranyNev } },
        tanev_kezdete: tanev_kezdete,
        tanulok_osszeletszam: Number(tanulok_osszeletszam),
        munkaszerzodeses_tanulok_szama: Number(munkaszerzodeses_tanulok_szama),
        createAt: new Date(),
        createBy: createBy,
      },
    });
  }

  // Invalidate cache for the specific alapadatokId
  cache.del(`szakkepzesiMunkaszerzodesAranya:${alapadatok_id}`);

  return newRecord;
}

export async function updateSzakkepzesiMunkaszerzodesAranya(
  id,
  alapadatok_id,
  szakiranyNev,
  szakmaNev,
  tanulok_osszeletszam,
  munkaszerzodeses_tanulok_szama,
  createBy = null,
  tanev_kezdete
) {
  let updatedRecord;
  if (szakmaNev && szakmaNev !== "Nincs meghatározva") {
    updatedRecord = await prisma.szakkepzesiMunkaszerzodesAranya.update({
      where: { id },
      data: {
        alapadatok: { connect: { id: alapadatok_id } },
        szakirany: { connect: { nev: szakiranyNev } },
        szakma: { connect: { nev: szakmaNev } },
        tanulok_osszeletszam: Number(tanulok_osszeletszam),
        munkaszerzodeses_tanulok_szama: Number(munkaszerzodeses_tanulok_szama),
        createAt: new Date(),
        createBy: createBy,
        tanev_kezdete: tanev_kezdete,
      },
    });
  } else {
    updatedRecord = await prisma.szakkepzesiMunkaszerzodesAranya.update({
      where: { id },
      data: {
        alapadatok: { connect: { id: alapadatok_id } },
        szakirany: { connect: { nev: szakiranyNev } },
        tanulok_osszeletszam: Number(tanulok_osszeletszam),
        munkaszerzodeses_tanulok_szama: Number(munkaszerzodeses_tanulok_szama),
        createAt: new Date(),
        createBy: createBy,
        tanev_kezdete: tanev_kezdete,
      },
    });
  }

  // Invalidate cache for the specific alapadatokId
  cache.del(`szakkepzesiMunkaszerzodesAranya:${updatedRecord.alapadatok_id}`);

  return updatedRecord;
}

export async function deleteSzakkepzesiMunkaszerzodesAranya(id) {
  const record = await prisma.szakkepzesiMunkaszerzodesAranya.findUnique({
    where: { id },
  });

  if (!record) {
    throw new Error("Record not found");
  }

  await prisma.szakkepzesiMunkaszerzodesAranya.delete({ where: { id } });

  // Invalidate cache for the specific alapadatokId
  cache.del(`szakkepzesiMunkaszerzodesAranya:${record.alapadatok_id}`);

  return { message: "Record deleted successfully" };
}
