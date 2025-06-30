import {
  create,
  getAll,
  getAllByAlapadatok,
  update,
} from "../services/versenyek.service.js";
import e from "express";

const router = e.Router();

router.get("/:tanev", async (req, res) => {
  try {
    const tanev = req.params.tanev;
    const data = await getAll(tanev);

    return res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching competitions:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/:alapadatokId/:tanev", async (req, res) => {
  try {
    const { alapadatokId, tanev } = req.params;
    const data = await getAllByAlapadatok(alapadatokId, tanev);

    return res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching competitions by alapadatokId:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

router.post("/", async (req, res) => {
  try {
    const {
      versenyKategoria,
      versenyNev,
      alapadatokId,
      helyezett1,
      helyezett1_3,
      dontobeJutott,
      nevezettekSzama,
      tanevKezdete,
    } = req.body;

    const data = await create(
      versenyKategoria,
      versenyNev,
      alapadatokId,
      helyezett1,
      helyezett1_3,
      dontobeJutott,
      nevezettekSzama,
      tanevKezdete
    );

    return res.status(201).json(data);
  } catch (error) {
    console.error("Error creating competition:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const {
      versenyKategoria,
      versenyNev,
      alapadatokId,
      helyezett1,
      helyezett1_3,
      dontobeJutott,
      nevezettekSzama,
      tanevKezdete,
    } = req.body;

    const data = await update(
      id,
      versenyKategoria,
      versenyNev,
      alapadatokId,
      helyezett1,
      helyezett1_3,
      dontobeJutott,
      nevezettekSzama,
      tanevKezdete
    );

    return res.status(200).json(data);
  } catch (error) {
    console.error("Error updating competition:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
