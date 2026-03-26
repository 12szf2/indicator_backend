import { ServicePattern } from "../utils/ServicePattern.js";

const toIntOrZero = (value) => {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : 0;
};

// Initialize ServicePattern for intezmenyiNeveltsegiMutatok with relations
const pattern = new ServicePattern("IntezmenyiNeveltsegiMutatok", "id", {
  alapadatok: true,
});

export async function getAllById(alapadatok_id, tanev) {
  return await pattern.findByAlapadatokIdAndYear(alapadatok_id, tanev);
}

export async function create(
  tanev_kezdete,
  alapadatok_id,
  osztaly_jele,
  igazolatlan_ora,
  dicseret_oktatoi,
  dicseret_osztalyfonoki,
  dicseret_igazgatoi,
  dicseret_oktato_testuleti,
  buntetes_oktatoi_figyelmeztetes,
  buntetes_osztalyfonoki_figyelmeztetes,
  buntetes_osztalyfonoki_intes,
  buntetes_osztalyfonoki_megrovas,
  buntetes_igazgatoi_figyelmeztetes,
  buntetes_igazgatoi_intes,
  buntetes_igazgatoi_megrovas,
  buntetes_oktato_testuleti_figyelmeztetes,
  buntetes_fegyelmi_eljaras,
) {
  return await pattern.create({
    tanev_kezdete: toIntOrZero(tanev_kezdete),
    alapadatok_id: alapadatok_id,
    osztaly_jele: osztaly_jele,
    igazolatlan_ora: toIntOrZero(igazolatlan_ora),
    dicseret_oktatoi: toIntOrZero(dicseret_oktatoi),
    dicseret_osztalyfonoki: toIntOrZero(dicseret_osztalyfonoki),
    dicseret_igazgatoi: toIntOrZero(dicseret_igazgatoi),
    dicseret_oktato_testuleti: toIntOrZero(dicseret_oktato_testuleti),
    buntetes_oktatoi_figyelmeztetes: toIntOrZero(
      buntetes_oktatoi_figyelmeztetes,
    ),
    buntetes_osztalyfonoki_figyelmeztetes: toIntOrZero(
      buntetes_osztalyfonoki_figyelmeztetes,
    ),
    buntetes_osztalyfonoki_intes: toIntOrZero(buntetes_osztalyfonoki_intes),
    buntetes_osztalyfonoki_megrovas: toIntOrZero(
      buntetes_osztalyfonoki_megrovas,
    ),
    buntetes_igazgatoi_figyelmeztetes: toIntOrZero(
      buntetes_igazgatoi_figyelmeztetes,
    ),
    buntetes_igazgatoi_intes: toIntOrZero(buntetes_igazgatoi_intes),
    buntetes_igazgatoi_megrovas: toIntOrZero(buntetes_igazgatoi_megrovas),
    buntetes_oktato_testuleti_figyelmeztetes: toIntOrZero(
      buntetes_oktato_testuleti_figyelmeztetes,
    ),
    buntetes_fegyelmi_eljaras: toIntOrZero(buntetes_fegyelmi_eljaras),
  });
}

export async function update(
  id,
  tanev_kezdete,
  osztaly_jele,
  igazolatlan_ora,
  dicseret_oktatoi,
  dicseret_osztalyfonoki,
  dicseret_igazgatoi,
  dicseret_oktato_testuleti,
  buntetes_oktatoi_figyelmeztetes,
  buntetes_osztalyfonoki_figyelmeztetes,
  buntetes_osztalyfonoki_intes,
  buntetes_osztalyfonoki_megrovas,
  buntetes_igazgatoi_figyelmeztetes,
  buntetes_igazgatoi_intes,
  buntetes_igazgatoi_megrovas,
  buntetes_oktato_testuleti_figyelmeztetes,
  buntetes_fegyelmi_eljaras,
) {
  return await pattern.update(id, {
    tanev_kezdete: toIntOrZero(tanev_kezdete),
    osztaly_jele: osztaly_jele,
    igazolatlan_ora: toIntOrZero(igazolatlan_ora),
    dicseret_oktatoi: toIntOrZero(dicseret_oktatoi),
    dicseret_osztalyfonoki: toIntOrZero(dicseret_osztalyfonoki),
    dicseret_igazgatoi: toIntOrZero(dicseret_igazgatoi),
    dicseret_oktato_testuleti: toIntOrZero(dicseret_oktato_testuleti),
    buntetes_oktatoi_figyelmeztetes: toIntOrZero(buntetes_oktatoi_figyelmeztetes),
    buntetes_osztalyfonoki_figyelmeztetes: toIntOrZero(
      buntetes_osztalyfonoki_figyelmeztetes,
    ),
    buntetes_osztalyfonoki_intes: toIntOrZero(buntetes_osztalyfonoki_intes),
    buntetes_osztalyfonoki_megrovas: toIntOrZero(
      buntetes_osztalyfonoki_megrovas,
    ),
    buntetes_igazgatoi_figyelmeztetes: toIntOrZero(
      buntetes_igazgatoi_figyelmeztetes,
    ),
    buntetes_igazgatoi_intes: toIntOrZero(buntetes_igazgatoi_intes),
    buntetes_igazgatoi_megrovas: toIntOrZero(buntetes_igazgatoi_megrovas),

    buntetes_oktato_testuleti_figyelmeztetes: toIntOrZero(
      buntetes_oktato_testuleti_figyelmeztetes,
    ),
    buntetes_fegyelmi_eljaras: toIntOrZero(buntetes_fegyelmi_eljaras),
  });
}
