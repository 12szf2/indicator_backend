import prisma from "../utils/prisma.js";
import { scheduleSnapshot } from "./form_history.service.js";

export const getOratomeg = async (alapadatok_id, tanev_kezdete) => {
  return await prisma.engedelyezettOratomeg.findFirst({
    where: {
      alapadatok_id,
      tanev_kezdete,
    },
  });
};

export const upsertOratomeg = async (alapadatok_id, tanev_kezdete, tanuloi_oratomeg, felnott_oratomeg, userId) => {
  const res = await prisma.engedelyezettOratomeg.upsert({
    where: {
      alapadatok_id_tanev_kezdete: {
        alapadatok_id,
        tanev_kezdete,
      },
    },
    update: {
      tanuloi_oratomeg: tanuloi_oratomeg !== "" && tanuloi_oratomeg !== null ? parseFloat(tanuloi_oratomeg) : null,
      felnott_oratomeg: felnott_oratomeg !== "" && felnott_oratomeg !== null ? parseFloat(felnott_oratomeg) : null,
      updatedBy: userId,
    },
    create: {
      alapadatok_id,
      tanev_kezdete,
      tanuloi_oratomeg: tanuloi_oratomeg !== "" && tanuloi_oratomeg !== null ? parseFloat(tanuloi_oratomeg) : null,
      felnott_oratomeg: felnott_oratomeg !== "" && felnott_oratomeg !== null ? parseFloat(felnott_oratomeg) : null,
      createBy: userId,
    },
  });
  scheduleSnapshot(alapadatok_id, "engedelyezett_oratomeg");
  return res;
};
