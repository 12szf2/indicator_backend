import jwt from "jsonwebtoken";

export function generateToken(user) {
  const payload = {
    email: user.email,
    name: user.name,
    permissions: user.permissionsDetails,
    tableAccess: user.tableAccess
      ? [
          ...user.tableAccess.map((access) => ({
            tableName: access.tableName,
            permissions: {
              canDelete: Boolean(access.access & 0b01000),
              canUpdate: Boolean(access.access & 0b00100),
              canCreate: Boolean(access.access & 0b00010),
              canRead: Boolean(access.access & 0b00001),
            },
          })),
        ]
      : [],
  };

  const accessToken = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: "5m",
    algorithm: "HS512",
    issuer: "https://indicator-api.pollak.info",
    subject: String(user.id),
  });

  const refreshToken = jwt.sign(
    { email: user.email, name: user.name },
    process.env.JWT_SECRET,
    {
      expiresIn: "7d",
      algorithm: "HS512",
      issuer: "https://indicator-api.pollak.info",
      subject: String(user.id),
    }
  );

  return {
    accessToken,
    refreshToken,
  };
}

export function verifyToken(token) {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET, {
      algorithms: ["HS512"],
      issuer: "https://indicator-api.pollak.info",
    });
    return decoded;
  } catch (error) {
    console.error("Token verification failed:", error);
    return null;
  }
}

export function verifyRefreshToken(token) {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET, {
      algorithms: ["HS512"],
      issuer: "https://indicator-api.pollak.info",
    });
    return decoded;
  } catch (error) {
    console.error("Refresh token verification failed:", error);
    return null;
  }
}

export function isTokenExpired(token) {
  try {
    const decoded = jwt.decode(token);
    if (!decoded || !decoded.exp) {
      return true; // Token is invalid or does not have an expiration
    }
    const currentTime = Math.floor(Date.now() / 1000); // Current time in seconds
    return decoded.exp < currentTime; // Check if the token is expired
  } catch (error) {
    console.error("Error decoding token:", error);
    return true; // If there's an error, consider the token expired
  }
}

export function isRefreshTokenExpired(token) {
  try {
    const decoded = jwt.decode(token);
    if (!decoded || !decoded.exp) {
      return true; // Token is invalid or does not have an expiration
    }
    const currentTime = Math.floor(Date.now() / 1000); // Current time in seconds
    return decoded.exp < currentTime; // Check if the token is expired
  } catch (error) {
    console.error("Error decoding refresh token:", error);
    return true; // If there's an error, consider the token expired
  }
}

export function refreshAccessToken(refreshToken) {
  const decoded = verifyRefreshToken(refreshToken);
  if (!decoded) {
    return null; // Invalid refresh token
  }

  // Assuming you have a function to get user details by email
  const user = getUserByEmail(decoded.email);
  if (!user) {
    return null; // User not found
  }

  return generateToken(user); // Generate new access token
}
