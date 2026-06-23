import { ServicePattern } from "../utils/ServicePattern.js";

const pattern = new ServicePattern('projektek', 'id', {
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
  agazat_szakma,
  projekthetek_neve,
  projekthetek_ora,
  projektnapok_neve,
  projektnapok_ora
) {
  return await pattern.create({
    alapadatok_id,
    tanev_kezdete: parseInt(tanev_kezdete),
    agazat_szakma,
    projekthetek_neve,
    projekthetek_ora,
    projektnapok_neve,
    projektnapok_ora,
  });
}

export async function update(
  id,
  projekthetek_neve,
  projekthetek_ora,
  projektnapok_neve,
  projektnapok_ora
) {
  // We only update the fields that the user sends for PUT
  // Note: the pattern.update needs the full object or just the fields we want to update.
  // The Prisma update will only update provided fields.
  const updateData = {};
  if (projekthetek_neve !== undefined) updateData.projekthetek_neve = projekthetek_neve;
  if (projekthetek_ora !== undefined) updateData.projekthetek_ora = projekthetek_ora;
  if (projektnapok_neve !== undefined) updateData.projektnapok_neve = projektnapok_neve;
  if (projektnapok_ora !== undefined) updateData.projektnapok_ora = projektnapok_ora;
  
  return await pattern.update(parseInt(id), updateData);
}

export async function deleteById(id) {
  return await pattern.delete(parseInt(id));
}
