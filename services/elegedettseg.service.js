import prisma from "../utils/prisma.js";
import { ServicePattern, CACHE_TTL } from "../utils/ServicePattern.js";

// Initialize ServicePattern for elegedettseg with relations
const pattern = new ServicePattern(
  "elegedettseg", 
  "id", 
  {
    alapadatok: true,
    szakirany: true,
    szakma: true,
  }
);

export async function getAll(tanev) {
  return await pattern.serviceCache.get(
    'all_with_year_ordered',
    async () => {
      const { firstYear, lastYear } = pattern.getYearRange(tanev);
      return await prisma.elegedettseg.findMany({
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
      return await prisma.elegedettseg.findMany({
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
  szakirany_id,
  szakma_id,
  alapadatok_id,
  tanev_kezdete,
  munkaadok_elegedettsege
) {
  return await pattern.create({
    szakirany_id,
    szakma_id,
    alapadatok_id,
    tanev_kezdete: parseInt(tanev_kezdete),
    munkaadok_elegedettsege,
  });
}

export async function update(
  id,
  szakirany_id,
  szakma_id,
  alapadatok_id,
  tanev_kezdete,
  munkaadok_elegedettsege
) {
  return await pattern.update(parseInt(id), {
    szakirany_id,
    szakma_id,
    alapadatok_id,
    tanev_kezdete: parseInt(tanev_kezdete),
    munkaadok_elegedettsege,
  });
}

export async function deleteAllByAlapadatok(alapadatokId, tanev) {
  return await pattern.deleteByAlapadatokIdAndYear(alapadatokId, tanev);
}