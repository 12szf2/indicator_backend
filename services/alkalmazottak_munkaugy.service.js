import prisma from "../utils/prisma.js";
import * as cache from "../utils/cache.js";

// Cache TTLs
const CACHE_TTL = {
  LIST: 5 * 60 * 1000, // 5 minutes for lists
  DETAIL: 10 * 60 * 1000, // 10 minutes for details
};

export async function getAll(alapadatok_id, tanev_kezdete) {
  const cacheKey = `alkalmazottak_munkaugy:alapadatok_id:${alapadatok_id}${
    tanev_kezdete ? `:tanev_kezdete:${tanev_kezdete}` : ""
  }`;
  const cachedData = cache.get(cacheKey);

  if (cachedData) {
    return cachedData;
  }

  const whereClause = {
    alapadatok_id,
  };

  if (tanev_kezdete) {
    whereClause.TanevKezdete = parseInt(tanev_kezdete);
  }

  const data = await prisma.alkalmazottak_Munkaugy.findMany({
    where: whereClause,
  });

  // Store in cache
  cache.set(cacheKey, data, CACHE_TTL.LIST);

  return data;
}

export async function createMany(alapadatok_id, data) {
  // Validate alapadatok_id exists
  const alapadatokExists = await prisma.alapadatok.findUnique({
    where: { id: alapadatok_id },
  });

  if (!alapadatokExists) {
    throw new Error(`Alapadatok with id ${alapadatok_id} not found`);
  }

  // Invalidate cache
  cache.delByPattern(`alkalmazottak_munkaugy:alapadatok_id:${alapadatok_id}.*`);

  await prisma.alkalmazottak_Munkaugy.deleteMany({
    where: {
      alapadatok_id: alapadatok_id,
    },
  });

  let year = new Date().getFullYear();
  const month = new Date().getMonth();

  if (month < 9) {
    year -= 1;
  }

  data.map((item) => {
    item.alapadatok_id = alapadatok_id;
    if (!item.TanevKezdete) {
      item.TanevKezdete = year;
    }

    // A sémában Decimal(5,2) van, szóval max 999.99 lehet
    // De a gyakorlatban óránál ritkán van 100+ óra, szóval limitáljuk
    if (item.Oraszam && parseFloat(item.Oraszam) > 99.99) {
      console.warn(`Oraszam value ${item.Oraszam} capped to 99.99`);
      item.Oraszam = 99.99;
    }
    if (
      item.FeladattalTerheltOraszam &&
      parseFloat(item.FeladattalTerheltOraszam) > 99.99
    ) {
      console.warn(
        `FeladattalTerheltOraszam value ${item.FeladattalTerheltOraszam} capped to 99.99`
      );
      item.FeladattalTerheltOraszam = 99.99;
    }
    if (
      item.PedagogusHetiOraszama &&
      parseFloat(item.PedagogusHetiOraszama) > 99.99
    ) {
      console.warn(
        `PedagogusHetiOraszama value ${item.PedagogusHetiOraszama} capped to 99.99`
      );
      item.PedagogusHetiOraszama = 99.99;
    }
  });

  data.forEach((element) => {
    delete element.__index;
    delete element.__errors;
  });

  console.log(
    `Creating ${data.length} alkalmazottak_munkaugy records for alapadatok_id: ${alapadatok_id}`
  );

  const createdData = await prisma.alkalmazottak_Munkaugy.createMany({
    data,
  });

  return createdData;
}
