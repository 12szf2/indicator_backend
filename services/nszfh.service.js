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

export async function create(
  alapadatok_id,
  tanev_kezdete,
  kat_1_mat_bemeneti,
  kat_1_mat_kimeneti,
  kat_1_szoveg_bemeneti,
  kat_1_szoveg_kimeneti,
  kat_2_mat_bemeneti,
  kat_2_mat_kimeneti,
  kat_2_szoveg_bemeneti,
  kat_2_szoveg_kimeneti,
  kat_3_mat_bemeneti,
  kat_3_mat_kimeneti,
  kat_3_szoveg_bemeneti,
  kat_3_szoveg_kimeneti,
  kat_4_mat_bemeneti,
  kat_4_mat_kimeneti,
  kat_4_szoveg_bemeneti,
  kat_4_szoveg_kimeneti,
  kat_5_mat_bemeneti,
  kat_5_mat_kimeneti,
  kat_5_szoveg_bemeneti,
  kat_5_szoveg_kimeneti
) {
  return await pattern.create({
    alapadatok_id,
    tanev_kezdete,
    kat_1_mat_bemeneti,
    kat_1_mat_kimeneti,
    kat_1_szoveg_bemeneti,
    kat_1_szoveg_kimeneti,
    kat_2_mat_bemeneti,
    kat_2_mat_kimeneti,
    kat_2_szoveg_bemeneti,
    kat_2_szoveg_kimeneti,
    kat_3_mat_bemeneti,
    kat_3_mat_kimeneti,
    kat_3_szoveg_bemeneti,
    kat_3_szoveg_kimeneti,
    kat_4_mat_bemeneti,
    kat_4_mat_kimeneti,
    kat_4_szoveg_bemeneti,
    kat_4_szoveg_kimeneti,
    kat_5_mat_bemeneti,
    kat_5_mat_kimeneti,
    kat_5_szoveg_bemeneti,
    kat_5_szoveg_kimeneti,
  });
}

export async function update(
  id,
  alapadatok_id,
  tanev_kezdete,
  kat_1_mat_bemeneti,
  kat_1_mat_kimeneti,
  kat_1_szoveg_bemeneti,
  kat_1_szoveg_kimeneti,
  kat_2_mat_bemeneti,
  kat_2_mat_kimeneti,
  kat_2_szoveg_bemeneti,
  kat_2_szoveg_kimeneti,
  kat_3_mat_bemeneti,
  kat_3_mat_kimeneti,
  kat_3_szoveg_bemeneti,
  kat_3_szoveg_kimeneti,
  kat_4_mat_bemeneti,
  kat_4_mat_kimeneti,
  kat_4_szoveg_bemeneti,
  kat_4_szoveg_kimeneti,
  kat_5_mat_bemeneti,
  kat_5_mat_kimeneti,
  kat_5_szoveg_bemeneti,
  kat_5_szoveg_kimeneti
) {
  return await pattern.update(id, {
    alapadatok_id,
    tanev_kezdete,
    kat_1_mat_bemeneti,
    kat_1_mat_kimeneti,
    kat_1_szoveg_bemeneti,
    kat_1_szoveg_kimeneti,
    kat_2_mat_bemeneti,
    kat_2_mat_kimeneti,
    kat_2_szoveg_bemeneti,
    kat_2_szoveg_kimeneti,
    kat_3_mat_bemeneti,
    kat_3_mat_kimeneti,
    kat_3_szoveg_bemeneti,
    kat_3_szoveg_kimeneti,
    kat_4_mat_bemeneti,
    kat_4_mat_kimeneti,
    kat_4_szoveg_bemeneti,
    kat_4_szoveg_kimeneti,
    kat_5_mat_bemeneti,
    kat_5_mat_kimeneti,
    kat_5_szoveg_bemeneti,
    kat_5_szoveg_kimeneti,
  });
}

export async function deleteAllByAlapadatok(alapadatokId, tanev) {
  return await pattern.deleteByAlapadatokIdAndYear(alapadatokId, tanev);
}