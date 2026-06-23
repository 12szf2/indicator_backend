import { ServicePattern } from "../utils/ServicePattern.js";

const pattern = new ServicePattern('palya_orientacio', 'id', {
  alapadatok: true,
});

export async function getAllByAlapadatok(alapadatokId, tanev) {
  // If tanev is provided, filter by it, otherwise just return all for the school
  if (tanev) {
    return await pattern.findByAlapadatokIdAndYear(alapadatokId, tanev);
  } else {
    return await pattern.findAllByAlapadatok(alapadatokId);
  }
}

export async function create(
  alapadatok_id,
  tanev_kezdete,
  kategoria,
  tevekenyseg_neve,
  resztvevok_szama
) {
  return await pattern.create({
    alapadatok_id,
    tanev_kezdete: parseInt(tanev_kezdete),
    kategoria,
    tevekenyseg_neve,
    resztvevok_szama,
  });
}

export async function update(
  id,
  kategoria,
  tevekenyseg_neve,
  resztvevok_szama
) {
  const updateData = {};
  if (kategoria !== undefined) updateData.kategoria = kategoria;
  if (tevekenyseg_neve !== undefined) updateData.tevekenyseg_neve = tevekenyseg_neve;
  if (resztvevok_szama !== undefined) updateData.resztvevok_szama = resztvevok_szama;
  
  return await pattern.update(parseInt(id), updateData);
}

export async function deleteById(id) {
  return await pattern.delete(parseInt(id));
}
