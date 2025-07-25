import e from "express";
import {
  getAll,
  getAllByAlapadatok,
  create,
  deleteAllByAlapadatok,
} from "../services/elegedettseg_meres.service.js";

const router = e.Router();

router.get("/:tanev", async (req, res) => {
  try {
    const tanev = req.params.tanev;
    const data = await getAll(tanev);

    return res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching elegedettseg_meres data:", error);
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
    console.error("Error fetching elegedettseg_meres data:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

router.post("/", async (req, res) => {
  try {
    const {
      alapadatok_id,
      tanev_kezdete,
      szulok_elegedettsege,
      oktatok_elegedettsege,
      tanulok_elegedettsege,
      dualis_kepzohely_elegedettsege,
      munkaero_piac_elegedettsege,
    } = req.body;

    const createdData = await create(
      alapadatok_id,
      tanev_kezdete,
      szulok_elegedettsege,
      oktatok_elegedettsege,
      tanulok_elegedettsege,
      dualis_kepzohely_elegedettsege,
      munkaero_piac_elegedettsege
    );

    return res.status(201).json(createdData);
  } catch (error) {
    console.error("Error creating elegedettseg_meres data:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

router.delete("/:alapadatokId/:tanev", async (req, res) => {
  try {
    const { alapadatokId, tanev } = req.params;

    await deleteAllByAlapadatok(alapadatokId, tanev);

    return res.status(204).send();
  } catch (error) {
    console.error(
      "Error deleting elegedettseg_meres data by alapadatok:",
      error
    );
    return res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
