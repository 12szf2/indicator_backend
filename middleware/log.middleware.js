import { logRequest } from "../services/log.service.js";
import { getUserFromToken } from "../utils/token.js";

// Simple user cache to avoid repeated database lookups
const userCache = new Map();
const USER_CACHE_TTL = 10 * 60 * 1000; // 10 minutes

export function logMiddleware(req, res, next) {
  if (req.method === "OPTIONS") {
    return next();
  }

  // Continue processing the request without waiting for logging
  next();

  // Extract token if available
  const token = req.headers.authorization?.split(" ")[1];
  let userId = null;

  // Use cached user ID if available
  if (token) {
    const cachedUser = userCache.get(token);
    if (cachedUser && cachedUser.expiry > Date.now()) {
      userId = cachedUser.id;
    } else {
      // User will be fetched asynchronously without blocking the request
      getUserFromToken(token)
        .then((user) => {
          if (user) {
            // Cache user ID for future requests
            userCache.set(token, {
              id: user.id,
              expiry: Date.now() + USER_CACHE_TTL,
            });
            // Log after getting user
            logRequest({
              userId: user.id,
              method: req.method,
              path: req.path,
              body:
                req.body && req.body.password
                  ? { ...req.body, password: "***REDACTED***" }
                  : req.body,
              query: req.query,
              headers: req.headers,
              ip: req.headers["x-forwarded-for"] || req.socket.remoteAddress,
              userAgent: req.headers["user-agent"],
            });
          }
        })
        .catch((err) => {
          console.error("Error getting user from token for logging:", err);
        });
      return;
    }
  }

  // Log without waiting for user lookup if we have cached ID
  logRequest({
    userId,
    method: req.method,
    path: req.path,
    body:
      req.body && req.body.password
        ? { ...req.body, password: "***REDACTED***" }
        : req.body,
    query: req.query,
    headers: req.headers,
    ip: req.headers["x-forwarded-for"] || req.socket.remoteAddress,
    userAgent: req.headers["user-agent"],
  });
}

export default logMiddleware;
