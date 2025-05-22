import { PrismaClient } from "../generated/prisma/client.js";

const prisma = new PrismaClient();

export async function getAll(alapadatok_id, ev) {
  const data = await prisma.tanugyi_Adatok.findMany({
    where: {
      alapadatok_id,
      createAt: {
        contains: ev,
      },
    },
  });

  return data;
}

export async function createMany(alapadatok_id, data) {
  await prisma.tanugyi_Adatok.deleteMany({
    where: {
      alapadatok_id: alapadatok_id,
      createAt: {
        contains: year,
      },
    },
  });

  const createdData = await prisma.tanugyi_Adatok.createMany({
    data,
  });

  return createdData;
}
