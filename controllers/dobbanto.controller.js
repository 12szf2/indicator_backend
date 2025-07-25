import e from "express";
import {
  getAll,
  getAllByAlapadatok,
  create,
  deleteAllByAlapadatok,
} from "../services/dobbanto.service.js";

const router = e.Router();

router.get("/:tanev", async (req, res) => {
  try {
    const tanev = req.params.tanev;
    const data = await getAll(tanev);

    return res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching dobbanto data:", error);
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
    console.error("Error fetching dobbanto data:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

router.post("/", async (req, res) => {
  try {
    const { alapadatok_id, tanev_kezdete, dobbanto_szama, tanulok_osszesen } =
      req.body;

    const createdData = await create(
      alapadatok_id,
      tanev_kezdete,
      dobbanto_szama,
      tanulok_osszesen
    );

    return res.status(201).json(createdData);
  } catch (error) {
    console.error("Error creating Dobbanto data:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

router.delete("/:alapadatokId/:tanev", async (req, res) => {
  try {
    const { alapadatokId, tanev } = req.params;

    await deleteAllByAlapadatok(alapadatokId, tanev);

    return res.status(204).send();
  } catch (error) {
    console.error("Error deleting dobbanto data by alapadatok:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
