import { json } from "body-parser";
import { Express } from "express";
import { readdir } from "fs/promises";
import path from "path";

export const middlewares = async (app: Express) => {
  app.use(json());

  const routes = await readdir(path.join(__dirname, "..", "routes"));

  for (const route of routes) {
    const filepath = path.join(__dirname, "..", "routes", route);

    const { router } = await import(filepath);

    app.use(router);
  }

  return app;
};
