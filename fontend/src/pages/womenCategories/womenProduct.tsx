import React from "react";
import { Box, Container } from "@mui/material";
import Header from "../../components/women/header";
import Selector from "../../components/women/selector";
import ProductWomen from "../../components/women/productWomen";

const WomenProduct: React.FC = () => {
  return (
    <Box>
      <Container>
        <Header />
        <Selector />
        <ProductWomen />
      </Container>
    </Box>
  );
};

export default WomenProduct;
