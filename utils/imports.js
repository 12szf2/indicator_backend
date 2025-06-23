// External dependencies
import express from "express";
import cors from "cors";
import expressSession from "express-session";
import { PrismaSessionStore } from "@quixo3/prisma-session-store";

// Swagger documentation
import { setupSwagger } from "./swagger.js";

// Controllers
import alapadatokRouter from "../controllers/alapadatok.controller.js";
import tanugyi_adatok from "../controllers/tanugyi_adatok.controller.js";
import kompetencia from "../controllers/kompetencia.controller.js";
import tanulo_letszam from "../controllers/tanulo_letszam.controller.js";
import felvettek_szama from "../controllers/felvettek_szama.controller.js";
import userRouter from "../controllers/user.controller.js";
import authRouter from "../controllers/auth.controller.js";
import cacheRouter from "../controllers/cache.controller.js";
import logRouter from "../controllers/log.controller.js";
import tableRouter from "../controllers/tablelist.controller.js";

// Middleware
import logMiddleware from "../middleware/log.middleware.js";
import { authMiddleware } from "../middleware/auth.middleware.js";
import endpointAccessMiddleware from "../middleware/endpointAccess.middleware.js";
import cacheMiddleware from "../middleware/cache.middleware.js";

// Export everything for single import
export {
  express,
  cors,
  alapadatokRouter,
  tanugyi_adatok,
  kompetencia,
  tanulo_letszam,
  felvettek_szama,
  userRouter,
  authRouter,
  cacheRouter,
  logRouter,
  logMiddleware,
  authMiddleware,
  expressSession,
  PrismaSessionStore,
  endpointAccessMiddleware,
  cacheMiddleware,
  setupSwagger,
  tableRouter,
};
