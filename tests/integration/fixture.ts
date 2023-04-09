import { app } from "../../src/utils/app";
import { middlewares } from "../../src/functions/middlewares";

beforeAll(async () => {
  await middlewares(app);
});
