import { PrismaClient } from "@prisma/client";

const createPrismaClient = () => {
  return new PrismaClient();
};

const globalPrismaClient = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const db =
  globalPrismaClient.prisma ?? createPrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalPrismaClient.prisma = db;
}