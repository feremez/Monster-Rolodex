import React from "react";
import "./search-box-style.css";

const SearchBox = ({ onChangeHandler, placeholder, className }) => (
  <input
    type="search"
    placeholder={placeholder}
    className={` search-box ${className}`}
    onChange={onChangeHandler}
  />
);

export default SearchBox;
