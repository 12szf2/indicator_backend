import prisma from "../utils/prisma.js";
import * as cache from "../utils/cache.js";

const CACHE_TTL = {
  LIST: 5 * 60 * 1000, // 5 minutes for lists
  DETAIL: 10 * 60 * 1000, // 10 minutes for details
};

export async function getAllByAlapadatok(alapadatokId, tanev) {
  const cacheKey = `oktatoEgyebTev:alapadatok_id:${alapadatokId}:${tanev}`;
  const cachedData = await cache.get(cacheKey);
  if (cachedData) {
    return cachedData;
  }

  const data = await prisma.oktatoEgyebTev.findMany({
    where: {
      alapadatok_id: alapadatokId,
      tanev_kezdete: tanev,
    },
  });

  await cache.set(cacheKey, data, CACHE_TTL.LIST);
  return data;
}

export async function getAll(tanev) {
  const cacheKey = `oktatoEgyebTev:all:${tanev}`;
  const cachedData = await cache.get(cacheKey);
  if (cachedData) {
    return cachedData;
  }

  const data = await prisma.oktatoEgyebTev.findMany({
    where: {
      tanev_kezdete: tanev,
    },
  });

  await cache.set(cacheKey, data, CACHE_TTL.LIST);
  return data;
}

export async function getById(id) {
  const cacheKey = `oktatoEgyebTev:id:${id}`;
  const cachedData = await cache.get(cacheKey);
  if (cachedData) {
    return cachedData;
  }

  const data = await prisma.oktatoEgyebTev.findUnique({
    where: {
      id: id,
    },
  });

  await cache.set(cacheKey, data, CACHE_TTL.DETAIL);
  return data;
}

export async function create(data) {
  const newEntry = await prisma.oktatoEgyebTev.create({
    data: {
      alapadatok_id: data.alapadatok_id,
      tanev_kezdete: parseInt(data.tanev_kezdete),
      szakkepzesi_szakerto: data.szakkepzesi_szakerto
        ? parseInt(data.szakkepzesi_szakerto)
        : null,
      koznevelesi_szakerto: data.koznevelesi_szakerto
        ? parseInt(data.koznevelesi_szakerto)
        : null,
      koznevelesi_szaktanacsado: data.koznevelesi_szaktanacsado
        ? parseInt(data.koznevelesi_szaktanacsado)
        : null,
      vizsgafelugyelo: data.vizsgafelugyelo
        ? parseInt(data.vizsgafelugyelo)
        : null,
      agazati_alapvizsgan_elnok: data.agazati_alapvizsgan_elnok
        ? parseInt(data.agazati_alapvizsgan_elnok)
        : null,
      feladatkeszito_lektor: data.feladatkeszito_lektor
        ? parseInt(data.feladatkeszito_lektor)
        : null,
      erettsegi_elnok: data.erettsegi_elnok
        ? parseInt(data.erettsegi_elnok)
        : null,
      emelt_erettsegi_vb_tag: data.emelt_erettsegi_vb_tag
        ? parseInt(data.emelt_erettsegi_vb_tag)
        : null,
      emelt_erettsegi_vb_elnok: data.emelt_erettsegi_vb_elnok
        ? parseInt(data.emelt_erettsegi_vb_elnok)
        : null,
      erettsegi_vizsgaztato: data.erettsegi_vizsgaztato
        ? parseInt(data.erettsegi_vizsgaztato)
        : null,
      tanterviro: data.tanterviro ? parseInt(data.tanterviro) : null,
      tananyagfejleszto: data.tananyagfejleszto
        ? parseInt(data.tananyagfejleszto)
        : null,
      tankonyv_jegyzetiro: data.tankonyv_jegyzetiro
        ? parseInt(data.tankonyv_jegyzetiro)
        : null,
      szakmai_tisztsegviselo: data.szakmai_tisztsegviselo
        ? parseInt(data.szakmai_tisztsegviselo)
        : null,
      createBy: data.createBy || null,
    },
  });

  // Invalidate cache
  await cache.invalidate(`oktatoEgyebTev:all:${data.tanev_kezdete}`);
  await cache.invalidate(
    `oktatoEgyebTev:alapadatok_id:${data.alapadatok_id}:${data.tanev_kezdete}`
  );

  return newEntry;
}

export async function update(id, data) {
  const updatedEntry = await prisma.oktatoEgyebTev.update({
    where: {
      id: id,
    },
    data: {
      alapadatok_id: data.alapadatok_id,
      tanev_kezdete: parseInt(data.tanev_kezdete),
      szakkepzesi_szakerto: data.szakkepzesi_szakerto
        ? parseInt(data.szakkepzesi_szakerto)
        : null,
      koznevelesi_szakerto: data.koznevelesi_szakerto
        ? parseInt(data.koznevelesi_szakerto)
        : null,
      koznevelesi_szaktanacsado: data.koznevelesi_szaktanacsado
        ? parseInt(data.koznevelesi_szaktanacsado)
        : null,
      vizsgafelugyelo: data.vizsgafelugyelo
        ? parseInt(data.vizsgafelugyelo)
        : null,
      agazati_alapvizsgan_elnok: data.agazati_alapvizsgan_elnok
        ? parseInt(data.agazati_alapvizsgan_elnok)
        : null,
      feladatkeszito_lektor: data.feladatkeszito_lektor
        ? parseInt(data.feladatkeszito_lektor)
        : null,
      erettsegi_elnok: data.erettsegi_elnok
        ? parseInt(data.erettsegi_elnok)
        : null,
      emelt_erettsegi_vb_tag: data.emelt_erettsegi_vb_tag
        ? parseInt(data.emelt_erettsegi_vb_tag)
        : null,
      emelt_erettsegi_vb_elnok: data.emelt_erettsegi_vb_elnok
        ? parseInt(data.emelt_erettsegi_vb_elnok)
        : null,
      erettsegi_vizsgaztato: data.erettsegi_vizsgaztato
        ? parseInt(data.erettsegi_vizsgaztato)
        : null,
      tanterviro: data.tanterviro ? parseInt(data.tanterviro) : null,
      tananyagfejleszto: data.tananyagfejleszto
        ? parseInt(data.tananyagfejleszto)
        : null,
      tankonyv_jegyzetiro: data.tankonyv_jegyzetiro
        ? parseInt(data.tankonyv_jegyzetiro)
        : null,
      szakmai_tisztsegviselo: data.szakmai_tisztsegviselo
        ? parseInt(data.szakmai_tisztsegviselo)
        : null,
      updatedBy: data.updatedBy || null,
    },
  });

  // Invalidate cache
  await cache.invalidate(`oktatoEgyebTev:id:${id}`);
  await cache.invalidate(`oktatoEgyebTev:all:${data.tanev_kezdete}`);
  await cache.invalidate(
    `oktatoEgyebTev:alapadatok_id:${data.alapadatok_id}:${data.tanev_kezdete}`
  );

  return updatedEntry;
}

export async function deleteById(id) {
  const entry = await prisma.oktatoEgyebTev.findUnique({
    where: { id: id },
  });

  if (!entry) {
    throw new Error("Entry not found");
  }

  const deletedEntry = await prisma.oktatoEgyebTev.delete({
    where: {
      id: id,
    },
  });

  // Invalidate cache
  await cache.invalidate(`oktatoEgyebTev:id:${id}`);
  await cache.invalidate(`oktatoEgyebTev:all:${entry.tanev_kezdete}`);
  await cache.invalidate(
    `oktatoEgyebTev:alapadatok_id:${entry.alapadatok_id}:${entry.tanev_kezdete}`
  );

  return deletedEntry;
}
