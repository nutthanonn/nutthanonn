import React from "react";
import { Box, Typography, Grid, Rating } from "@mui/material";
import { productData } from "../../api/productApi";

const Product: React.FC = () => {
  return (
    <Box>
      <Typography sx={{ fontWeight: 700 }}>Product Suggestions</Typography>
      <Grid container sx={{ mt: 3 }}>
        {productData.map((item) => {
          return (
            <Grid item key={item.productId} md={4} sx={{ mt: 2 }}>
              <Box component="img" src={item.productImage} />
              <Typography sx={{ mt: 2.5 }}>{item.productComment}</Typography>
              <Typography>$ {item.productPrice}</Typography>
              <Typography>
                <Rating
                  name="disabled"
                  value={item.productRate}
                  disabled
                  sx={{ mr: 1, color: "#5ece7b" }}
                />
                (8)
              </Typography>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Product;
