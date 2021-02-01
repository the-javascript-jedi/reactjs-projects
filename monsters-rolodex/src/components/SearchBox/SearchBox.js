import React from "react";
import "./searchBox.css";
const SearchBox = ({ placeHolder, handleChange }) => {
  return (
    <div>
      <input type="search" placeholder={placeHolder} onChange={handleChange} />
    </div>
  );
};

export default SearchBox;
