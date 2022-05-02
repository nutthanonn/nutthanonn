import React from "react";
import { Container, Box } from "@mui/material";
import CarouselSlide from "../components/home/carouselSlide";
import CardComponent from "../components/home/card";
import { motion } from "framer-motion";

const Home: React.FC = () => {
  return (
    <Box>
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.5 }}
      >
        <Container>
          <CarouselSlide />
          <CardComponent />
        </Container>
      </motion.div>
    </Box>
  );
};

export default Home;
