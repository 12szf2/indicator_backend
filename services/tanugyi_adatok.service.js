import { PrismaClient } from "../generated/prisma/client.js";

const prisma = new PrismaClient();

export async function getAll(alapadatok_id, ev) {
  const data = await prisma.tanugyi_Adatok.findMany({
    where: {
      alapadatok_id,
    },
  });

  return data;
}

export async function createMany(alapadatok_id, data) {
  await prisma.tanugyi_Adatok.deleteMany({
    where: {
      alapadatok_id: alapadatok_id,
    },
  });

  let year = new Date().getFullYear();
  const month = new Date().getMonth();

  if (month < 6) {
    year -= 1;
  }

  data.map((item) => {
    item.alapadatok_id = alapadatok_id;
    item.createBy = "cc2c2d68-5b38-4f9b-9e4f-1a3c9a0fb2a4";
    item.tanev_kezdete = year;
  });

  data.forEach((element) => {
    delete element.__index;
    delete element.__errors;
  });

  const createdData = await prisma.tanugyi_Adatok.createMany({
    data,
  });

  return createdData;
}
