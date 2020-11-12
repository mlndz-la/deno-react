import { Application } from 'https://deno.land/x/oak/mod.ts';
import html from '../public/html.tsx';
import routes from './routes/routes.ts';

//sort of like express 
const app = new Application();
const port = 8080;

// handle main page
routes.get('/', html);

// allows routes to be used
app.use(routes.routes());
// TODO more research
app.use(routes.allowedMethods());

console.log(`server running on port ${port}`);
await app.listen({ port });
