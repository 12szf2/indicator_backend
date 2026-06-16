import prisma from "../utils/prisma.js";

// ─── Intézményi Elismerések (dinamikus díjak) ────────────────────────────────

export async function getIntezményiElismeresek(alapadatokId, tanev) {
  return await prisma.intezményiElismeresek.findMany({
    where: {
      alapadatok_id: alapadatokId,
      tanev_kezdete: parseInt(tanev),
    },
    orderBy: { createAt: "asc" },
  });
}

export async function getIntezményiElismeresekBySchool(alapadatokId) {
  return await prisma.intezményiElismeresek.findMany({
    where: { alapadatok_id: alapadatokId },
    orderBy: [{ tanev_kezdete: "asc" }, { createAt: "asc" }],
  });
}

export async function createIntezményiElismeresek(alapadatokId, tanev, dij_neve, darabszam) {
  return await prisma.intezményiElismeresek.create({
    data: {
      alapadatok_id: alapadatokId,
      tanev_kezdete: parseInt(tanev),
      dij_neve,
      darabszam: parseInt(darabszam) || 0,
    },
  });
}

export async function updateIntezményiElismeresek(id, darabszam, dij_neve) {
  return await prisma.intezményiElismeresek.update({
    where: { id },
    data: {
      darabszam: parseInt(darabszam) || 0,
      ...(dij_neve !== undefined ? { dij_neve } : {}),
    },
  });
}

export async function deleteIntezményiElismeresek(id) {
  return await prisma.intezményiElismeresek.delete({ where: { id } });
}

// ─── Munkavállalók Elismerései (fix struktúra) ────────────────────────────────

export async function getMunkavallalokElismeresek(alapadatokId, tanev) {
  return await prisma.munkavallalokElismeresek.findFirst({
    where: {
      alapadatok_id: alapadatokId,
      tanev_kezdete: parseInt(tanev),
    },
  });
}

export async function getMunkavallalokElismeresekBySchool(alapadatokId) {
  return await prisma.munkavallalokElismeresek.findMany({
    where: { alapadatok_id: alapadatokId },
    orderBy: { tanev_kezdete: "asc" },
  });
}

export async function upsertMunkavallalokElismeresek(alapadatokId, tanev, fields) {
  const tanev_kezdete = parseInt(tanev);
  return await prisma.munkavallalokElismeresek.upsert({
    where: {
      alapadatok_id_tanev_kezdete: {
        alapadatok_id: alapadatokId,
        tanev_kezdete,
      },
    },
    create: {
      alapadatok_id: alapadatokId,
      tanev_kezdete,
      ...fields,
    },
    update: fields,
  });
}
