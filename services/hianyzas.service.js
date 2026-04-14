import prisma from "../utils/prisma.js";
import { ServicePattern, CACHE_TTL } from "../utils/ServicePattern.js";

const pattern = new ServicePattern("hianyzas", "id", {
  alapadatok: true,
});

export async function getAll(tanev) {
  return await pattern.serviceCache.get(
    'all_with_year_ordered',
    async () => {
      const { firstYear, lastYear } = pattern.getYearRange(tanev);
      return await prisma.hianyzas.findMany({
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
      return await prisma.hianyzas.findMany({
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
    atlag,
    felev,
    igazolatlan,
    igazolt,
    intezmeny_tipusa,
    jogviszony
) {
    return await pattern.create({
        alapadatok_id,
        tanev_kezdete: parseInt(tanev_kezdete),
        atlag: parseInt(atlag),
        felev: felev,
        igazolatlan: parseInt(igazolatlan),
        igazolt: parseInt(igazolt),
        intezmeny_tipus: intezmeny_tipusa,
        jogviszony,
    });
}

export async function update(
    id,
    alapadatok_id,
    tanev_kezdete,
    atlag,
    felev,
    igazolatlan,
    igazolt,
    intezmeny_tipusa,
    jogviszony
) {
    return await pattern.update(id, {
        alapadatok_id,
        tanev_kezdete: parseInt(tanev_kezdete),
        atlag: parseInt(atlag),
        felev: felev,
        igazolatlan: parseInt(igazolatlan),
        igazolt: parseInt(igazolt),
        intezmeny_tipus: intezmeny_tipusa,
        jogviszony,
    });
}

export async function deleteAllByAlapadatok(alapadatokId, tanev) {
  return await pattern.deleteByAlapadatokIdAndYear(alapadatokId, tanev);
}
