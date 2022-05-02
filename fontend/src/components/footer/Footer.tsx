import React from "react";
import { Box, Grid, Typography, IconButton } from "@mui/material";
import {
  FaFacebookF,
  FaPinterestP,
  FaGooglePlusG,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";
import "../../App.css";

const Footer: React.FC = () => {
  return (
    <Box
      sx={{
        height: 400,
        bgcolor: "#43464E",
        display: { xs: "none", md: "flex" },
      }}
    >
      <Box sx={{ mx: "auto", width: 1000 }}>
        <Grid container sx={{ mt: 5, color: "white" }}>
          <Grid item md={3}>
            <Typography sx={{ fontWeight: 700 }}>ABOUT US</Typography>
            <Typography sx={{ mt: 4, cursor: "pointer" }} className="footer">
              Who we are
            </Typography>
            <Typography sx={{ mt: 1.5, cursor: "pointer" }} className="footer">
              Quality in the details
            </Typography>
            <Typography sx={{ mt: 1.5, cursor: "pointer" }} className="footer">
              Custumer Reviews
            </Typography>
            <Typography sx={{ mt: 8, fontWeight: 700 }}>SOCIAL</Typography>
            <Box sx={{ display: "flex", flexDirection: "row", mt: 1.5 }}>
              <IconButton sx={{ mr: 0.5 }}>
                <FaFacebookF color="#3f51b5" />
              </IconButton>
              <IconButton sx={{ mr: 0.5 }}>
                <FaPinterestP color="#E60023" />
              </IconButton>
              <IconButton sx={{ mr: 0.5 }}>
                <FaGooglePlusG color="#4285F4" />
              </IconButton>
              <IconButton sx={{ mr: 0.5 }}>
                <FaTwitter color="#00acee" />
              </IconButton>
              <IconButton sx={{ mr: 0.5 }}>
                <FaGithub />
              </IconButton>
            </Box>
          </Grid>
          <Grid item md={3}>
            <Typography sx={{ fontWeight: 700 }}>DEPARTMENTS</Typography>
            <Typography sx={{ mt: 4, cursor: "pointer" }} className="footer">
              Women fashion
            </Typography>
            <Typography sx={{ mt: 1.5, cursor: "pointer" }} className="footer">
              Kidswear
            </Typography>
            <Typography sx={{ mt: 1.5, cursor: "pointer" }} className="footer">
              Home
            </Typography>
          </Grid>
          <Grid item md={3}>
            <Typography sx={{ fontWeight: 700 }}>HELP</Typography>
            <Typography sx={{ mt: 4, cursor: "pointer" }} className="footer">
              Customer Service
            </Typography>
            <Typography sx={{ mt: 1.5, cursor: "pointer" }} className="footer">
              Size guide
            </Typography>
            <Typography sx={{ mt: 1.5, cursor: "pointer" }} className="footer">
              Contact us
            </Typography>
          </Grid>
          <Grid item md={3}>
            <Typography sx={{ fontWeight: 700 }}>
              PAYMENTS & DELIVERY
            </Typography>
            <Typography sx={{ mt: 4, cursor: "pointer" }} className="footer">
              Purchases terms
            </Typography>
            <Typography sx={{ mt: 1.5, cursor: "pointer" }} className="footer">
              Guarantee
            </Typography>
            <Typography sx={{ mt: 1.5, cursor: "pointer" }} className="footer">
              Contact us
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Footer;
