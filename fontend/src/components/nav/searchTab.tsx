import React from "react";
import {
  Box,
  IconButton,
  TextField,
  InputAdornment,
  Container,
  Badge,
} from "@mui/material";
import { BsSearch, BsCart2 } from "react-icons/bs";
import { RiAccountCircleLine } from "react-icons/ri";
import { FcLike } from "react-icons/fc";
import { SearchStoreImpl } from "../../stores/searchStore";
import { observer } from "mobx-react";

interface SearchProps {
  searchStore: SearchStoreImpl;
  wordSearch: SearchStoreImpl;
}

const Search: React.FC<SearchProps> = observer(
  ({ searchStore, wordSearch }) => {
    return (
      <Container>
        <Box sx={{ display: "flex" }}>
          <TextField
            onClick={() => searchStore.clickSearch(true)}
            onChange={(e) => wordSearch.wordOnChange(e.target.value)}
            variant="standard"
            placeholder="Search for items"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <BsSearch />
                </InputAdornment>
              ),
            }}
            sx={{ mr: 2, color: "black" }}
          />
          <IconButton>
            <RiAccountCircleLine size="20" />
          </IconButton>
          <IconButton>
            <Badge badgeContent={5} color="error">
              <FcLike size="20" />
            </Badge>
          </IconButton>
          <IconButton>
            <Badge badgeContent={5} color="error">
              <BsCart2 size="20" />
            </Badge>
          </IconButton>
        </Box>
      </Container>
    );
  }
);

export default Search;
