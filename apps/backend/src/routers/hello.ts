import { publicProcedure, createTRPCRouter } from "~/trpc";

export const helloRouter = createTRPCRouter({
  world: publicProcedure.query(() => {
    return "world";
  }),
});
