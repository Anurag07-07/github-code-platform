import {PrismaClient} from '@prisma/client'

const createPrismaClient = ()=>{
  return new PrismaClient();
}

const globalPrismaClient = globalThis as unknown as {
  prisma: ReturnType<typeof PrismaClient > | undefined
}

export const db = globalPrismaClient ?? createPrismaClient()

if (process.env.NODE_ENV!=='production') {
  globalPrismaClient.prisma = db;
}