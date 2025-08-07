import prisma from "../utils/prisma.js";
import * as cache from "../utils/cache.js";
import {
  ServiceCache,
  CACHE_TTL,
  withPerformanceMonitoring,
} from "../utils/serviceUtils.js";

// Initialize service cache
const serviceCache = new ServiceCache("alapadatok");

// Enhanced cache-first approach
export const getAll = withPerformanceMonitoring(
  "alapadatok.getAll",
  async function () {
    return serviceCache.get(
      "all",
      async () => {
        return await prisma.alapadatok.findMany({
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
      },
      CACHE_TTL.MEDIUM // 10 minutes for this complex query
    );
  }
);

export const getById = withPerformanceMonitoring(
  "alapadatok.getById",
  async function (id) {
    return serviceCache.get(
      "id",
      async () => {
        return await prisma.alapadatok.findUnique({
          where: { id },
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
      },
      CACHE_TTL.LONG, // 30 minutes for detailed view
      id
    );
  }
);

export const add = withPerformanceMonitoring(
  "alapadatok.add",
  async function (iskola_neve, intezmeny_tipus, alapadatok_szakirany = []) {
    // Smart cache invalidation
    serviceCache.invalidateRelated("create");

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
);

export const update = withPerformanceMonitoring(
  "alapadatok.update",
  async function (id, iskola_neve, intezmeny_tipus, alapadatok_szakirany) {
    // Smart cache invalidation
    serviceCache.invalidateRelated("update", id);

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
);
