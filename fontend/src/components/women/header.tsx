import React from "react";
import { Box, Typography } from "@mui/material";

const Header: React.FC = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "row" }}>
      <Typography>Women |&nbsp;</Typography>
      <Typography sx={{ fontWeight: 700 }}> Tops</Typography>
    </Box>
  );
};

export default Header;
