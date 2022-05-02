import React from "react";
import wind from "../images/wind.png";
import { Box, Typography } from "@mui/material";

const Error: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: 600,
      }}
    >
      <Box>
        <img src={wind} alt="" width="100" height="100" />
      </Box>
      <Box sx={{ mt: 10 }}>
        <Typography variant="h3">We can't find the page</Typography>
        <Typography variant="body2" sx={{ textAlign: "center" }}>
          Unfortunately we cant find the page you are looking for.
        </Typography>
      </Box>
    </Box>
  );
};

export default Error;
