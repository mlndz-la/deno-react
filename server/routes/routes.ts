import { Router } from "https://deno.land/x/oak/mod.ts";

const routes = new Router();

// routes
routes
  .get('/api/data', (ctx: any) => {
    ctx.response.body = { test: 11 };
  })

export default routes;