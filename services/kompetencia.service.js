import { PrismaClient } from "../generated/prisma/client.js";

const prisma = new PrismaClient();

export async function getAll() {
  const data = await prisma.kompetencia.findMany();

  return data;
}

export async function getById(id) {
  const data = await prisma.kompetencia.findMany({
    where: {
      alapadatok_id: id,
    },
  });

  return data;
}

export async function create(
  alapadatok_id,
  tanev_kezdete,
  mat_orsz_p,
  szoveg_orsz_p,
  mat_int_p,
  szoveg_int_p,
  kepzes_forma
) {
  const data = await prisma.kompetencia.create({
    data: {
      alapadatok_id: alapadatok_id,
      tanev_kezdete: Number(tanev_kezdete),
      mat_int_p,
      mat_orsz_p,
      szoveg_int_p,
      szoveg_orsz_p,
      kepzes_forma,
    },
  });

  return data;
}
