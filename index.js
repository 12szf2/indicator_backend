// Load environment variables
import "dotenv/config";
import * as i from "./utils/imports.js";
import prisma from "./utils/prisma.js";
import compression from "compression";
import process from "node:process";

const corsConfig = {
  origin: [
    "http://localhost:5173",
    "http://172.16.0.100:5174",
    "https://indikator.pollak.info",
  ],
};

const app = i.express();
const port = process.env.PORT || 5300;
const SESSION_SECRET = process.env.SESSION_SECRET || "supersecretkey";

// Add compression middleware to improve response time
app.use(compression());

app.use(
  i.expressSession({
    cookie: {
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
      secure: false,
      sameSite: "none",
    },
    secret: SESSION_SECRET,
    resave: false, // Changed to false for better performance
    saveUninitialized: false, // Changed to false for better performance
    store: new i.PrismaSessionStore(prisma, {
      checkPeriod: 2 * 60 * 1000, //ms
      dbRecordIdIsSessionId: true,
      dbRecordIdFunction: undefined,
    }),
  })
);

app.use(i.cors(corsConfig));

// Middleware for logging requests
app.use(i.logMiddleware);

// Add HTTP caching middleware
app.use(
  i.cacheMiddleware({
    maxAge: 300, // 5 minutes
    private: true,
    staleWhileRevalidate: 60,
  })
);

// First, mount the auth routes separately to avoid middleware collision
// For auth routes, we need the body parsers but not the authentication middleware
app.use("/api/v1/auth", i.express.json());
app.use("/api/v1/auth", i.express.urlencoded({ extended: false }));
app.use("/api/v1/auth", i.authRouter); // Mount auth routes BEFORE the apiRouter

// Apply middleware to all protected routes at once to reduce setup overhead
const apiRouter = i.express.Router();

// Only parse JSON for routes that need it
apiRouter.use(i.express.json({ limit: "50mb" }));
apiRouter.use(i.express.urlencoded({ limit: "50mb", extended: false }));
apiRouter.use(i.authMiddleware);

// Cache monitoring endpoint
apiRouter.use("/cache", i.cacheRouter);

// Log management endpoint
apiRouter.use("/logs", i.logRouter);

// Define API routes with their specific middleware
apiRouter.use("/alapadatok", i.alapadatokRouter);

// Apply endpoint access middleware to protected routes
const protectedRouter = i.express.Router();
protectedRouter.use(i.endpointAccessMiddleware);

protectedRouter.use("/tanugyi_adatok", i.tanugyi_adatok);
protectedRouter.use("/tanulo_letszam", i.tanulo_letszam);
protectedRouter.use("/kompetencia", i.kompetencia);
protectedRouter.use("/felvettek_szama", i.felvettek_szama);
protectedRouter.use("/users", i.userRouter);
protectedRouter.use("/tablelist", i.tableRouter);
protectedRouter.use("/egy_oktatora_juto_tanulo", i.egyOktatoraJutoTanuloRouter);
protectedRouter.use("/szmsz", i.szmszRouter);
protectedRouter.use("/versenyek", i.versenyekRouter);
protectedRouter.use("/dobbanto", i.dobbantoRouter);
protectedRouter.use("/elegedettseg_meres", i.elegedettsegMeresRouter);
protectedRouter.use("/elegedettseg", i.elegedettsegRouter);
protectedRouter.use("/elhelyezkedes", i.elhelyezkedesRouter);
protectedRouter.use("/hh_es_hhh", i.hhEsHHHRouter);
protectedRouter.use("/intezmenyi_neveltseg", i.intezmenyiNeveltsegRouter);
protectedRouter.use("/lemorzsolodas", i.lemorzsolodasRouter);
protectedRouter.use("/muhelyiskola", i.muhelyiskolaRouter);
protectedRouter.use("/nszfh", i.nszfhRouter);
protectedRouter.use(
  "/sajatos_nevelesu_tanulok",
  i.sajatosNevelesuTanulokRouter
);
protectedRouter.use(
  "/szakmai_vizsga_eredmenyek",
  i.szakmaiVizsgaEredmenyekRouter
);
protectedRouter.use("/vizsgaeredmenyek", i.vizsgaeredmenyekRouter);

// Mount the protected router under the API router
apiRouter.use(protectedRouter);

// Mount the api router with base prefix, excluding the /auth path which is already handled
app.use("/api/v1", apiRouter);

// Set up Swagger API documentation (requires authentication)
i.setupSwagger(app);

app.use("/api/v1/auth", i.authRouter);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
  console.log(
    `API documentation available at http://localhost:${port}/api-docs (requires authentication)`
  );
});
