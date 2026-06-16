import { PrismaClient } from './generated/prisma/index.js';
const prisma = new PrismaClient();

async function check() {
  const data = await prisma.vizsgaEredmenyek.findMany();
  console.log(JSON.stringify(data, null, 2));
}

check().catch(console.error).finally(() => prisma.$disconnect());
