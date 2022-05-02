import { Container, Box, Typography, Button } from "@mui/material";
import Card2 from "./card2";

const CardComponent = () => {
  return (
    <Container>
      <Box
        sx={{
          bgcolor: "#e0e0e1",
          height: 300,
          mt: 10,
          overflow: "hidden",
          backgroundImage:
            "url('https://raw.githubusercontent.com/vuestorefront/storefront-ui/develop/packages/vue/public/assets/storybook/SfBanner/Banner1.jpg')",
        }}
      >
        <Box sx={{ ml: 60, mt: 4 }}>
          <Typography>SUMMER SHOES</Typography>
          <Typography sx={{ my: 1, fontWeight: 400 }} variant="h4">
            ECO SANDALS
          </Typography>
          <Typography>
            It is a long established fact that a reader will be distracted by
            the
          </Typography>
          <Typography>
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

      <Card2 />
      <Box
        sx={{
          bgcolor: "#43464e",
          height: 200,
          mt: 10,
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography color="white" variant="h4">
            Subscribe to Newsletters
          </Typography>
          <Typography color="white" sx={{ mt: 2 }}>
            Beware of upcoming sales and events. Recive gifts and special
            offers!
          </Typography>
        </Box>
        <Box>
          <Button
            variant="contained"
            sx={{
              bgcolor: "#5ece7b",
              fontWeight: 700,
              "&:hover": { bgcolor: "#9ee2b0" },
            }}
            size="large"
          >
            SUBSCRIBE
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default CardComponent;
