import React from "react";

import "./style.css";
import globe from "../../assets/images/globe.png";
const SearchCountry = ({ setKeyword, search }) => {
  return (
    <div className="input-group">
      <img className="logo" src={globe} alt="Loading" />
      <input
        onChange={(e) => {
          setKeyword(e.target.value);
        }}
        value={search}
        type="text"
        className="form-control"
        placeholder="Search Country"
  
      />
    </div>
  );
};

export default SearchCountry;
