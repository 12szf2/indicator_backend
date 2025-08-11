import prisma from "../utils/prisma.js";
import { ServicePattern, CACHE_TTL } from "../utils/ServicePattern.js";

// Initialize ServicePattern for intezmenyiNeveltseg with relations
const pattern = new ServicePattern(
  "intezmenyiNeveltseg", 
  "id", 
  {
    alapadatok: true,
  }
);

export async function getAll(tanev) {
  return await pattern.serviceCache.get(
    'all_with_year_ordered',
    async () => {
      const { firstYear, lastYear } = pattern.getYearRange(tanev);
      return await prisma.intezmenyiNeveltseg.findMany({
        where: {
          tanev_kezdete: { gte: firstYear, lte: lastYear },
        },
        orderBy: { tanev_kezdete: "asc" },
        include: pattern.include,
      });
    },
    CACHE_TTL.SHORT,
    tanev
  );
}

export async function getAllByAlapadatok(alapadatokId, tanev) {
  return await pattern.serviceCache.get(
    'alapadatok_with_year_ordered',
    async () => {
      const { firstYear, lastYear } = pattern.getYearRange(tanev);
      return await prisma.intezmenyiNeveltseg.findMany({
        where: {
          alapadatok_id: alapadatokId,
          tanev_kezdete: { gte: firstYear, lte: lastYear },
        },
        orderBy: { tanev_kezdete: "asc" },
        include: pattern.include,
      });
    },
    CACHE_TTL.SHORT,
    alapadatokId,
    tanev
  );
}

export async function create(
  alapadatok_id,
  tanev_kezdete,
  alapfoku_oktatasban_reszvetel,
  kozepfoku_oktatasban_reszvetel,
  felsofoku_oktatasban_reszvetel,
  osszesen
) {
  return await pattern.create({
    alapadatok_id,
    tanev_kezdete: parseInt(tanev_kezdete),
    alapfoku_oktatasban_reszvetel: parseInt(alapfoku_oktatasban_reszvetel),
    kozepfoku_oktatasban_reszvetel: parseInt(kozepfoku_oktatasban_reszvetel),
    felsofoku_oktatasban_reszvetel: parseInt(felsofoku_oktatasban_reszvetel),
    osszesen: parseInt(osszesen),
  });
}

export async function update(
  id,
  alapadatok_id,
  tanev_kezdete,
  alapfoku_oktatasban_reszvetel,
  kozepfoku_oktatasban_reszvetel,
  felsofoku_oktatasban_reszvetel,
  osszesen
) {
  return await pattern.update(id, {
    alapadatok_id,
    tanev_kezdete: parseInt(tanev_kezdete),
    alapfoku_oktatasban_reszvetel: parseInt(alapfoku_oktatasban_reszvetel),
    kozepfoku_oktatasban_reszvetel: parseInt(kozepfoku_oktatasban_reszvetel),
    felsofoku_oktatasban_reszvetel: parseInt(felsofoku_oktatasban_reszvetel),
    osszesen: parseInt(osszesen),
  });
}

export async function deleteAllByAlapadatok(alapadatokId, tanev) {
  return await pattern.deleteByAlapadatokIdAndYear(alapadatokId, tanev);
}