import prisma from "../utils/prisma.js";
import * as cache from "../utils/cache.js";

// Cache TTLs
const CACHE_TTL = {
  LIST: 1 * 60 * 1000, // 1 minute for log lists (shorter TTL since logs update frequently)
  DETAIL: 2 * 60 * 1000, // 2 minutes for log details
};

// Queue to batch log requests
const logQueue = [];
const MAX_QUEUE_SIZE = 10;
const MAX_QUEUE_AGE_MS = 5000; // 5 seconds
let queueTimer = null;

// Process logs in batch rather than one at a time
async function processLogQueue() {
  if (logQueue.length === 0) return;

  const logsToProcess = [...logQueue];
  logQueue.length = 0; // Clear queue

  try {
    // Use createMany for batch insertion
    await prisma.log.createMany({
      data: logsToProcess,
      skipDuplicates: true,
    });

    // Invalidate log caches when new logs are created
    cache.invalidate("logs:*");
  } catch (error) {
    console.error("Error batch processing logs:", error);
  }
}

export async function logRequest(logData) {
  // Add to queue instead of immediate database write
  logQueue.push(logData);

  // If queue gets big enough, process immediately
  if (logQueue.length >= MAX_QUEUE_SIZE) {
    processLogQueue();
  }
  // Otherwise set a timer to process if one isn't already set
  else if (!queueTimer) {
    queueTimer = setTimeout(() => {
      processLogQueue();
      queueTimer = null;
    }, MAX_QUEUE_AGE_MS);
  }

  // This is now non-blocking - immediately return
  return;
}

export async function getLogs() {
  const cacheKey = "logs:all";
  const cachedData = cache.get(cacheKey);

  if (cachedData) {
    return cachedData;
  }

  const data = await prisma.log.findMany({
    orderBy: {
      createdAt: "desc",
    },
    take: 1000, // Limit results for better performance
  });

  // Store in cache
  cache.set(cacheKey, data, CACHE_TTL.LIST);

  return data;
}

export async function getLogById(user_id) {
  const cacheKey = `logs:user:${user_id}`;
  const cachedData = cache.get(cacheKey);

  if (cachedData) {
    return cachedData;
  }

  const data = await prisma.log.findMany({
    where: {
      userId: user_id,
    },
    orderBy: {
      createdAt: "desc",
    },
    take: 100, // Limit results for better performance
  });

  // Store in cache
  cache.set(cacheKey, data, CACHE_TTL.DETAIL);

  return data;
}
