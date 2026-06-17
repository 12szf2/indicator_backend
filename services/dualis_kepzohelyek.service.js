import { ServicePattern } from "../utils/ServicePattern.js";

const pattern = new ServicePattern('dualisKepzohelyek', 'id', {
  alapadatok: true,
});

export async function getAllByAlapadatok(alapadatokId, tanev) {
  return await pattern.findByAlapadatokIdAndYear(alapadatokId, tanev);
}

export async function create(
  alapadatok_id,
  tanev_kezdete,
  kepzohely_neve,
  egyuttmukodes_formaja,
  egyuttmukodes_szama,
  egyeb_rendezvenyek
) {
  return await pattern.create({
    alapadatok_id,
    tanev_kezdete: parseInt(tanev_kezdete),
    kepzohely_neve,
    egyuttmukodes_formaja,
    egyuttmukodes_szama,
    egyeb_rendezvenyek,
  });
}

export async function update(
  id,
  alapadatok_id,
  tanev_kezdete,
  kepzohely_neve,
  egyuttmukodes_formaja,
  egyuttmukodes_szama,
  egyeb_rendezvenyek
) {
  return await pattern.update(parseInt(id), {
    alapadatok_id,
    tanev_kezdete: parseInt(tanev_kezdete),
    kepzohely_neve,
    egyuttmukodes_formaja,
    egyuttmukodes_szama,
    egyeb_rendezvenyek,
  });
}

export async function deleteById(id) {
  return await pattern.delete(parseInt(id));
}
