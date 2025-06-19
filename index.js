import * as i from "./utils/imports.js";

const corsConfig = {
  origin: [
    "http://localhost:5173",
    "http://172.16.0.100:5174",
    "https://indicator.pollak.info",
  ],
};

const app = i.express();
const port = process.env.PORT || 5300;

app.use(i.express.json({ limit: "50mb" }));
app.use(i.express.urlencoded({ limit: "50mb" }));
app.use(i.cors(corsConfig));

// Middleware for logging requests
app.use(i.logMiddleware);

app.use("/api/v1/alapadatok", i.authMiddleware, i.alapadatokRouter);
app.use("/api/v1/tanugyi_adatok", i.authMiddleware, i.tanugyi_adatok);
app.use("/api/v1/tanulo_letszam", i.authMiddleware, i.tanulo_letszam);
app.use("/api/v1/kompetencia", i.authMiddleware, i.kompetencia);
app.use("/api/v1/felvettek_szama", i.authMiddleware, i.felvettek_szama);
app.use("/api/v1/user", i.authMiddleware, i.userRouter);
app.use("/api/v1/auth", i.authRouter);

app.listen(port, () => {
  console.log(`Elindult a http://localhost:${port}`);
});
