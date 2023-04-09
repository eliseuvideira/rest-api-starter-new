import { middlewares } from "./functions/middlewares";
import { app } from "./utils/app";

const main = async () => {
  await middlewares(app);

  app.listen(3000, () => {
    console.log("http://localhost:3000");
  });
};

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
