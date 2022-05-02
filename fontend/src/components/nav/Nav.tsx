import React from "react";
import { Box, Tab, CssBaseline } from "@mui/material";
import { TabContext, TabList } from "@mui/lab";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "@fontsource/roboto/300.css";
import { AiFillShopping } from "react-icons/ai";
import Search from "./searchTab";
import { searchStore, wordSearch } from "../../stores/searchStore";
import { TabStoreImpl } from "../../stores/tabStore";
import { SearchStoreImpl } from "../../stores/searchStore";
import { observer } from "mobx-react";

interface NavProps {
  mainTabStore: TabStoreImpl;
  mainSearchStore: SearchStoreImpl;
}

const theme = createTheme({
  palette: {
    secondary: {
      main: "#5ece7b",
    },
  },
});

const Nav: React.FC<NavProps> = observer(
  ({ mainTabStore, mainSearchStore }) => {
    const [value, setValue] = React.useState("1");

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
      setValue(newValue);
      mainTabStore.changeTab(newValue);
    };

    return (
      <Box
        sx={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          bgcolor: "white",
          opacity: 0.95,
        }}
      >
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box sx={{ display: "flex" }}>
            <Box sx={{ flexGrow: 1, ml: 5 }}>
              <TabContext value={value}>
                <TabList
                  onChange={handleChange}
                  textColor="secondary"
                  indicatorColor="secondary"
                  aria-label="secondary tabs example"
                >
                  <Box sx={{ display: "flex", alignItems: "center", mr: 2 }}>
                    <AiFillShopping color="#5ece7b" size="30" />
                  </Box>
                  <Tab
                    value="1"
                    label="Home"
                    sx={{ fontWeight: 700 }}
                    onClick={() => mainSearchStore.clickSearch(false)}
                  />
                  <Tab
                    value="2"
                    label="Women"
                    sx={{ fontWeight: 700 }}
                    onClick={() => mainSearchStore.clickSearch(false)}
                  />
                  <Tab
                    value="3"
                    label="Men"
                    sx={{ fontWeight: 700 }}
                    onClick={() => mainSearchStore.clickSearch(false)}
                  />
                  <Tab
                    value="4"
                    label="Kids"
                    sx={{ fontWeight: 700 }}
                    onClick={() => mainSearchStore.clickSearch(false)}
                  />
                </TabList>
              </TabContext>
            </Box>
            <Box sx={{ mt: 1, mr: 5 }}>
              <Search searchStore={searchStore} wordSearch={wordSearch} />
            </Box>
          </Box>
        </ThemeProvider>
      </Box>
    );
  }
);

export default Nav;
