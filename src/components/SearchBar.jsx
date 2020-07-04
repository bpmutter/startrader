import React from 'react';
import Input from "./Input";
import {Button} from 'arwes';
import { FaSearch } from "react-icons/fa";

const SearchBar = () => { 
    const style = {
      searchBar: {
        display: "flex",
        alignItems: "center",
        searchButton: {
          paddingLeft: ".5rem",
        },
      },
    };
    return (
      <div style={style.searchBar}>
        <Input width={300} type={"search"} />
        <Button style={style.searchBar.searchButton}>
          <FaSearch />
        </Button>
      </div>
    );
}
export default SearchBar;