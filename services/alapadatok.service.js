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

  alapadatok_szakirany.map((szakirany) => {
    szakirany.szakirany.szakma.map((szakma) => {
      console.log(szakma.szakma);
    });
  });

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

  const szakmakNev = alapadatok_szakirany.flatMap((szakirany) =>
    szakirany.szakirany.szakma.map((szakma) => ({
      nev: szakma.szakma.nev,
    }))
  );

  const foundSzakmak = await prisma.szakma.findMany({
    where: {
      nev: {
        in: szakmakNev.map((szakma) => szakma.nev),
      },
    },
  });

  const foundOrCreatedSzakmak = szakmakNev.map((szakma) => {
    const existingSzakma = foundSzakmak.find((s) => s.nev === szakma.nev);
    if (existingSzakma) {
      return existingSzakma;
    }
    return prisma.szakma.create({
      data: {
        nev: szakma.nev,
      },
    });
  });

  const createdSzakmak = await Promise.all(foundOrCreatedSzakmak);

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
        create: createdSzakmak.map((szakma) => ({
          szakma_id: szakma.id,
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

  const szakmakNev = alapadatok_szakirany.flatMap((szakirany) =>
    szakirany.szakirany.szakma.map((szakma) => ({
      nev: szakma.szakma.nev,
    }))
  );

  const foundSzakmak = await prisma.szakma.findMany({
    where: {
      nev: {
        in: szakmakNev.map((szakma) => szakma.nev),
      },
    },
  });

  const foundOrCreatedSzakmak = szakmakNev.map((szakma) => {
    const existingSzakma = foundSzakmak.find((s) => s.nev === szakma.nev);
    if (existingSzakma) {
      return existingSzakma;
    }
    return prisma.szakma.create({
      data: {
        nev: szakma.nev,
      },
    });
  });

  const createdSzakmak = await Promise.all(foundOrCreatedSzakmak);

  // First, get existing relationships
  const existingData = await prisma.alapadatok.findUnique({
    where: { id: id },
    include: {
      alapadatok_szakirany: true,
      alapadatok_szakma: true,
    },
  });

  // Get existing szakirany and szakma IDs
  const existingSzakiranyIds = existingData.alapadatok_szakirany.map(rel => rel.szakirany_id);
  const existingSzakmaIds = existingData.alapadatok_szakma.map(rel => rel.szakma_id);

  // Filter out already connected szakirany
  const newSzakiranyConnections = foundOrCreatedSzakirany
    .filter(szakirany => !existingSzakiranyIds.includes(szakirany.id))
    .map(szakirany => ({ szakirany_id: szakirany.id }));

  // Filter out already connected szakma
  const newSzakmaConnections = createdSzakmak
    .filter(szakma => !existingSzakmaIds.includes(szakma.id))
    .map(szakma => ({ szakma_id: szakma.id }));

  const retData = await prisma.alapadatok.update({
    data: {
      iskola_neve: iskola_neve,
      intezmeny_tipus: intezmeny_tipus,
      ...(newSzakiranyConnections.length > 0 && {
        alapadatok_szakirany: {
          create: newSzakiranyConnections,
        },
      }),
      ...(newSzakmaConnections.length > 0 && {
        alapadatok_szakma: {
          create: newSzakmaConnections,
        },
      }),
    },
    where: {
      id: id,
    },
  });

  return retData;
}
