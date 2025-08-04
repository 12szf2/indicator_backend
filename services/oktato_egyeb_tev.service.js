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

export async function create(
  alapadatok_id,
  tanev_kezdete,
  szakkepzesi_szakerto = 0,
  koznevelesi_szakerto = 0,
  koznevelesi_szaktanacsado = 0,
  vizsgafelugyelo = 0,
  agazati_alapvizsgan_elnok = 0,
  feladatkeszito_lektor = 0,
  erettsegi_elnok = 0,
  emelt_erettsegi_vb_tag = 0,
  emelt_erettsegi_vb_elnok = 0,
  erettsegi_vizsgaztato = 0,
  tanterviro = 0,
  tananyagfejleszto = 0,
  tankonyv_jegyzetiro = 0,
  szakmai_tisztsegviselo = 0,
  createBy = null
) {
  // Validate required fields
  if (!alapadatok_id) {
    throw new Error("alapadatok_id is required");
  }

  if (!tanev_kezdete) {
    throw new Error("tanev_kezdete is required");
  }

  // Validate tanev_kezdete is a valid year
  const tanev_int = parseInt(tanev_kezdete);
  if (isNaN(tanev_int) || tanev_int < 1900 || tanev_int > 2100) {
    throw new Error("tanev_kezdete must be a valid year between 1900 and 2100");
  }

  const newEntry = await prisma.oktatoEgyebTev.create({
    data: {
      alapadatok_id,
      tanev_kezdete: tanev_int,
      szakkepzesi_szakerto: parseInt(szakkepzesi_szakerto) || 0,
      koznevelesi_szakerto: parseInt(koznevelesi_szakerto) || 0,
      koznevelesi_szaktanacsado: parseInt(koznevelesi_szaktanacsado) || 0,
      vizsgafelugyelo: parseInt(vizsgafelugyelo) || 0,
      agazati_alapvizsgan_elnok: parseInt(agazati_alapvizsgan_elnok) || 0,
      feladatkeszito_lektor: parseInt(feladatkeszito_lektor) || 0,
      erettsegi_elnok: parseInt(erettsegi_elnok) || 0,
      emelt_erettsegi_vb_tag: parseInt(emelt_erettsegi_vb_tag) || 0,
      emelt_erettsegi_vb_elnok: parseInt(emelt_erettsegi_vb_elnok) || 0,
      erettsegi_vizsgaztato: parseInt(erettsegi_vizsgaztato) || 0,
      tanterviro: parseInt(tanterviro) || 0,
      tananyagfejleszto: parseInt(tananyagfejleszto) || 0,
      tankonyv_jegyzetiro: parseInt(tankonyv_jegyzetiro) || 0,
      szakmai_tisztsegviselo: parseInt(szakmai_tisztsegviselo) || 0,
      createBy,
    },
  });

  // Invalidate cache
  await cache.invalidate(`oktatoEgyebTev:all:${tanev_int}`);
  await cache.invalidate(
    `oktatoEgyebTev:alapadatok_id:${alapadatok_id}:${tanev_int}`
  );

  return newEntry;
}

export async function update(
  id,
  alapadatok_id,
  tanev_kezdete,
  szakkepzesi_szakerto = 0,
  koznevelesi_szakerto = 0,
  koznevelesi_szaktanacsado = 0,
  vizsgafelugyelo = 0,
  agazati_alapvizsgan_elnok = 0,
  feladatkeszito_lektor = 0,
  erettsegi_elnok = 0,
  emelt_erettsegi_vb_tag = 0,
  emelt_erettsegi_vb_elnok = 0,
  erettsegi_vizsgaztato = 0,
  tanterviro = 0,
  tananyagfejleszto = 0,
  tankonyv_jegyzetiro = 0,
  szakmai_tisztsegviselo = 0,
  updatedBy = null
) {
  // Validate required fields
  if (!id) {
    throw new Error("id is required");
  }

  if (!alapadatok_id) {
    throw new Error("alapadatok_id is required");
  }

  if (!tanev_kezdete) {
    throw new Error("tanev_kezdete is required");
  }

  // Validate tanev_kezdete is a valid year
  const tanev_int = parseInt(tanev_kezdete);
  if (isNaN(tanev_int) || tanev_int < 1900 || tanev_int > 2100) {
    throw new Error("tanev_kezdete must be a valid year between 1900 and 2100");
  }

  const updatedEntry = await prisma.oktatoEgyebTev.update({
    where: {
      id: id,
    },
    data: {
      alapadatok_id,
      tanev_kezdete: tanev_int,
      szakkepzesi_szakerto: parseInt(szakkepzesi_szakerto) || 0,
      koznevelesi_szakerto: parseInt(koznevelesi_szakerto) || 0,
      koznevelesi_szaktanacsado: parseInt(koznevelesi_szaktanacsado) || 0,
      vizsgafelugyelo: parseInt(vizsgafelugyelo) || 0,
      agazati_alapvizsgan_elnok: parseInt(agazati_alapvizsgan_elnok) || 0,
      feladatkeszito_lektor: parseInt(feladatkeszito_lektor) || 0,
      erettsegi_elnok: parseInt(erettsegi_elnok) || 0,
      emelt_erettsegi_vb_tag: parseInt(emelt_erettsegi_vb_tag) || 0,
      emelt_erettsegi_vb_elnok: parseInt(emelt_erettsegi_vb_elnok) || 0,
      erettsegi_vizsgaztato: parseInt(erettsegi_vizsgaztato) || 0,
      tanterviro: parseInt(tanterviro) || 0,
      tananyagfejleszto: parseInt(tananyagfejleszto) || 0,
      tankonyv_jegyzetiro: parseInt(tankonyv_jegyzetiro) || 0,
      szakmai_tisztsegviselo: parseInt(szakmai_tisztsegviselo) || 0,
      updatedBy,
    },
  });

  // Invalidate cache
  await cache.invalidate(`oktatoEgyebTev:id:${id}`);
  await cache.invalidate(`oktatoEgyebTev:all:${tanev_int}`);
  await cache.invalidate(
    `oktatoEgyebTev:alapadatok_id:${alapadatok_id}:${tanev_int}`
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
