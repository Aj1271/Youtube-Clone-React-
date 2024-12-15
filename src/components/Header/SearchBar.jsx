import React from "react";
import "./SearchBar.css";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search" className="search-input" />
      <i className="fa-solid fa-magnifying-glass search-icon"></i>
      <i className="fa-solid fa-microphone voice-icon"></i>
    </div>
  );
};

export default SearchBar;

