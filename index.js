import * as i from "./utils/imports.js";

const corsConfig = {
  origin: [
    "http://localhost:5173",
    "http://172.16.0.100:5174",
    "https://indikator.pollak.info",
  ],
};

const app = i.express();
const port = process.env.PORT || 5300;

// app.use(
//   i.expressSession({
//     cookie: {
//       maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
//       secure: false,
//       sameSite: "none",
//     },
//     secret: process.env.SESSION_SECRET,
//     resave: true,
//     saveUninitialized: true,
//     store: new i.PrismaSessionStore(new i.PrismaClient(), {
//       checkPeriod: 2 * 60 * 1000, //ms
//       dbRecordIdIsSessionId: true,
//       dbRecordIdFunction: undefined,
//     }),
//   })
// );

app.use(i.express.json({ limit: "50mb" }));
app.use(i.express.urlencoded({ limit: "50mb" }));
app.use(i.cors(corsConfig));

// Middleware for logging requests
app.use(i.logMiddleware);

app.use("/api/v1/alapadatok", i.authMiddleware, i.alapadatokRouter);
app.use(
  "/api/v1/tanugyi_adatok",
  i.authMiddleware,
  i.endpointAccessMiddleware,
  i.tanugyi_adatok
);
app.use(
  "/api/v1/tanulo_letszam",
  i.authMiddleware,
  i.endpointAccessMiddleware,
  i.tanulo_letszam
);
app.use(
  "/api/v1/kompetencia",
  i.authMiddleware,
  i.endpointAccessMiddleware,
  i.kompetencia
);
app.use(
  "/api/v1/felvettek_szama",
  i.authMiddleware,
  i.endpointAccessMiddleware,
  i.felvettek_szama
);
app.use(
  "/api/v1/users",
  i.authMiddleware,
  i.endpointAccessMiddleware,
  i.userRouter
);
app.use(
  "/api/v1/tablelist",
  i.authMiddleware,
  i.endpointAccessMiddleware,
  i.tableRouter
);

app.use("/api/v1/auth", i.authRouter);

app.listen(port, () => {
  console.log(`Elindult a http://localhost:${port}`);
});
