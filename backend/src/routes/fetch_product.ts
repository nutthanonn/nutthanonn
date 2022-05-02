import express from "express";
import { Product } from "../entities/product";
import { getConnection } from "typeorm";

const router = express.Router();

router.get("/api/product/data", async (req, res) => {
  const product = await getConnection()
    .createQueryBuilder()
    .select("product")
    .from(Product, "product")
    .getMany();

  return res.json(product);
});

export { router as fetchProductRouter };
