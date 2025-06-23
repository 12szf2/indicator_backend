import { PrismaClient } from "../generated/prisma/client.js";

const prisma = new PrismaClient();

export async function getAll() {
  const data = await prisma.tableList.findMany();

  return data;
}

export async function create(name, isAvailable) {
  const newTable = await prisma.tableList.create({
    data: {
      name,
      isAvailable,
    },
  });

  return newTable;
}

export async function update(id, name, isAvailable) {
  const updatedTable = await prisma.tableList.update({
    where: { id: Number(id) },
    data: {
      name,
      isAvailable,
    },
  });

  return updatedTable;
}
