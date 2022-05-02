import { createConnection } from "typeorm";
import express from "express";
import { Product } from "./entities/product";
import { fetchProductRouter } from "./routes/fetch_product";
import { createProductRouter } from "./routes/create_product";

const app = express();

const main = async () => {
  try {
    await createConnection({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "postgres",
      password: "postgres",
      database: "postgres",
      entities: [Product],
    });
    app.use(express.json());
    app.use(fetchProductRouter);
    app.use(createProductRouter);

    console.log("Successfully !!!");
    app.listen(8000, () => {
      console.log("Running on port 8000");
    });
  } catch (error) {
    console.log("Error to connect");
  }
};

main();
