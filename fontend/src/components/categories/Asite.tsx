import React from "react";
import { Box, Typography, Divider, Grid } from "@mui/material";
import "@fontsource/roboto/300.css";

const Asite: React.FC = () => {
  return (
    <Grid container sx={{ ml: 5 }}>
      <Grid md={8} item>
        <Typography sx={{ fontWeight: 700 }}>Categories</Typography>
        <Box sx={{ mt: 5 }}>
          <Typography
            sx={{
              "&:hover": { textDecoration: "underline", cursor: "pointer" },
            }}
            component="span"
          >
            Tees
          </Typography>
        </Box>
        <Typography
          sx={{
            "&:hover": { textDecoration: "underline", cursor: "pointer" },
          }}
          component="span"
        >
          Shorts
        </Typography>
      </Grid>
      <Grid item md={2}>
        <Divider orientation="vertical" flexItem sx={{ height: 700 }} />
      </Grid>
    </Grid>
  );
};

export default Asite;
