import prisma from "../utils/prisma.js";

export async function getAll(tanev) {
  const firstYear = parseInt(tanev) - 4;
  const lastYear = parseInt(tanev);

  const data = await prisma.versenyek.findMany({
    where: {
      tanev_kezdete: {
        gte: firstYear,
        lte: lastYear,
      },
    },
    orderBy: {
      datum: "asc",
    },
    include: {
      versenyNev: true,
      alapadatok: {
        select: {
          nev: true,
        },
      },
    },
  });

  return data;
}

export async function getAllByAlapadatok(alapadatokId, tanev) {
  const firstYear = parseInt(tanev) - 4;
  const lastYear = parseInt(tanev);

  const data = await prisma.versenyek.findMany({
    where: {
      alapadatok_id: alapadatokId,
      tanev_kezdete: {
        gte: firstYear,
        lte: lastYear,
      },
    },
    orderBy: {
      datum: "asc",
    },
    include: {
      versenyNev: true,
      alapadatok: {
        select: {
          nev: true,
        },
      },
    },
  });

  return data;
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
  const data = await prisma.versenyek.create({
    data: {
      helyezett_1,
      helyezett_1_3,
      dontobeJutott,
      nevezettekSzama,
      tanev_kezdete,
      alapadatok_id: alapadatokId,
      versenyNev: {
        connectOrCreate: {
          id: versenyNev,
          create: {
            nev: versenyNev,
            versenyKategoria: {
              connectOrCreate: {
                id: versenyKategoria,
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

  return data;
}

export async function update(
  id,
  versenyKategoria,
  versenyNev,
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
      versenyNev: {
        connectOrCreate: {
          id: versenyNev,
          create: {
            nev: versenyNev,
            versenyKategoria: {
              connectOrCreate: {
                id: versenyKategoria,
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

  return data;
}
