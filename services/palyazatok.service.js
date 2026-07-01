import { ServicePattern } from "../utils/ServicePattern.js";

const pattern = new ServicePattern("palyazatok", "id", {}, {}, {
  orderBy: { createdAt: "desc" }
});

export const getByAlapadatokIdAndTanev = async (alapadatokId, tanev) => {
  // We use pattern.findByAlapadatokIdAndYear which fetches a 5-year range,
  // then filter for the exact year if the user only wants the specific year.
  // This avoids calling prisma directly in the service.
  const targetYear = parseInt(tanev);
  const results = await pattern.findByAlapadatokIdAndYear(alapadatokId, targetYear);
  return results.filter(r => r.tanev_kezdete === targetYear);
};

export const create = async (data) => {
  const payload = { ...data };
  // osszeg_ft might be passed as a number, but Prisma expects BigInt
  if (payload.osszeg_ft !== undefined) {
    payload.osszeg_ft = BigInt(payload.osszeg_ft);
  }
  return await pattern.create(payload);
};

export const remove = async (id) => {
  return await pattern.delete(parseInt(id));
};

