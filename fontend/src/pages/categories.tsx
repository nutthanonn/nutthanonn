import React from "react";
import Asite from "../components/categories/Asite";
import Product from "../components/categories/product";
import { Box, Grid } from "@mui/material";
import { motion } from "framer-motion";

const Categories: React.FC = () => {
  return (
    <Box>
      <Grid container>
        <Grid item md={3}>
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
          >
            <Asite />
          </motion.div>
        </Grid>
        <Grid item md={8}>
          <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Product />
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Categories;
