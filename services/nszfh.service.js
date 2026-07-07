import { ServicePattern } from "../utils/ServicePattern.js";

const pattern = new ServicePattern('nszfhMeresek', 'id', {
  alapadatok: true,
});

export async function getAll(tanev) {
  return await pattern.findAllByYear(tanev);
}

export async function getAllByAlapadatok(alapadatokId, tanev) {
  return await pattern.findByAlapadatokIdAndYear(alapadatokId, tanev);
}

export async function create(data) {
  return await pattern.create(data);
}

export async function update(id, data) {
  return await pattern.update(id, data);
}

export async function deleteAllByAlapadatok(alapadatokId, tanev) {
  return await pattern.deleteByAlapadatokIdAndYear(alapadatokId, tanev);
}