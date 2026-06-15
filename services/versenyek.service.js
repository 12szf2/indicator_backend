import { ServicePattern } from "../utils/ServicePattern.js";
import prisma from "../utils/prisma.js";

const pattern = new ServicePattern('versenyek', 'id', {
  versenyNev: true,
  alapadatok: true,
});

export async function getKategoriak() {
  return await prisma.vesenyKategoria.findMany();
}

export async function getAll(tanev) {
  return await pattern.findAllByYear(tanev);
}

export async function getAllByAlapadatok(alapadatokId, tanev) {
  return await pattern.findByAlapadatokIdAndYear(alapadatokId, tanev);
}

export async function create(
  versenyKategoria,
  versenyNev,
  helyezett_1,
  helyezett_1_3,
  dontobeJutott,
  nevezettekSzama,
  tanev_kezdete,
  alapadatokId
) {
  // Since this has complex relationships with versenyNev, we'll use direct Prisma for now
  // but still leverage cache invalidation from pattern
  const data = await prisma.versenyek.create({
    data: {
      helyezett_1,
      helyezett_1_3,
      dontobeJutott,
      nevezettekSzama,
      tanev_kezdete,
      alapadatok: {
        connect: { id: alapadatokId }
      },
      versenyNev: {
        connectOrCreate: {
          where: { nev: versenyNev },
          create: {
            nev: versenyNev,
            kategoria: {
              connectOrCreate: {
                where: { nev: versenyKategoria },
                create: {
                  nev: versenyKategoria,
                },
              },
            },
          },
        },
      },
    },
  });

  // Use pattern's cache invalidation
  pattern.serviceCache.invalidateRelated("create", data.id);

  return data;
}

export async function update(
  id,
  helyezett_1,
  helyezett_1_3,
  dontobeJutott,
  nevezettekSzama,
  tanev_kezdete
) {
  const data = await prisma.versenyek.update({
    where: { id },
    data: {
      helyezett_1,
      helyezett_1_3,
      dontobeJutott,
      nevezettekSzama,
      tanev_kezdete,
    },
  });

  // Use pattern's cache invalidation
  pattern.serviceCache.invalidateRelated("update", id);

  return data;
}
