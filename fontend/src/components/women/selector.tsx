import React from "react";
import {
  Box,
  Grid,
  Typography,
  Divider,
  FormControl,
  MenuItem,
  Select,
} from "@mui/material";
import { MdFilterList } from "react-icons/md";
import { ImLocation } from "react-icons/im";

const Selector: React.FC = () => {
  const [age, setAge] = React.useState<string>("");

  const handleChange = (event: any) => {
    setAge(event.target.value);
  };

  return (
    <Box>
      <Divider sx={{ my: 1 }} />
      <Grid container>
        <Grid
          item
          md={10}
          sx={{ display: "flex", flexDirection: "row", my: "auto" }}
        >
          <MdFilterList />
          <Typography sx={{ textDecoration: "underline", ml: 1, mr: 20 }}>
            Filters
          </Typography>
          <Typography sx={{ mr: 1 }}>Sort by:</Typography>
          <Box sx={{ mr: 20, maxHeight: 30 }}>
            <FormControl variant="standard" sx={{ minWidth: 120 }}>
              <Select value={age} onChange={handleChange} label="Age">
                <MenuItem value={10}>LOW TO HIGH</MenuItem>
                <MenuItem value={20}>HIGH TO LOW</MenuItem>
                <MenuItem value={30}>LASTED</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <ImLocation color="#5ece7b" />
          <Typography variant="body2" sx={{ textDecoration: "underline" }}>
            Pick up today at Broadway
          </Typography>
        </Grid>
        <Grid item md={2}>
          <Typography sx={{ ml: 4 }}>Product found : 6</Typography>
        </Grid>
      </Grid>
      <Divider sx={{ my: 1 }} />
    </Box>
  );
};

export default Selector;
