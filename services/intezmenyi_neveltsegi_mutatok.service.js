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

export async function bulkSaveIntezmenyiNeveltseg(records) {
  if (!records || records.length === 0) return [];

  // Assuming pattern.prisma provides access to the Prisma client
  // Wait, pattern.prisma doesn't exist directly but we can use prisma from utils
  // Or we can import prisma directly
  const results = [];
  for (const record of records) {
    if (record.id) {
      results.push(
        await update(
          record.id,
          record.tanev_kezdete,
          record.osztaly_jele,
          record.igazolatlan_ora,
          record.dicseret_oktatoi,
          record.dicseret_osztalyfonoki,
          record.dicseret_igazgatoi,
          record.dicseret_oktato_testuleti,
          record.buntetes_oktatoi_figyelmeztetes,
          record.buntetes_osztalyfonoki_figyelmeztetes,
          record.buntetes_osztalyfonoki_intes,
          record.buntetes_osztalyfonoki_megrovas,
          record.buntetes_igazgatoi_figyelmeztetes,
          record.buntetes_igazgatoi_intes,
          record.buntetes_igazgatoi_megrovas,
          record.buntetes_oktato_testuleti_figyelmeztetes,
          record.buntetes_fegyelmi_eljaras
        )
      );
    } else {
      results.push(
        await create(
          record.tanev_kezdete,
          record.alapadatok_id,
          record.osztaly_jele,
          record.igazolatlan_ora,
          record.dicseret_oktatoi,
          record.dicseret_osztalyfonoki,
          record.dicseret_igazgatoi,
          record.dicseret_oktato_testuleti,
          record.buntetes_oktatoi_figyelmeztetes,
          record.buntetes_osztalyfonoki_figyelmeztetes,
          record.buntetes_osztalyfonoki_intes,
          record.buntetes_osztalyfonoki_megrovas,
          record.buntetes_igazgatoi_figyelmeztetes,
          record.buntetes_igazgatoi_intes,
          record.buntetes_igazgatoi_megrovas,
          record.buntetes_oktato_testuleti_figyelmeztetes,
          record.buntetes_fegyelmi_eljaras
        )
      );
    }
  }
  
  // Try to use cache invalidation
  if (records.length > 0 && records[0].alapadatok_id) {
    await pattern.invalidateRelated(records[0].alapadatok_id);
  } else if (results.length > 0 && results[0].alapadatok_id) {
    await pattern.invalidateRelated(results[0].alapadatok_id);
  }

  return results;
}
