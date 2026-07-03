import prisma from "../utils/prisma.js";
import { scheduleSnapshot } from "./form_history.service.js";

/**
 * Get all records for a specific school and academic year
 * @param {string} alapadatokId - The ID of the school
 * @param {number} tanev - The starting year of the academic year
 */
export const getSzervezetfejlesztes = async (alapadatokId, tanev) => {
  return await prisma.szervezetfejlesztes.findMany({
    where: {
      alapadatok_id: alapadatokId,
      tanev_kezdete: parseInt(tanev),
    },
    orderBy: {
      createdAt: "asc",
    },
  });
};

/**
 * Create a new record
 * @param {Object} data - The data to create
 */
export const createSzervezetfejlesztes = async (data) => {
  const created = await prisma.szervezetfejlesztes.create({
    data: {
      alapadatok_id: data.alapadatok_id,
      tanev_kezdete: parseInt(data.tanev_kezdete),
      tevekenyseg_neve: data.tevekenyseg_neve,
      resztvevok_szama: data.resztvevok_szama,
    },
  });
  scheduleSnapshot(created.alapadatok_id, "szervezetfejlesztes");
  return created;
};

/**
 * Update an existing record
 * @param {number} id - The ID of the record to update
 * @param {Object} data - The data to update
 */
export const updateSzervezetfejlesztes = async (id, data) => {
  const updated = await prisma.szervezetfejlesztes.update({
    where: { id: parseInt(id) },
    data: {
      alapadatok_id: data.alapadatok_id,
      tanev_kezdete: parseInt(data.tanev_kezdete),
      tevekenyseg_neve: data.tevekenyseg_neve,
      resztvevok_szama: data.resztvevok_szama,
    },
  });
  scheduleSnapshot(updated.alapadatok_id, "szervezetfejlesztes");
  return updated;
};

/**
 * Delete a record
 * @param {number} id - The ID of the record to delete
 */
export const deleteSzervezetfejlesztes = async (id) => {
  const deleted = await prisma.szervezetfejlesztes.delete({
    where: { id: parseInt(id) },
  });
  scheduleSnapshot(deleted.alapadatok_id, "szervezetfejlesztes");
  return deleted;
};
