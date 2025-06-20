import { getUserFromToken } from "../utils/token.js";

export default async function endpointAccessMiddleware(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1]; // Extract token from Authorization header

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const user = await getUserFromToken(token);

    if (!user) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    req.user = user; // Attach user to request object

    const endpoint = req.originalUrl;
    const method = req.method;

    // Superadmin bypass - always has access to all endpoints and methods
    if (user.permissionsDetails && user.permissionsDetails.isSuperadmin) {
      return next();
    }

    // Check if the user has access to this endpoint
    const hasEndpointAccess = user.tableAccess.some((access) =>
      endpoint.includes(access.tableName)
    );

    if (!hasEndpointAccess) {
      return res.status(403).json({
        message: "Forbidden - You don't have access to this endpoint",
      });
    }

    // Check if the user has permission to use the method on this endpoint
    let hasMethodAccess = false;

    for (const access of user.tableAccess) {
      if (endpoint.includes(access.tableName)) {
        switch (method) {
          case "GET":
            if (access.permissionsDetails.canRead) {
              hasMethodAccess = true;
            }
            break;

          case "POST":
            if (access.permissionsDetails.canCreate) {
              hasMethodAccess = true;
            }
            break;

          case "PUT":
          case "PATCH":
            if (access.permissionsDetails.canUpdate) {
              hasMethodAccess = true;
            }
            break;

          case "DELETE":
            if (access.permissionsDetails.canDelete) {
              hasMethodAccess = true;
            }
            break;
        }

        if (hasMethodAccess) {
          return next();
        }
      }
    }

    // If we get here, the user doesn't have permission to use this method
    return res.status(403).json({
      message: `Forbidden - You don't have permission to ${method} on this endpoint`,
    });
  } catch (error) {
    console.error("Error in endpointAccessMiddleware:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
