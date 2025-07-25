import e from "express";
import {
  getAll,
  getAllByAlapadatok,
  create,
  deleteAllByAlapadatok,
} from "../services/lemorzsolodas.service.js";

const router = e.Router();

router.get("/:tanev", async (req, res) => {
  try {
    const tanev = req.params.tanev;
    const data = await getAll(tanev);

    return res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching lemorzsolodas data:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/:alapadatokId/:tanev", async (req, res) => {
  try {
    const alapadatokId = req.params.alapadatokId;
    const tanev = req.params.tanev;
    const data = await getAllByAlapadatok(alapadatokId, tanev);

    return res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching lemorzsolodas data:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

router.post("/", async (req, res) => {
  try {
    const {
      szakirany_id,
      szakma_id,
      alapadatok_id,
      tanev_kezdete,
      lemorzsolodo_tanulok_szama,
      oktober_es_belepett_tanulok_szama,
    } = req.body;

    const createdData = await create(
      szakirany_id,
      szakma_id,
      alapadatok_id,
      tanev_kezdete,
      lemorzsolodo_tanulok_szama,
      oktober_es_belepett_tanulok_szama
    );

    return res.status(201).json(createdData);
  } catch (error) {
    console.error("Error creating lemorzsolodas data:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

router.delete("/:alapadatokId/:tanev", async (req, res) => {
  try {
    const { alapadatokId, tanev } = req.params;

    await deleteAllByAlapadatok(alapadatokId, tanev);

    return res.status(204).send();
  } catch (error) {
    console.error("Error deleting lemorzsolodas data by alapadatok:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
