import express from "express";
import { Product } from "../entities/product";

const router = express.Router();

router.post("/api/product", async (req, res) => {
  const { product_name, product_price, product_img } = req.body;

  const product = Product.create({
    product_name: product_name,
    product_price: product_price,
    product_img: product_img,
  });

  await product.save();

  return res.json(product);
});

export { router as createProductRouter };
