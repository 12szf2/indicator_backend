import bcrypt from "bcryptjs";
import { generateToken } from "../utils/token.js";
import { getByEmail } from "./user.service.js";
import { refreshAccessToken } from "../utils/token.js";

export async function login(email, password) {
  const user = await getByEmail(email);

  if (!user) {
    throw new Error("User not found");
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    throw new Error("Invalid password");
  }

  const token = generateToken(user);

  return {
    id: user.id,
    email: user.email,
    name: user.name,
    accessToken: token.accessToken,
    refreshToken: token.refreshToken,
  };
}

export async function refresh(refreshToken) {
  if (!refreshToken) {
    throw new Error("Refresh token is required");
  }

  const token = await refreshAccessToken(refreshToken);

  if (!token) {
    throw new Error("Invalid or expired refresh token");
  }

  return {
    accessToken: token.accessToken,
    refreshToken: token.refreshToken,
  };
}
