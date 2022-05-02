import React from "react";
import Error from "./error";
import Home from "./Home";
import Categories from "../pages/categories";
import WomenProduct from "./womenCategories/womenProduct";
import { TabPanel, TabContext } from "@mui/lab";
import { Box } from "@mui/material";
import { observer } from "mobx-react";
import { TabStoreImpl } from "../stores/tabStore";
import { SearchStoreImpl } from "../stores/searchStore";

interface mainTabProps {
  tabStore: TabStoreImpl;
  searchStore: SearchStoreImpl;
}

const Main: React.FC<mainTabProps> = observer(({ tabStore, searchStore }) => {
  return (
    <Box>
      <TabContext value={tabStore.tabStore}>
        <TabPanel value="1">
          {searchStore.searchState ? <Categories /> : <Home />}
        </TabPanel>
        <TabPanel value="2">
          {searchStore.searchState ? <Categories /> : <WomenProduct />}
        </TabPanel>
        <TabPanel value="3">
          {searchStore.searchState ? <Categories /> : <Error />}
        </TabPanel>
        <TabPanel value="4">
          {searchStore.searchState ? <Categories /> : <Error />}
        </TabPanel>
      </TabContext>
    </Box>
  );
});
export default Main;
