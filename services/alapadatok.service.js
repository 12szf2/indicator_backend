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
      alapadatok_szakma: {
        include: {
          szakma: true,
        },
      },
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
      alapadatok_szakma: {
        include: {
          szakma: true,
        },
      },
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

export async function add(
  iskola_neve,
  intezmeny_tipus,
  alapadatok_szakirany = []
) {
  // Invalidate the list cache before adding
  cache.del("alapadatok:all");

  const foundOrCreatedSzakirany = await Promise.all(
    alapadatok_szakirany.map(async (szakirany) => {
      const szakiranyNev = szakirany.szakirany.nev;

      // Check if the szakirany already exists
      const existingSzakirany = await prisma.szakirany.findUnique({
        where: {
          nev: szakiranyNev,
        },
      });

      if (existingSzakirany) {
        return existingSzakirany;
      }

      console.log(szakirany.szakirany);

      // If not, create it
      return await prisma.szakirany.create({
        data: {
          nev: szakiranyNev,
          szakma: {
            create: szakirany.szakirany.szakma.map((szakma) => ({
              szakma: {
                connectOrCreate: {
                  where: { nev: szakma.szakma.nev },
                  create: {
                    nev: szakma.szakma.nev,
                  },
                },
              },
            })),
          },
        },
      });
    })
  );

  const szakmak = alapadatok_szakirany.flatMap((szakirany) =>
    szakirany.szakirany.szakma.map((szakma) => ({
      nev: szakma.szakma.nev,
    }))
  );

  const result = await prisma.alapadatok.create({
    data: {
      iskola_neve: iskola_neve,
      intezmeny_tipus: intezmeny_tipus,
      alapadatok_szakirany: {
        create: foundOrCreatedSzakirany.map((szakirany) => ({
          szakirany_id: szakirany.id,
        })),
      },
      alapadatok_szakma: {
        connectOrCreate: szakmak.map((szakma) => ({
          where: { nev: szakma.nev },
          create: {
            nev: szakma.nev,
          },
        })),
      },
    },
  });

  return result;
}

export async function update(
  id,
  iskola_neve,
  intezmeny_tipus,
  alapadatok_szakirany
) {
  // Invalidate both list and specific item cache
  cache.del("alapadatok:all");
  cache.del(`alapadatok:id:${id}`);

  const foundOrCreatedSzakirany = await Promise.all(
    alapadatok_szakirany.map(async (szakirany) => {
      const szakiranyNev = szakirany.szakirany.nev;

      // Check if the szakirany already exists
      const existingSzakirany = await prisma.szakirany.findUnique({
        where: {
          nev: szakiranyNev,
        },
      });
      if (existingSzakirany) {
        return existingSzakirany;
      }

      console.log(szakirany.szakirany);

      // If not, create it
      return await prisma.szakirany.create({
        data: {
          nev: szakiranyNev,
          szakma: {
            create: szakirany.szakirany.szakma.map((szakma) => ({
              szakma: {
                connectOrCreate: {
                  where: { nev: szakma.szakma.nev },
                  create: {
                    nev: szakma.szakma.nev,
                  },
                },
              },
            })),
          },
        },
      });
    })
  );

  const szakmak = alapadatok_szakirany.flatMap((szakirany) =>
    szakirany.szakirany.szakma.map((szakma) => ({
      nev: szakma.szakma.nev,
    }))
  );

  const retData = await prisma.alapadatok.update({
    data: {
      iskola_neve: iskola_neve,
      intezmeny_tipus: intezmeny_tipus,
      alapadatok_szakirany: {
        create: foundOrCreatedSzakirany.map((szakirany) => ({
          szakirany_id: szakirany.id,
        })),
      },
      alapadatok_szakma: {
        connectOrCreate: szakmak.map((szakma) => ({
          where: { nev: szakma.nev },
          create: {
            nev: szakma.nev,
          },
        })),
      },
    },
    where: {
      id: id,
    },
  });

  return retData;
}
