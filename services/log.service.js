import { PrismaClient } from "../generated/prisma/client.js";

const prisma = new PrismaClient();

export async function logRequest(logData) {
  await prisma.log.create({
    data: logData,
  });
}

export async function getLogs() {
  return await prisma.log.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
}
export async function getLogById(user_id) {
  return await prisma.log.findUnique({
    where: {
      userId: user_id,
    },
  });
}
