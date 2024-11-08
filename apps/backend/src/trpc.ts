import { initTRPC, inferAsyncReturnType } from "@trpc/server";
import * as trpcExpress from "@trpc/server/adapters/express";
import { helloRouter } from "./routers/hello";

export const createContext = ({
  req,
  res,
}: trpcExpress.CreateExpressContextOptions) => ({}); // no context

export type Context = inferAsyncReturnType<typeof createContext>;
export const t = initTRPC.context<Context>().create();

export const createTRPCRouter = t.router;
export const middleware = t.middleware;
export const publicProcedure = t.procedure;
export const mergeRouters = t.mergeRouters;
