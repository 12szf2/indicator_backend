import e from "express";
import { login, refresh } from "../services/auth.service.js";

const router = e.Router();

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(400)
      .json({ message: "Email and password are required." });
  }

  try {
    const user = await login(email, password);
    res.status(200).json(user);
  } catch (error) {
    console.error("Login error:", error);
    res.status(401).json({ message: error.message });
  }
});

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

export default router;
