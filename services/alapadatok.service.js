import prisma from "../utils/prisma.js";
import * as cache from "../utils/cache.js";

// Cache TTLs
const CACHE_TTL = {
  LIST: 5 * 60 * 1000, // 5 minutes for lists
  DETAIL: 10 * 60 * 1000, // 10 minutes for details
};

export async function getAll() {
  const cacheKey = "alapadatok:all";
  const cachedData = cache.get(cacheKey);

  if (cachedData) {
    return cachedData;
  }

  const data = await prisma.alapadatok.findMany({
    include: {
      alapadatok_szakirany: {
        include: {
          szakirany: {
            include: {
              szakma: {
                include: {
                  szakma: true,
                },
              },
            },
          },
        },
      },
    },
  });

  // Store in cache
  cache.set(cacheKey, data, CACHE_TTL.LIST);

  return data;
}

export async function getById(id) {
  const cacheKey = `alapadatok:id:${id}`;
  const cachedData = cache.get(cacheKey);

  if (cachedData) {
    return cachedData;
  }

  let year = new Date().getFullYear();
  const month = new Date().getMonth();

  if (month < 6) {
    year -= 1;
  }

  const data = await prisma.alapadatok.findUnique({
    where: {
      id: id,
    },
    include: {
      alapadatok_szakirany: {
        include: {
          szakirany: {
            include: {
              szakma: {
                include: {
                  szakma: true,
                },
              },
            },
          },
        },
      },
    },
  });

  // Store in cache
  cache.set(cacheKey, data, CACHE_TTL.DETAIL);

  return data;
}

export async function add(iskola_neve, intezmeny_tipus) {
  // Invalidate the list cache before adding
  cache.del("alapadatok:all");

  const result = await prisma.alapadatok.create({
    data: {
      iskola_neve: iskola_neve,
      intezmeny_tipus: intezmeny_tipus,
    },
  });
}

export async function update(id, iskola_neve, intezmeny_tipus) {
  // Invalidate both list and specific item cache
  cache.del("alapadatok:all");
  cache.del(`alapadatok:id:${id}`);

  await prisma.alapadatok.update({
    data: {
      iskola_neve: iskola_neve,
      intezmeny_tipus: intezmeny_tipus,
    },
    where: {
      id: id,
    },
  });
}
