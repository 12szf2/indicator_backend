// Singleton pattern for PrismaClient to avoid multiple instances
import { PrismaClient } from "../generated/prisma/client.js";

// Create a single PrismaClient instance and export it
const prisma = new PrismaClient();

export default prisma;
