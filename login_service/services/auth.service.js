import { comparePassword } from "../utils/hash.js";
import { generateToken, verifyRefreshToken } from "../utils/token.js";
import { getByEmail, getById, updateUser } from "./user.service.js";

import speakeasy from "speakeasy";
import QRCode from "qrcode";

export async function login(email, password, twoFactorCode) {
  try {
    // Get user data
    const user = await getByEmail(email.toLowerCase());

    if (!user) {
      throw new Error("Hibás email vagy jelszó");
    }

    if (!user.isActive) {
      throw new Error("A fiók inaktív");
    }

    // Password comparison is inherently slow for security
    const isPasswordValid = await comparePassword(password, user.password);
    if (!isPasswordValid) {
      throw new Error("Hibás email vagy jelszó");
    }

    // Check 2FA
    if (user.isTwoFactorEnabled) {
      if (!twoFactorCode) {
        return { requires2FA: true, userId: user.id };
      }

      const isValid2FA = speakeasy.totp.verify({
        secret: user.twoFactorSecret,
        encoding: 'base32',
        token: twoFactorCode,
        window: 1
      });

      if (!isValid2FA) {
        throw new Error("Hibás kétlépcsős kód");
      }
    }

    // Generate token
    const token = generateToken(user);

    if (!token) {
      throw new Error("Failed to generate token");
    }

    // Return only necessary data
    return {
      id: user.id,
      email: user.email,
      name: user.name,
      permissions: user.permissions,
      accessToken: token.accessToken,
      refreshToken: token.refreshToken,
    };
  } catch (error) {
    // Improve error handling
    console.error("Login error:", error.message);
    throw error; // Re-throw to be handled by the controller
  }
}

export async function refresh(refreshToken) {
  try {
    if (!refreshToken) {
      throw new Error("Refresh token is required");
    }

    const decoded = verifyRefreshToken(refreshToken);

    if (!decoded) {
      throw new Error("Invalid or expired refresh token");
    }

    // Get fresh user data
    const user = await getById(decoded.id);

    if (!user) {
      throw new Error("User not found");
    }

    // Generate new tokens
    const newTokens = generateToken(user);

    if (!newTokens) {
      throw new Error("Failed to generate new tokens");
    }

    return {
      accessToken: newTokens.accessToken,
      refreshToken: newTokens.refreshToken,
    };
  } catch (error) {
    console.error("Token refresh error:", error.message);
    throw error; // Re-throw to be handled by the controller
  }
}

export async function generate2FA(userId) {
  try {
    const user = await getById(userId);
    if (!user) throw new Error("User not found");

    const secret = speakeasy.generateSecret({
      name: `Indicator App (${user.email})`
    });

    const qrCodeUrl = await QRCode.toDataURL(secret.otpauth_url);

    await updateUser(userId, { twoFactorSecret: secret.base32 });

    return { secret: secret.base32, qrCodeUrl };
  } catch (error) {
    console.error("Generate 2FA error:", error.message);
    throw error;
  }
}

export async function verify2FA(userId, token) {
  try {
    const user = await getById(userId);
    if (!user) throw new Error("User not found");
    if (!user.twoFactorSecret) throw new Error("2FA secret nem található. Generálj újat először.");

    const isValid = speakeasy.totp.verify({
      secret: user.twoFactorSecret,
      encoding: 'base32',
      token,
      window: 1
    });

    if (!isValid) throw new Error("Hibás kód!");

    await updateUser(userId, { isTwoFactorEnabled: true });

    return { success: true };
  } catch (error) {
    console.error("Verify 2FA error:", error.message);
    throw error;
  }
}

export async function disable2FA(userId) {
  try {
    const user = await getById(userId);
    if (!user) throw new Error("User not found");

    await updateUser(userId, {
      isTwoFactorEnabled: false,
      twoFactorSecret: null,
    });

    return { success: true };
  } catch (error) {
    console.error("Disable 2FA error:", error.message);
    throw error;
  }
}
