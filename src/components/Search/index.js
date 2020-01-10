import React from "react";

import "./style.css";

const Search = () => {
  return (
    <div className="inputRoot">
      <p style={{ fontSize: "1.3rem", fontWeight: "bold" }}>Location:</p>
      <form>
        <div className="searchFieldRoot">
          <input
            className="searchfield"
            type="text"
            placeholder="Type Amsterdam..."
          />
          <button className="btn" type="submit">
            Set
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;
