import React from "react";
import { Box, Toolbar, Typography, CssBaseline, Avatar } from "@mui/material";

const FAQ: React.FC = () => {
  return (
    <Box
      sx={{
        display: { xs: "none", md: "flex" },
        bgcolor: "#f1f2f3",
        height: 50,
        alignItems: "center",
      }}
    >
      <CssBaseline />
      <Toolbar
        sx={{ width: "100%", display: "flex", justifyContent: "space-between" }}
      >
        <Box>
          <Typography
            href="#"
            component="a"
            sx={{
              color: "black",
              ml: 10,
              fontWeight: 700,
            }}
          >
            Help & FAQs
          </Typography>
        </Box>
        <Box>
          <Typography>
            Download our application. &nbsp;
            <Typography
              sx={{ color: "black", fontWeight: 700 }}
              href="#"
              component="a"
            >
              Find out more
            </Typography>
          </Typography>
        </Box>
        <Box>
          <Avatar sx={{ width: 30, height: 30 }}>N</Avatar>
        </Box>
      </Toolbar>
    </Box>
  );
};

export default FAQ;
