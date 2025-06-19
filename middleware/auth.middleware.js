import { getByEmail } from "../services/user.service.js";
import { verifyToken, refreshAccessToken } from "../utils/token.js";

export async function authMiddleware(req, res, next) {
  if (req.method === "OPTIONS") {
    return next();
  }

  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ message: "Authorization header is missing" });
  }

  const token = authHeader.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Token is missing" });
  }

  try {
    const decodedToken = verifyToken(token);
    const user = await getByEmail(decodedToken.email);

    req.user = user;
    next();
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      const refreshToken = req.headers["x-refresh-token"];
      if (!refreshToken) {
        return res.status(401).json({ message: "Refresh token is missing" });
      }
      try {
        const tokens = await refreshAccessToken(refreshToken);
        if (!tokens) {
          return res
            .status(401)
            .json({ message: "Invalid or expired refresh token" });
        }

        // Set the new token in response headers
        res.setHeader("Authorization", `Bearer ${tokens.accessToken}`);
        res.setHeader("X-Refresh-Token", tokens.refreshToken);

        const decodedToken = verifyToken(tokens.accessToken);
        const user = await getByEmail(decodedToken.email);
        req.user = user;
        next();
      } catch (error) {
        return res
          .status(401)
          .json({ message: "Invalid or expired refresh token" });
      }
    } else {
      return res.status(401).json({ message: "Invalid token" });
    }
  }
}
