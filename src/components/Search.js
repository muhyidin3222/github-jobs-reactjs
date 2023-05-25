import React from "react";

const Search = ({ setSearchKeyword }) => {
  return (
    <div className="header-container">
      <ul>
        <input type="text" className="input-text" onChange={(e) => setSearchKeyword(e.target.value)} />
      </ul>
    </div>
  );
};

export default Search;
