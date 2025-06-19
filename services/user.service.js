import { PrismaClient } from "../generated/prisma/client.js";
import { generateToken } from "../utils/token.js";

const prisma = new PrismaClient();

export async function getAll() {
  const data = await prisma.user.findMany({
    include: {
      tableAccess: true,
      alapadatok: true,
    },
  });

  data.forEach((user) => {
    user.permissionsDetails = {
      isSuperadmin: Boolean(user.permissions & 0b10000),
      isHSZC: Boolean(user.permissions & 0b01000),
      isAdmin: Boolean(user.permissions & 0b00100),
      isPrivileged: Boolean(user.permissions & 0b00010),
      isStandard: Boolean(user.permissions & 0b00001),
    };

    user.tableAccess.forEach((access) => {
      access.permissionsDetails = {
        canDelete: Boolean(access.access & 0b01000),
        canUpdate: Boolean(access.access & 0b00100),
        canCreate: Boolean(access.access & 0b00010),
        canRead: Boolean(access.access & 0b00001),
      };
    });
  });

  return data;
}

export async function getByEmail(email) {
  const data = await prisma.user.findUnique({
    include: {
      tableAccess: true,
      alapadatok: true,
    },
    where: {
      email: email,
    },
  });

  if (!data) {
    return null;
  }

  data.permissionsDetails = {
    isSuperadmin: Boolean(data.permissions & 0b10000),
    isHSZC: Boolean(data.permissions & 0b01000),
    isAdmin: Boolean(data.permissions & 0b00100),
    isPrivileged: Boolean(data.permissions & 0b00010),
    isStandard: Boolean(data.permissions & 0b00001),
  };

  if (data.tableAccess && data.tableAccess?.length > 0)
    data.tableAccess.forEach((access) => {
      access.permissionsDetails = {
        canDelete: Boolean(access.access & 0b01000),
        canUpdate: Boolean(access.access & 0b00100),
        canCreate: Boolean(access.access & 0b00010),
        canRead: Boolean(access.access & 0b00001),
      };
    });

  return data;
}
