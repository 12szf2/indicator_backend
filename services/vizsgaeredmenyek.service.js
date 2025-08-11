import { ServicePattern } from "../utils/ServicePattern.js";

const pattern = new ServicePattern('vizsgaEredmenyek', 'id', {
  alapadatok: true,
  szakirany: true,
  szakma: true,
});

export async function getAll(tanev) {
  return await pattern.findAllByYear(tanev);
}

export async function getAllByAlapadatok(alapadatokId, tanev) {
  return await pattern.findByAlapadatokIdAndYear(alapadatokId, tanev);
}

export async function create(
  szakirany_id,
  szakma_id,
  alapadatok_id,
  tanev_kezdete,
  szakmai_vizsga_eredmeny,
  agazati_alapvizsga_eredmeny,
  magyar_nyelv_eretsegi_eredmeny,
  matematika_eretsegi_eredmeny,
  tortenelem_eretsegi_eredmeny,
  angol_nyelv_eretsegi_eredmeny,
  agazati_szakmai_eretsegi_eredmeny
) {
  return await pattern.create({
    szakirany_id,
    szakma_id,
    alapadatok_id,
    tanev_kezdete: parseInt(tanev_kezdete),
    szakmai_vizsga_eredmeny: parseFloat(szakmai_vizsga_eredmeny),
    agazati_alapvizsga_eredmeny: parseFloat(agazati_alapvizsga_eredmeny),
    magyar_nyelv_eretsegi_eredmeny: parseFloat(magyar_nyelv_eretsegi_eredmeny),
    matematika_eretsegi_eredmeny: parseFloat(matematika_eretsegi_eredmeny),
    tortenelem_eretsegi_eredmeny: parseFloat(tortenelem_eretsegi_eredmeny),
    angol_nyelv_eretsegi_eredmeny: parseFloat(angol_nyelv_eretsegi_eredmeny),
    agazati_szakmai_eretsegi_eredmeny: parseFloat(agazati_szakmai_eretsegi_eredmeny),
  });
}

export async function update(
  id,
  szakirany_id,
  szakma_id,
  alapadatok_id,
  tanev_kezdete,
  szakmai_vizsga_eredmeny,
  agazati_alapvizsga_eredmeny,
  magyar_nyelv_eretsegi_eredmeny,
  matematika_eretsegi_eredmeny,
  tortenelem_eretsegi_eredmeny,
  angol_nyelv_eretsegi_eredmeny,
  agazati_szakmai_eretsegi_eredmeny
) {
  return await pattern.update(parseInt(id), {
    szakirany_id,
    szakma_id,
    alapadatok_id,
    tanev_kezdete: parseInt(tanev_kezdete),
    szakmai_vizsga_eredmeny: parseFloat(szakmai_vizsga_eredmeny),
    agazati_alapvizsga_eredmeny: parseFloat(agazati_alapvizsga_eredmeny),
    magyar_nyelv_eretsegi_eredmeny: parseFloat(magyar_nyelv_eretsegi_eredmeny),
    matematika_eretsegi_eredmeny: parseFloat(matematika_eretsegi_eredmeny),
    tortenelem_eretsegi_eredmeny: parseFloat(tortenelem_eretsegi_eredmeny),
    angol_nyelv_eretsegi_eredmeny: parseFloat(angol_nyelv_eretsegi_eredmeny),
    agazati_szakmai_eretsegi_eredmeny: parseFloat(agazati_szakmai_eretsegi_eredmeny),
  });
}

export async function deleteAllByAlapadatok(alapadatokId, tanev) {
  return await pattern.deleteByAlapadatokIdAndYear(alapadatokId, tanev);
}
