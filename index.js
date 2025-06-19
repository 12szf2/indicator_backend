import express from "express";
import alapadatokRouter from "./controllers/alapadatok.controller.js";
import tanugyi_adatok from "./controllers/tanugyi_adatok.controller.js";
import kompetencia from "./controllers/kompetencia.controller.js";
import tanulo_letszam from "./controllers/tanulo_letszam.controller.js";
import userRouter from "./controllers/user.controller.js";
import authRouter from "./controllers/auth.controller.js";

import logMiddleware from "./middleware/log.middleware.js";

import cors from "cors";
import { authMiddleware } from "./middleware/auth.middleware.js";

const corsConfig = {
  origin: [
    "http://localhost:5173",
    "http://172.16.0.100:5174",
    "https://indicator.pollak.info",
  ],
};

const app = express();
const port = process.env.PORT || 5300;

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb" }));
app.use(cors(corsConfig));

// Middleware for logging requests
app.use(logMiddleware);

app.use("/api/v1/alapadatok", authMiddleware, alapadatokRouter);
app.use("/api/v1/tanugyi_adatok", authMiddleware, tanugyi_adatok);
app.use("/api/v1/tanulo_letszam", authMiddleware, tanulo_letszam);
app.use("/api/v1/kompetencia", authMiddleware, kompetencia);
app.use("/api/v1/user", authMiddleware, userRouter);
app.use("/api/v1/auth", authRouter);

app.listen(port, () => {
  console.log(`Elindult a http://localhost:${port}`);
});
