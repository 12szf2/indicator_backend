import { ServicePattern } from "../utils/ServicePattern.js";

const pattern = new ServicePattern('elegedettsegMeres', 'id', {
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
  szulok_elegedettsege,
  oktatok_elegedettsege,
  tanulok_elegedettsege,
  dualis_kepzohely_elegedettsege,
  munkaero_piac_elegedettsege
) {
  return await pattern.create({
    alapadatok_id,
    tanev_kezdete: parseInt(tanev_kezdete),
    szulok_elegedettsege: parseFloat(szulok_elegedettsege),
    oktatok_elegedettsege: parseFloat(oktatok_elegedettsege),
    tanulok_elegedettsege: parseFloat(tanulok_elegedettsege),
    dualis_kepzohely_elegedettsege: parseFloat(dualis_kepzohely_elegedettsege),
    munkaero_piac_elegedettsege: parseFloat(munkaero_piac_elegedettsege),
  });
}

export async function update(
  id,
  alapadatok_id,
  tanev_kezdete,
  szulok_elegedettsege,
  oktatok_elegedettsege,
  tanulok_elegedettsege,
  dualis_kepzohely_elegedettsege,
  munkaero_piac_elegedettsege
) {
  return await pattern.update(parseInt(id), {
    alapadatok_id,
    tanev_kezdete: parseInt(tanev_kezdete),
    szulok_elegedettsege: parseFloat(szulok_elegedettsege),
    oktatok_elegedettsege: parseFloat(oktatok_elegedettsege),
    tanulok_elegedettsege: parseFloat(tanulok_elegedettsege),
    dualis_kepzohely_elegedettsege: parseFloat(dualis_kepzohely_elegedettsege),
    munkaero_piac_elegedettsege: parseFloat(munkaero_piac_elegedettsege),
  });
}

export async function deleteAllByAlapadatok(alapadatokId, tanev) {
  return await pattern.deleteByAlapadatokIdAndYear(alapadatokId, tanev);
}
