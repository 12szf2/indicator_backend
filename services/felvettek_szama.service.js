import { PrismaClient } from "../generated/prisma/client.js";
const prisma = new PrismaClient();

export async function create(
  alapadatok_id,
  tanev_kezdete,
  szakmaNev,
  szakiranyNev,
  jelentkezo_letszam,
  felveheto_letszam,
  felvett_letszam
) {
  const szakma = await prisma.szakma.findUnique({
    where: {
      szakmaNev,
    },
  });

  if (!szakma) {
    throw new Error(`Szakma with name ${szakmaNev} not found`);
  }

  const szakirany = await prisma.szakirany.findUnique({
    where: {
      szakiranyNev,
    },
  });

  if (!szakirany) {
    throw new Error(`Szakirany with name ${szakiranyNev} not found`);
  }

  return await prisma.felvettek_Szama.create({
    data: {
      alapadatok_id,
      tanev_kezdete,
      szakma_id: szakma.id,
      szakiranyId: szakirany.id,
      jelentkezo_letszam,
      felveheto_letszam,
      felvett_letszam,
    },
  });
}

export async function getAll() {
  return await prisma.felvettek_Szama.findMany();
}

export async function getById(alapadatok_id) {
  return await prisma.felvettek_Szama.findMany({
    where: {
      alapadatok_id,
    },
    include: {
      szakma: true,
      szakirany: true,
    },
  });
}
