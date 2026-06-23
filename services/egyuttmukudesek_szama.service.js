import { ServicePattern } from "../utils/ServicePattern.js";

const pattern = new ServicePattern('egyuttmukudesek_szama', 'id', {
  alapadatok: true,
});

export async function getAllByAlapadatok(alapadatokId, tanev) {
  if (tanev) {
    return await pattern.findByAlapadatokIdAndYear(alapadatokId, tanev);
  } else {
    return await pattern.findAllByAlapadatok(alapadatokId);
  }
}

export async function create(data) {
  return await pattern.create({
    alapadatok_id: data.alapadatok_id,
    tanev_kezdete: parseInt(data.tanev_kezdete),
    tablazat_szam: data.tablazat_szam !== undefined ? parseInt(data.tablazat_szam) : 1,
    felsooktatasi_intezmeny_neve: data.felsooktatasi_intezmeny_neve || null,
    egyuttmukodes_formaja: data.egyuttmukodes_formaja || null,
    erintett_evfolyam: data.erintett_evfolyam || null,
    erintett_tanulok_szama: data.erintett_tanulok_szama !== undefined && data.erintett_tanulok_szama !== null ? parseInt(data.erintett_tanulok_szama) : null,
    felsooktataba_lepo_szama: data.felsooktataba_lepo_szama !== undefined && data.felsooktataba_lepo_szama !== null ? parseInt(data.felsooktataba_lepo_szama) : null,
    vegzos_technikumi_szama: data.vegzos_technikumi_szama !== undefined && data.vegzos_technikumi_szama !== null ? parseInt(data.vegzos_technikumi_szama) : null,
    tovabbtanulok_aranya: data.tovabbtanulok_aranya || null
  });
}

export async function update(id, data) {
  const updateData = {};
  
  if (data.tablazat_szam !== undefined) updateData.tablazat_szam = parseInt(data.tablazat_szam);
  if (data.felsooktatasi_intezmeny_neve !== undefined) updateData.felsooktatasi_intezmeny_neve = data.felsooktatasi_intezmeny_neve;
  if (data.egyuttmukodes_formaja !== undefined) updateData.egyuttmukodes_formaja = data.egyuttmukodes_formaja;
  if (data.erintett_evfolyam !== undefined) updateData.erintett_evfolyam = data.erintett_evfolyam;
  if (data.erintett_tanulok_szama !== undefined) updateData.erintett_tanulok_szama = data.erintett_tanulok_szama === null ? null : parseInt(data.erintett_tanulok_szama);
  if (data.felsooktataba_lepo_szama !== undefined) updateData.felsooktataba_lepo_szama = data.felsooktataba_lepo_szama === null ? null : parseInt(data.felsooktataba_lepo_szama);
  if (data.vegzos_technikumi_szama !== undefined) updateData.vegzos_technikumi_szama = data.vegzos_technikumi_szama === null ? null : parseInt(data.vegzos_technikumi_szama);
  if (data.tovabbtanulok_aranya !== undefined) updateData.tovabbtanulok_aranya = data.tovabbtanulok_aranya;
  
  return await pattern.update(parseInt(id), updateData);
}

export async function deleteById(id) {
  return await pattern.delete(parseInt(id));
}
