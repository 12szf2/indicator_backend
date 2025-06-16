import { PrismaClient } from "../generated/prisma/client.js";

const prisma = new PrismaClient();

export async function getAll() {
  let year = new Date().getFullYear();
  const month = new Date().getMonth();

  if (month < 6) {
    year -= 1;
  }

  const data = await prisma.tanulo_Letszam.findMany({
    where: {
      AND: {
        tanev_kezdete: { lte: year },
        tanev_kezdete: { gte: year - 4 },
      },
    },
  });

  return data;
}

export async function getById(id) {
  let year = new Date().getFullYear();
  const month = new Date().getMonth();

  if (month < 6) {
    year -= 1;
  }

  const data = await prisma.tanulo_Letszam.findMany({
    where: {
      AND: {
        tanev_kezdete: { lte: year },
        tanev_kezdete: { gte: year - 4 },
        alapadatok_id: id,
      },
    },
    include: {
      szakirany: true,
      szakma: true,
    },
  });

  return data;
}

export async function create(
  letszam,
  alapadatok_id,
  jogv_tipus,
  szakirany,
  tanev_kezdete
) {
  await deleteMany(alapadatok_id, tanev_kezdete);

  const szakiranyData = await prisma.szakirany.findUnique({
    where: {
      nev: szakirany,
    },
  });

  const szakmaData = await prisma.szakma.findUnique({
    where: {
      nev: "Na",
    },
  });

  const ret = await prisma.tanulo_Letszam.create({
    data: {
      tanev_kezdete: Number(tanev_kezdete),
      szakirany_id: szakiranyData.id,
      szakma_id: szakmaData.id,
      alapadatok_id: alapadatok_id,
      jogv_tipus: Number(jogv_tipus),
      letszam: Number(letszam),
    },
  });

  return ret;
}

export async function deleteMany(alapadatok_id, year) {
  const ret = await prisma.tanulo_Letszam.deleteMany({
    where: {
      alapadatok_id,
      tanev_kezdete: Number(year),
    },
  });

  return ret;
}
