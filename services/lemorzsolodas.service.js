import prisma from "../utils/prisma.js";
import { ServicePattern, CACHE_TTL } from "../utils/ServicePattern.js";

// Initialize ServicePattern for lemorzsolodas with relations
const pattern = new ServicePattern(
  "lemorzsolodas", 
  "id", 
  {
    alapadatok: true,
    szakirany: true,
    szakma: true,
  },
  {} // no select restrictions
);

export async function getAll(tanev) {
  // Use custom cache operation for ordering by tanev_kezdete
  return await pattern.serviceCache.get(
    'all_with_year_ordered',
    async () => {
      const { firstYear, lastYear } = pattern.getYearRange(tanev);
      return await prisma.lemorzsolodas.findMany({
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
  // Use custom cache operation for ordering by tanev_kezdete
  return await pattern.serviceCache.get(
    'alapadatok_with_year_ordered',
    async () => {
      const { firstYear, lastYear } = pattern.getYearRange(tanev);
      return await prisma.lemorzsolodas.findMany({
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
  lemorzsolodo_tanulok_szama,
  oktober_es_belepett_tanulok_szama
) {
  return await pattern.create({
    szakirany_id,
    szakma_id,
    alapadatok_id,
    tanev_kezdete: parseInt(tanev_kezdete),
    lemorzsolodo_tanulok_szama: parseInt(lemorzsolodo_tanulok_szama),
    oktober_es_belepett_tanulok_szama: parseInt(oktober_es_belepett_tanulok_szama),
  });
}

export async function update(
  id,
  szakirany_id,
  szakma_id,
  alapadatok_id,
  tanev_kezdete,
  lemorzsolodo_tanulok_szama,
  oktober_es_belepett_tanulok_szama
) {
  return await pattern.update(parseInt(id), {
    szakirany_id,
    szakma_id,
    alapadatok_id,
    tanev_kezdete: parseInt(tanev_kezdete),
    lemorzsolodo_tanulok_szama: parseInt(lemorzsolodo_tanulok_szama),
    oktober_es_belepett_tanulok_szama: parseInt(oktober_es_belepett_tanulok_szama),
  });
}

export async function deleteAllByAlapadatok(alapadatokId, tanev) {
  return await pattern.deleteByAlapadatokIdAndYear(alapadatokId, tanev);
}
