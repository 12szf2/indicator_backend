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

export async function create(
  email,
  name,
  password,
  permissions = 0b00001,
  tableAccess = [],
  alapadatok_id = null
) {
  const user = await prisma.user.create({
    data: {
      email,
      name,
      password,
      permissions: Number(permissions),
      alapadatok_id: alapadatok_id ? Number(alapadatok_id) : null,
    },
  });

  if (tableAccess && tableAccess.length > 0) {
    await Promise.all(
      tableAccess.map((access) =>
        prisma.tableAccess.create({
          data: {
            userId: user.id,
            tableName: access.tableName,
            access: access.access,
          },
        })
      )
    );
  }

  return user;
}

export async function update(
  id,
  email,
  name,
  password,
  permissions = 0b00001,
  tableAccess = [],
  alapadatok_id = null
) {
  const user = await prisma.user.update({
    where: { id: Number(id) },
    data: {
      email,
      name,
      password,
      permissions: Number(permissions),
      alapadatok_id: alapadatok_id ? Number(alapadatok_id) : null,
    },
  });

  if (tableAccess && tableAccess.length > 0) {
    await Promise.all(
      tableAccess.map((access) =>
        prisma.tableAccess.upsert({
          where: {
            userId_tableName: {
              userId: user.id,
              tableName: access.tableName,
            },
          },
          create: {
            userId: user.id,
            tableName: access.tableName,
            access: access.access,
          },
          update: {
            access: access.access,
          },
        })
      )
    );
  }

  return user;
}
