import { hashPassword } from "../utils/hash.js";
import prisma from "../utils/prisma.js";
import * as cache from "../utils/cache.js";
import { enrichUserWithPermissions } from "../utils/permissions.js";
import {
  ServiceCache,
  CACHE_TTL,
  withPerformanceMonitoring,
} from "../utils/serviceUtils.js";

// Initialize service cache
const serviceCache = new ServiceCache("users");

export const getAll = withPerformanceMonitoring(
  "users.getAll",
  async function () {
    return serviceCache.get(
      "all",
      async () => {
        const data = await prisma.user.findMany({
          include: {
            tableAccess: {
              include: {
                table: true,
              },
            },
            alapadatok: true,
          },
        });

        // Enrich each user with permission details
        data.forEach((user) => enrichUserWithPermissions(user));
        return data;
      },
      CACHE_TTL.SHORT
    );
  }
);

export const getByEmail = withPerformanceMonitoring(
  "users.getByEmail",
  async function (email) {
    return serviceCache.get(
      "email",
      async () => {
        const data = await prisma.user.findUnique({
          include: {
            // Only include what's needed for login to optimize query
            tableAccess: {
              include: {
                table: true,
              },
            },
            alapadatok: true,
          },
          where: {
            email: email,
          },
        });

        if (!data) {
          return null;
        }

        // Enrich user with permission details
        enrichUserWithPermissions(data);
        return data;
      },
      CACHE_TTL.MEDIUM,
      email
    );
  }
);

export const getAllFiltered = withPerformanceMonitoring(
  "users.getAllFiltered",
  async function () {
    return serviceCache.get(
      "all:filtered",
      () =>
        prisma.user.findMany({
          select: {
            id: true,
            email: true,
            name: true,
          },
        }),
      CACHE_TTL.SHORT
    );
  }
);

export const create = withPerformanceMonitoring(
  "users.create",
  async function (
    email,
    name,
    password,
    permissions = 1,
    tableAccess = [],
    alapadatok_id = null
  ) {
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      throw new Error("User with this email already exists.");
    }

    const user = await prisma.user.create({
      data: {
        email,
        name,
        password: await hashPassword(password),
        permissions: permissions,
        alapadatokId: alapadatok_id ? Number(alapadatok_id) : null,
      },
    });
    if (tableAccess && tableAccess.length > 0) {
      await Promise.all(
        tableAccess.map(async (access) => {
          const table = await prisma.tableList.findUnique({
            where: { name: access.tableName },
          });

          if (!table) {
            throw new Error(
              `Table with name ${access.tableName} does not exist.`
            );
          }

          prisma.tableAccess.create({
            data: {
              userId: user.id,
              tableId: table.id,
              access: access.access,
            },
          });
        })
      );
    }

    // Smart cache invalidation
    serviceCache.invalidateRelated("create");

    return user;
  }
);

export const update = withPerformanceMonitoring(
  "users.update",
  async function (
    id,
    email,
    name,
    password,
    permissions = 0b00001,
    tableAccess = [],
    alapadatok_id = null
  ) {
    const user = await prisma.user.update({
      where: { id: id },
      data: {
        email,
        name,
        password,
        permissions: Number(permissions),
        alapadatokId: alapadatok_id ? Number(alapadatok_id) : null,
      },
    });
    if (tableAccess && tableAccess.length > 0) {
      await Promise.all(
        tableAccess.map(async (access) => {
          const table = await prisma.tableList.findUnique({
            where: { name: access.tableName },
          });

          if (!table) {
            throw new Error(
              `Table with name ${access.tableName} does not exist.`
            );
          }

          await prisma.tableAccess.upsert({
            where: {
              userId_tableId: {
                userId: user.id,
                tableId: table.id,
              },
            },
            create: {
              userId: user.id,
              tableId: table.id,
              access: access.access,
            },
            update: {
              access: access.access,
            },
          });
        })
      );
    }

    // Smart cache invalidation
    serviceCache.invalidateRelated("update", id);

    return user;
  }
);
