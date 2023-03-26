import { app } from "./app";
import fs from "fs";

const main = async () => {
  const routes = fs.readdirSync("./src/routes");

  for (const route of routes) {
    const { router } = await import(`./routes/${route}`);

    app.use(router);
  }

  app.listen(3000, () => {
    console.log("http://localhost:3000");
  });
};

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
