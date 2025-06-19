import { logRequest } from "../services/log.service.js";
import { getUserFromToken } from "../utils/token.js";

export async function logMiddleware(req, res, next) {
  if (req.method === "OPTIONS") {
    return next();
  }

  const user = req.headers.authorization
    ? await getUserFromToken(req.headers.authorization.split(" ")[1])
    : null;

  await logRequest({
    userId: user ? user.id : null,
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
  next();
}

export default logMiddleware;
