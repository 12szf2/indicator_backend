import express from "express";
import alapadatokRouter from "./controllers/alapadatok.controller.js";
import tanugyi_adatok from "./controllers/tanugyi_adatok.controller.js";
import kompetencia from "./controllers/kompetencia.controller.js";
import cors from "cors";

const corsConfig = {
  origin: "http://localhost:5173",
};

const app = express();

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb" }));
app.use(cors(corsConfig));

app.use("/api/v1/alapadatok", alapadatokRouter);
app.use("/api/v1/tanugyi_adatok", tanugyi_adatok);
app.use("/api/v1/kompetencia", kompetencia);

app.listen(3300, () => {
  console.log("Elindult a http://localhost:3300");
});
