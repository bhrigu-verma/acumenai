import { PrismaClient} from "@prisma/client";
declare global {
  var prisma: PrismaClient| undefined ;
}
/**
 * The Prisma client instance.
 * If `globalThis.prisma` is defined, it will be used as the client.
 * Otherwise, a new instance of `PrismaClient` will be created.
 */
export const client = globalThis.prisma || new PrismaClient();
if (process.env.NODE_env !=='production')   globalThis.prisma = client;