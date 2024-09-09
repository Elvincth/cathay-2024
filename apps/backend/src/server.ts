import express from "express";
import cors from "cors";
import { createContext, createTRPCRouter } from "./trpc";
import { createExpressMiddleware } from "@trpc/server/adapters/express";
import "dotenv/config";
import { helloRouter } from "./routers/hello";
import { env } from "~/env";

export const appRouter = createTRPCRouter({
  hello: helloRouter,
});

export type AppRouter = typeof appRouter;

const app = express();

app.use(cors());

app.use(
  "/trpc",
  createExpressMiddleware({
    router: appRouter,
    createContext,
    onError: console.log,
  })
);

app.listen(env.PORT, () => {
  console.log(`🚀 Server ready at http://localhost:${env.PORT}/trpc`);
});
