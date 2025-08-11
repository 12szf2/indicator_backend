// Singleton pattern for PrismaClient to avoid multiple instances
import { PrismaClient } from "../generated/prisma/client.js";

// Create a single PrismaClient instance and export it
const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL,
    },
  },
  log:
    process.env.NODE_ENV === "development"
      ? ["query", "info", "warn", "error"]
      : ["error"],
  errorFormat: "minimal",
  transactionOptions: {
    timeout: 10000, // 10 seconds
    maxWait: 5000, // 5 seconds
    isolationLevel: "ReadCommitted",
  },
});

const gracefulShutdown = async (signal) => {
  console.log(`${signal} received, disconnecting from database...`);
  try {
    await prisma.$disconnect();
    console.log("Database connection closed.");
  } catch (error) {
    console.error("Error disconnecting from database:", error);
  }
};

if (!process.listenerCount("SIGTERM")) {
  process.on("SIGTERM", () => gracefulShutdown("SIGTERM"));
}
if (!process.listenerCount("SIGINT")) {
  process.on("SIGINT", () => gracefulShutdown("SIGINT"));
}

export default prisma;
