// Load environment variables
import "dotenv/config";
import * as i from "./utils/imports.js";
import prisma from "./utils/prisma.js";
import compression from "compression";
import process from "node:process";

// Enhanced CORS configuration with optimization
const corsConfig = {
  origin: [
    "http://localhost:5173",
    "http://172.16.0.100:5174",
    "https://indikator.pollak.info",
  ],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization", "Cache-Control"],
  exposedHeaders: ["X-Total-Count"],
  credentials: true,
  maxAge: 86400, // 24 hours for preflight cache
};

const app = i.express();
const port = process.env.PORT || 5300;
const SESSION_SECRET = process.env.SESSION_SECRET || "supersecretkey";

// Trust proxy for better performance behind reverse proxy
if (process.env.NODE_ENV === "production") {
  app.set("trust proxy", 1);
}

// Optimize compression with better settings
app.use(
  compression({
    level: 6, // Good balance between compression and CPU usage
    threshold: 1024, // Only compress responses > 1KB
    filter: (req, res) => {
      // Don't compress if the client doesn't support it
      if (req.headers["x-no-compression"]) {
        return false;
      }
      // Fallback to standard filter function
      return compression.filter(req, res);
    },
  })
);

// Optimize CORS
app.use(i.cors(corsConfig));

// Security and performance headers
app.use((req, res, next) => {
  res.set({
    "X-Content-Type-Options": "nosniff",
    "X-Frame-Options": "DENY",
    "X-XSS-Protection": "1; mode=block",
    "Referrer-Policy": "strict-origin-when-cross-origin",
  });
  next();
});

// Enhanced session configuration
app.use(
  i.expressSession({
    cookie: {
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
      secure: process.env.NODE_ENV === "production", // Only secure in production
      httpOnly: true, // Prevent XSS attacks
      sameSite: process.env.NODE_ENV === "production" ? "strict" : "none",
    },
    secret: SESSION_SECRET,
    resave: false, // Don't save session if unmodified
    saveUninitialized: false, // Don't save empty sessions
    rolling: true, // Reset expiry on activity
    store: new i.PrismaSessionStore(prisma, {
      checkPeriod: 2 * 60 * 1000, // Check every 2 minutes
      dbRecordIdIsSessionId: true,
      dbRecordIdFunction: undefined,
    }),
    name: "sessionId", // Change default session name for security
  })
);

// Middleware for logging requests (optimized)
app.use(i.logMiddleware);

// Enhanced HTTP caching middleware with conditional settings
app.use(
  i.cacheMiddleware({
    maxAge: process.env.NODE_ENV === "production" ? 600 : 300, // 10 min prod, 5 min dev
    private: true,
    staleWhileRevalidate: 120, // 2 minutes stale-while-revalidate
  })
);

// Import rate limiting
import {
  apiRateLimit,
  authRateLimit,
} from "./middleware/rateLimit.middleware.js";

// Apply global rate limiting
app.use(apiRateLimit);

// Optimized body parser with size limits
const jsonParserOptions = {
  limit: process.env.NODE_ENV === "production" ? "10mb" : "50mb",
  type: ["application/json", "application/json-patch+json"],
  verify: (req, res, buf) => {
    // Store raw body for webhooks if needed
    req.rawBody = buf;
  },
};

const urlencodedParserOptions = {
  limit: process.env.NODE_ENV === "production" ? "10mb" : "50mb",
  extended: false,
  parameterLimit: 1000,
};

// First, mount the auth routes separately with rate limiting
app.use("/api/v1/auth", authRateLimit);
app.use("/api/v1/auth", i.express.json(jsonParserOptions));
app.use("/api/v1/auth", i.express.urlencoded(urlencodedParserOptions));
app.use("/api/v1/auth", i.authRouter);

// Apply middleware to all protected routes with optimized parsing
const apiRouter = i.express.Router();

// Conditional body parsing - only for routes that need it
apiRouter.use((req, res, next) => {
  // Skip body parsing for GET requests
  if (req.method === "GET") {
    return next();
  }

  // Apply JSON parser
  i.express.json(jsonParserOptions)(req, res, (err) => {
    if (err) {
      return res.status(400).json({ error: "Invalid JSON payload" });
    }

    // Apply URL-encoded parser
    i.express.urlencoded(urlencodedParserOptions)(req, res, next);
  });
});

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
protectedRouter.use("/oktato-egyeb-tev", i.oktatoEgyebTevRouter);
protectedRouter.use("/alkalmazottak_munkaugy", i.alkalmazottakMunkauyRouter);

// Mount the protected router under the API router
apiRouter.use(protectedRouter);

// Mount the api router with base prefix, excluding the /auth path which is already handled
app.use("/api/v1", apiRouter);

// Import response optimization and monitoring
import {
  responseOptimizer,
  errorHandler,
  notFoundHandler,
  requestLogger,
} from "./middleware/responseOptimizer.middleware.js";
import { performanceMonitoringMiddleware } from "./utils/monitoring.js";
import systemRouter from "./controllers/system.controller.js";

// Apply response optimization and monitoring
app.use(requestLogger());
app.use(responseOptimizer());
app.use(performanceMonitoringMiddleware());

// System endpoints (health, metrics, etc.) - no auth required
app.use("/system", systemRouter);

// Health check endpoint at root for load balancers
app.get("/health", async (req, res) => {
  const { getHealthCheck } = await import("./utils/monitoring.js");
  const health = await getHealthCheck();
  const statusCode = health.status === "healthy" ? 200 : 503;
  res.status(statusCode).json(health);
});

// Set up Swagger API documentation (requires authentication)
i.setupSwagger(app);

// 404 handler for unknown routes
app.use(notFoundHandler());

// Global error handler
app.use(errorHandler());

// Note: Graceful shutdown for database is handled in utils/prisma.js

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
  console.log(`Health check available at http://localhost:${port}/health`);
  console.log(`Metrics available at http://localhost:${port}/system/metrics`);
  console.log(
    `API documentation available at http://localhost:${port}/api-docs (requires authentication)`
  );
  console.log(`Environment: ${process.env.NODE_ENV}`);
});
