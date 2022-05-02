import React from "react";
import { Typography, Button, Box } from "@mui/material";

const Card2: React.FC = () => {
  return (
    <Box
      sx={{
        bgcolor: "#e0e0e1",
        height: 300,
        mt: 10,
        overflow: "hidden",
        backgroundImage:
          'url("https://raw.githubusercontent.com/vuestorefront/storefront-ui/develop/packages/vue/public/assets/storybook/SfBanner/Banner2.jpg")',
      }}
    >
      <Box sx={{ ml: 5, mt: 3 }}>
        <Typography>SUMMER SHOES</Typography>
        <Typography sx={{ my: 1, fontWeight: 400 }} variant="h4">
          ECO SANDALS
        </Typography>
        <Typography>
          It is a long established fact that a reader will be distracted by the
        </Typography>
        <Typography paragraph>
          readable content of a page when looking at its layout. The point of
        </Typography>
        <Button
          variant="contained"
          sx={{ bgcolor: "black", mt: 5, "&:hover": { bgcolor: "#333" } }}
        >
          LEARN MORE
        </Button>
      </Box>
    </Box>
  );
};

export default Card2;
