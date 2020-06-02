/*
    1) npm install typescript -D
    2) create config file for TS => npx tsc --init
*/

/*
- when using TS, we must specify not only the library but also the definition (infos about
    all of the functions that exist in express, all the returns, parameters etc);
- there are libraries that separate into two libraries (one definition of types, other the code);

npm install @types/express
*/

import express from "express";
import routes from "./routes";
import path from "path";

const app = express();

app.use(express.json());
app.use(routes);

app.use("/uploads", express.static(path.resolve(__dirname, "..", "uploads")));

app.listen(3333);

/**
 * node src/server.ts is not going to work, because node only understands JS (this is a TS script)
 * add other package => npm install ts-node -D
 * npx executes a package that you've installed
 * so, to run the app => npx ts-node src/server.ts
 */

/**
 * Add NODEMON for hot reloading
 * npm install ts-node-dev -D
 * Add "dev": "ts-node-dev src/server.ts" in package.json file => npm run dev
 */
