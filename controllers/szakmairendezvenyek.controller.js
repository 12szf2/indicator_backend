import e from "express";
import {
  getAll,
  getAllByAlapadatok,
  create,
  update,
  remove,
} from "../services/szakmairendezvenyek.service.js";

const router = e.Router();

router.get("/:tanev", async (req, res) => {
  try {
    const data = await getAll(req.params.tanev);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/:alapadatok_id/:tanev", async (req, res) => {
  try {
    const data = await getAllByAlapadatok(
      req.params.alapadatok_id,
      req.params.tanev
    );
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const {
      alapadatok_id,
      tanev_kezdete,
      szakmai_bemutatok_neve,
      szakmai_bemutatok_letszam,
      konferenciak_neve,
      konferenciak_letszam,
      egyeb_rendezvenyek_neve,
      egyeb_rendezvenyek_letszam,
    } = req.body;

    const data = await create(
      alapadatok_id,
      tanev_kezdete,
      szakmai_bemutatok_neve,
      szakmai_bemutatok_letszam,
      konferenciak_neve,
      konferenciak_letszam,
      egyeb_rendezvenyek_neve,
      egyeb_rendezvenyek_letszam
    );
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const {
      alapadatok_id,
      tanev_kezdete,
      szakmai_bemutatok_neve,
      szakmai_bemutatok_letszam,
      konferenciak_neve,
      konferenciak_letszam,
      egyeb_rendezvenyek_neve,
      egyeb_rendezvenyek_letszam,
    } = req.body;

    const data = await update(
      req.params.id,
      alapadatok_id,
      tanev_kezdete,
      szakmai_bemutatok_neve,
      szakmai_bemutatok_letszam,
      konferenciak_neve,
      konferenciak_letszam,
      egyeb_rendezvenyek_neve,
      egyeb_rendezvenyek_letszam
    );
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const data = await remove(req.params.id);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
