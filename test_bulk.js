import { bulkSave } from './services/tanulo_letszam.service.js';
import prisma from './utils/prisma.js';

async function test() {
  try {
    const school = await prisma.alapadatok.findFirst();
    const result = await bulkSave(school.id, [
      {
        letszam: 10,
        jogv_tipus: 0,
        szakirany: "Nincs meghatározva",
        szakma: null,
        tanev_kezdete: 2023
      }
    ]);
    console.log("Success:", result);
  } catch (e) {
    console.error("Failed:", e);
  } finally {
    process.exit(0);
  }
}
test();
