import { ServicePattern } from "../utils/ServicePattern.js";

const pattern = new ServicePattern('szakmaiVizsgaEredmenyek', 'id', {
  alapadatok: true,
  szakirany: true,
  szakma: true,
});

export async function getAll(tanev) {
  return await pattern.findAllByYear(tanev);
}

export async function getAllByAlapadatok(alapadatokId, tanev) {
  return await pattern.findByAlapadatokIdAndYear(alapadatokId, tanev);
}

export async function create(
  szakirany_id,
  szakma_id,
  alapadatok_id,
  tanev_kezdete,
  vizsgara_bocsathatoak_szama,
  sikeres_vizsgazok_szama
) {
  return await pattern.create({
    szakirany_id,
    szakma_id,
    alapadatok_id,
    tanev_kezdete: parseInt(tanev_kezdete),
    vizsgara_bocsathatoak_szama: parseInt(vizsgara_bocsathatoak_szama),
    sikeres_vizsgazok_szama: parseInt(sikeres_vizsgazok_szama),
  });
}

export async function update(
  id,
  szakirany_id,
  szakma_id,
  alapadatok_id,
  tanev_kezdete,
  vizsgara_bocsathatoak_szama,
  sikeres_vizsgazok_szama
) {
  return await pattern.update(id, {
    szakirany_id,
    szakma_id,
    alapadatok_id,
    tanev_kezdete: parseInt(tanev_kezdete),
    vizsgara_bocsathatoak_szama: parseInt(vizsgara_bocsathatoak_szama),
    sikeres_vizsgazok_szama: parseInt(sikeres_vizsgazok_szama),
  });
}

export async function deleteAllByAlapadatok(alapadatokId, tanev) {
  return await pattern.deleteByAlapadatokIdAndYear(alapadatokId, tanev);
}
