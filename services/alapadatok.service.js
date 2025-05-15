import { PrismaClient } from "../generated/prisma/client";

const prisma = new PrismaClient();

export async function getAll() {
  const data = await prisma.alapadatok.findMany();

  return data;
}

export async function getById(id) {
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
      felvettek_szama: {
        where: {
          AND: {
            tanev_kezdete: { lte: year },
            tanev_kezdete: { gte: year - 4 },
          },
        },
      },
      tanar_letszam: {
        where: {
          AND: {
            tanev_kezdete: { lte: year },
            tanev_kezdete: { gte: year - 4 },
          },
        },
      },
      tanulo_letszam: {
        where: {
          AND: {
            tanev_kezdete: { lte: year },
            tanev_kezdete: { gte: year - 4 },
          },
        },
      },
    },
  });
}
