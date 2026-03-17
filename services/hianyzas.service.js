import { ServicePattern } from "../utils/ServicePattern.js";

const pattern = new ServicePattern("hianyzas", "id", {
  alapadatok: true,
});

export async function getAllByAlapadatok(alapadatokId, tanev_kezdete) {
    return await pattern.findByAlapadatokIdAndYear(alapadatokId, tanev_kezdete);
}

export async function create(
    alapadatok_id,
    tanev_kezdete,
    atalg,
    felev,
    igazolatlan,
    igazolt,
    intezmeny_tipusa,
    jogviszony
) {
    return await pattern.create({
        alapadatok_id,
        tanev_kezdete: parseInt(tanev_kezdete),
        atalg: parseInt(atalg),
        felev: felev,
        igazolatlan: parseInt(igazolatlan),
        igazolt: parseInt(igazolt),
        intezmeny_tipusa,
        jogviszony,
    });
}

export async function update(
    id,
    tanev_kezdete,
    atalg,
