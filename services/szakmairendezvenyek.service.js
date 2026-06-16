import { ServicePattern } from "../utils/ServicePattern.js";

const pattern = new ServicePattern('szakmaiRendezvenyek', 'id', {
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
  szakmai_bemutatok_neve,
  szakmai_bemutatok_letszam,
  konferenciak_neve,
  konferenciak_letszam,
  egyeb_rendezvenyek_neve,
  egyeb_rendezvenyek_letszam
) {
  return await pattern.create({
    alapadatok_id,
    tanev_kezdete: parseInt(tanev_kezdete),
    szakmai_bemutatok_neve,
    szakmai_bemutatok_letszam: szakmai_bemutatok_letszam !== null ? parseInt(szakmai_bemutatok_letszam) : null,
    konferenciak_neve,
    konferenciak_letszam: konferenciak_letszam !== null ? parseInt(konferenciak_letszam) : null,
    egyeb_rendezvenyek_neve,
    egyeb_rendezvenyek_letszam: egyeb_rendezvenyek_letszam !== null ? parseInt(egyeb_rendezvenyek_letszam) : null,
  });
}

export async function update(
  id,
  alapadatok_id,
  tanev_kezdete,
  szakmai_bemutatok_neve,
  szakmai_bemutatok_letszam,
  konferenciak_neve,
  konferenciak_letszam,
  egyeb_rendezvenyek_neve,
  egyeb_rendezvenyek_letszam
) {
  return await pattern.update(id, {
    alapadatok_id,
    tanev_kezdete: parseInt(tanev_kezdete),
    szakmai_bemutatok_neve,
    szakmai_bemutatok_letszam: szakmai_bemutatok_letszam !== null ? parseInt(szakmai_bemutatok_letszam) : null,
    konferenciak_neve,
    konferenciak_letszam: konferenciak_letszam !== null ? parseInt(konferenciak_letszam) : null,
    egyeb_rendezvenyek_neve,
    egyeb_rendezvenyek_letszam: egyeb_rendezvenyek_letszam !== null ? parseInt(egyeb_rendezvenyek_letszam) : null,
  });
}

export async function remove(id) {
  return await pattern.delete(id);
}
