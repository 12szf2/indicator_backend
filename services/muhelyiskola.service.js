import { ServicePattern } from "../utils/ServicePattern.js";

const pattern = new ServicePattern('muhelyiskola', 'id', {
  alapadatok: true,
});

export async function getAll(tanev) {
  return await pattern.findAllByYear(tanev);
}

export async function getAllByAlapadatok(alapadatokId, tanev) {
  return await pattern.findByAlapadatokIdAndYear(alapadatokId, tanev);
}

export async function create(
  alapadatok_id,
  tanev_kezdete,
  reszszakmat_szerezok_szama,
  muhelyiskola_tanuloi_osszletszam
) {
  return await pattern.create({
    alapadatok_id,
    tanev_kezdete: parseInt(tanev_kezdete),
    reszszakmat_szerezok_szama: parseInt(reszszakmat_szerezok_szama),
    muhelyiskola_tanuloi_osszletszam: parseInt(muhelyiskola_tanuloi_osszletszam),
  });
}

export async function update(
  id,
  alapadatok_id,
  tanev_kezdete,
  reszszakmat_szerezok_szama,
  muhelyiskola_tanuloi_osszletszam
) {
  return await pattern.update(id, {
    alapadatok_id,
    tanev_kezdete: parseInt(tanev_kezdete),
    reszszakmat_szerezok_szama: parseInt(reszszakmat_szerezok_szama),
    muhelyiskola_tanuloi_osszletszam: parseInt(muhelyiskola_tanuloi_osszletszam),
  });
}

export async function deleteAllByAlapadatok(alapadatokId, tanev) {
  return await pattern.deleteByAlapadatokIdAndYear(alapadatokId, tanev);
}
