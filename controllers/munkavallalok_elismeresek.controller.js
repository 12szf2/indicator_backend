import e from "express";
import {
  getMunkavallalokElismeresek,
  getMunkavallalokElismeresekBySchool,
  upsertMunkavallalokElismeresek,
} from "../services/intezmenyi_elismeresek.service.js";

const router = e.Router();

// ─── Munkavállalók Elismerései (fix struktúra) ────────────────────────────────

/**
 * @swagger
 * /api/v1/munkavallalok_elismeresek/{alapadatokId}:
 *   get:
 *     summary: Get all employee award records for a school (all years)
 *     tags: [MunkavallalokElismeresek]
 *     security: [{ bearerAuth: [] }]
 */
router.get("/:alapadatokId", async (req, res) => {
  try {
    const { alapadatokId } = req.params;
    const data = await getMunkavallalokElismeresekBySchool(alapadatokId);
    return res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching munkavallalok_elismeresek:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

/**
 * @swagger
 * /api/v1/munkavallalok_elismeresek/{alapadatokId}/{tanev}:
 *   get:
 *     summary: Get employee award record for a school and year
 *     tags: [MunkavallalokElismeresek]
 *     security: [{ bearerAuth: [] }]
 */
router.get("/:alapadatokId/:tanev", async (req, res) => {
  try {
    const { alapadatokId, tanev } = req.params;
    const data = await getMunkavallalokElismeresek(alapadatokId, tanev);
    // Return empty object if not found (frontend can treat as all zeros)
    return res.status(200).json(data ?? null);
  } catch (error) {
    console.error("Error fetching munkavallalok_elismeresek by year:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

/**
 * @swagger
 * /api/v1/munkavallalok_elismeresek:
 *   post:
 *     summary: Upsert (create or update) employee award record for a school year
 *     tags: [MunkavallalokElismeresek]
 *     security: [{ bearerAuth: [] }]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [alapadatok_id, tanev_kezdete]
 *             properties:
 *               alapadatok_id: { type: string }
 *               tanev_kezdete: { type: integer }
 *               itm_miniszteri_elismero_oklevel: { type: integer }
 *               itm_szakkepzesert_dij: { type: integer }
 *               kim_miniszter_elismero_oklevele: { type: integer }
 *               kim_szakkepzesert_dij: { type: integer }
 *               kim_oktatoi_szolgalati_emlekazerem: { type: integer }
 *               pedagogus_szolgalati_emlekazerem: { type: integer }
 *               hszc_kivalosagi_dij: { type: integer }
 */
router.post("/", async (req, res) => {
  try {
    const {
      alapadatok_id,
      tanev_kezdete,
      itm_miniszteri_elismero_oklevel = 0,
      itm_szakkepzesert_dij = 0,
      kim_miniszter_elismero_oklevele = 0,
      kim_szakkepzesert_dij = 0,
      kim_oktatoi_szolgalati_emlekazerem = 0,
      pedagogus_szolgalati_emlekazerem = 0,
      hszc_kivalosagi_dij = 0,
    } = req.body;

    if (!alapadatok_id || !tanev_kezdete) {
      return res.status(400).json({ error: "alapadatok_id és tanev_kezdete megadása kötelező" });
    }

    const fields = {
      itm_miniszteri_elismero_oklevel: parseInt(itm_miniszteri_elismero_oklevel) || 0,
      itm_szakkepzesert_dij: parseInt(itm_szakkepzesert_dij) || 0,
      kim_miniszter_elismero_oklevele: parseInt(kim_miniszter_elismero_oklevele) || 0,
      kim_szakkepzesert_dij: parseInt(kim_szakkepzesert_dij) || 0,
      kim_oktatoi_szolgalati_emlekazerem: parseInt(kim_oktatoi_szolgalati_emlekazerem) || 0,
      pedagogus_szolgalati_emlekazerem: parseInt(pedagogus_szolgalati_emlekazerem) || 0,
      hszc_kivalosagi_dij: parseInt(hszc_kivalosagi_dij) || 0,
    };

    const data = await upsertMunkavallalokElismeresek(alapadatok_id, tanev_kezdete, fields);
    return res.status(200).json(data);
  } catch (error) {
    console.error("Error upserting munkavallalok_elismeresek:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
