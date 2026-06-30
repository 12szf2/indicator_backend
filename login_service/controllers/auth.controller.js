import express from "express";
import rateLimit from "express-rate-limit";
import { login, refresh, generate2FA, verify2FA, disable2FA, forgotPassword } from "../services/auth.service.js";
import { verifyToken } from "../utils/token.js";

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) return res.status(401).json({ message: "No token provided" });

  try {
    const decoded = verifyToken(token);
    // JWT token is generated with subject as the userId (sub property typically, but here it's signed with sub)
    // Actually looking at token.js, the id is usually in the subject. Let's verify token.js again.
    // In token.js: `subject: String(user.id)`
    req.userId = decoded.sub || decoded.id;
    next();
  } catch (error) {
    return res.status(403).json({ message: "Invalid or expired token" });
  }
};

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Authentication
 *   description: User authentication and token management
 */

/**
 * @swagger
 * /api/v1/auth/login:
 *   post:
 *     summary: User authentication
 *     description: Authenticates a user and returns tokens for authorization
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 example: user@example.com
 *               password:
 *                 type: string
 *                 format: password
 *                 example: "12345678"
 *     responses:
 *       200:
 *         description: Authentication successful
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   example: "123e4567-e89b-12d3-a456-426614174000"
 *                 email:
 *                   type: string
 *                   example: user@example.com
 *                 name:
 *                   type: string
 *                   example: John Doe
 *                 permissions:
 *                   type: integer
 *                   example: 0
 *                 accessToken:
 *                   type: string
 *                   example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
 *                 refreshToken:
 *                   type: string
 *                   example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
 *       400:
 *         description: Missing required fields
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Email and password are required.
 *       401:
 *         description: Invalid credentials
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: User not found or Invalid password
 */
router.post("/login", async (req, res) => {
  const { email, password, twoFactorCode, trustDevice, trustedDeviceToken } = req.body;

  if (!email || !password) {
    return res
      .status(400)
      .json({ message: "Email and password are required." });
  }

  try {
    const user = await login(email, password, twoFactorCode, trustDevice, trustedDeviceToken);
    res.status(200).json(user);
  } catch (error) {
    console.error("Login error:", error);
    res.status(401).json({ message: error.message });
  }
});

// Rate limiting for forgot password to prevent abuse (max 3 requests per IP per hour)
const forgotPasswordLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 3, // Limit each IP to 3 forgot password requests per windowMs
  message: {
    message: "Túl sok kérés erről az IP címről. Kérjük, próbáld újra egy óra múlva.",
  },
  standardHeaders: true,
  legacyHeaders: false,
});

/**
 * @swagger
 * /api/v1/auth/forgot-password:
 *   post:
 *     summary: Request a temporary password
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *             properties:
 *               email:
 *                 type: string
 *                 example: felhasznalo@example.com
 *     responses:
 *       200:
 *         description: Request processed successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       500:
 *         description: Internal server error
 */
router.post("/forgot-password", forgotPasswordLimiter, async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Email megadása kötelező." });
  }

  try {
    // Calling forgotPassword service. 
    // It handles timing attacks internally and returns void.
    await forgotPassword(email);
    
    // Always return the same successful response
    res.status(200).json({
      message: "Ha a megadott email cím regisztrálva van, elküldtük az ideiglenes jelszót."
    });
  } catch (error) {
    console.error("Forgot password route error:", error);
    res.status(500).json({ message: "Hiba történt a kérés feldolgozása során." });
  }
});

/**
 * @swagger
 * /api/v1/auth/refresh:
 *   post:
 *     summary: Refresh access token
 *     description: Uses a refresh token to generate a new access token
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - refreshToken
 *             properties:
 *               refreshToken:
 *                 type: string
 *                 example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
 *     responses:
 *       200:
 *         description: Token refresh successful
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 accessToken:
 *                   type: string
 *                   example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
 *                 refreshToken:
 *                   type: string
 *                   example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
 *       400:
 *         description: Missing refresh token
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Refresh token is required.
 *       401:
 *         description: Invalid or expired refresh token
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Invalid or expired refresh token
 */
router.post("/refresh", async (req, res) => {
  const { refreshToken } = req.body;
  if (!refreshToken) {
    return res.status(400).json({ message: "Refresh token is required." });
  }

  try {
    const newTokens = await refresh(refreshToken);
    res.status(200).json(newTokens);
  } catch (error) {
    console.error("Refresh token error:", error);
    res.status(401).json({ message: error.message });
  }
});

router.post("/2fa/generate", authenticateToken, async (req, res) => {
  try {
    const result = await generate2FA(req.userId);
    res.status(200).json(result);
  } catch (error) {
    console.error("Generate 2FA error:", error);
    res.status(400).json({ message: error.message });
  }
});

router.post("/2fa/verify", authenticateToken, async (req, res) => {
  const { token } = req.body;
  if (!token) return res.status(400).json({ message: "Token is required" });

  try {
    const result = await verify2FA(req.userId, token);
    res.status(200).json(result);
  } catch (error) {
    console.error("Verify 2FA error:", error);
    res.status(400).json({ message: error.message });
  }
});

router.post("/2fa/disable", authenticateToken, async (req, res) => {
  try {
    const result = await disable2FA(req.userId);
    res.status(200).json(result);
  } catch (error) {
    console.error("Disable 2FA error:", error);
    res.status(400).json({ message: error.message });
  }
});

export default router;
