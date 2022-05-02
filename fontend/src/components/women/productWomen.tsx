import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Grid, Typography, Container, Rating } from "@mui/material";
import { motion } from "framer-motion";
// import { useHistory } from "react-router-dom";

interface ProductProps {
  product_id: string;
  product_name: string;
  product_price: number;
  product_img: string;
}

const ProductWomen: React.FC = () => {
  const [product, setProduct] = useState<ProductProps[]>([]);

  const loadPage = async () => {
    const res = await axios.get("http://localhost:8000/api/product/data");
    setProduct(res.data);
  };

  useEffect(() => {
    loadPage();
  }, []);

  return (
    <Box>
      <Container sx={{ minHeight: 800 }}>
        <Grid container>
          {product.map((item) => {
            return (
              <Grid item md={3} key={item.product_id} sx={{ mt: 1 }}>
                <motion.div whileHover={{ opacity: 0.5 }}>
                  <img src={item.product_img} width="200" height="300" alt="" />
                </motion.div>
                <Typography sx={{ mt: 2.5 }}>{item.product_name}</Typography>
                <Typography>$ {item.product_price}</Typography>
                <Typography>
                  <Rating
                    name="disabled"
                    value={4}
                    disabled
                    sx={{ mr: 1, color: "#5ece7b" }}
                  />
                  (4)
                </Typography>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default ProductWomen;
