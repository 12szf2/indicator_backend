import { ServicePattern } from "../utils/ServicePattern.js";

const pattern = new ServicePattern('nyelvvizsgak_szama', 'id', {
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
    osztaly: data.osztaly,
    kozepfoku_angol: parseInt(data.kozepfoku_angol || 0),
    felsofoku_angol: parseInt(data.felsofoku_angol || 0),
    kozepfoku_nemet: parseInt(data.kozepfoku_nemet || 0),
    felsofoku_nemet: parseInt(data.felsofoku_nemet || 0),
    egyeb_nyelv: data.egyeb_nyelv || "",
    egyeb_fo: parseInt(data.egyeb_fo || 0)
  });
}

export async function update(id, data) {
  const updateData = {};
  
  if (data.osztaly !== undefined) updateData.osztaly = data.osztaly;
  if (data.kozepfoku_angol !== undefined) updateData.kozepfoku_angol = parseInt(data.kozepfoku_angol);
  if (data.felsofoku_angol !== undefined) updateData.felsofoku_angol = parseInt(data.felsofoku_angol);
  if (data.kozepfoku_nemet !== undefined) updateData.kozepfoku_nemet = parseInt(data.kozepfoku_nemet);
  if (data.felsofoku_nemet !== undefined) updateData.felsofoku_nemet = parseInt(data.felsofoku_nemet);
  if (data.egyeb_nyelv !== undefined) updateData.egyeb_nyelv = data.egyeb_nyelv;
  if (data.egyeb_fo !== undefined) updateData.egyeb_fo = parseInt(data.egyeb_fo);
  
  return await pattern.update(parseInt(id), updateData);
}

export async function deleteById(id) {
  return await pattern.delete(parseInt(id));
}
