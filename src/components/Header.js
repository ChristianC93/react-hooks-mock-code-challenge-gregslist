import React from "react";
import Search from "./Search";

function Header({handleSearch, search, onSubmit}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search handleSearch={handleSearch} search={search} onSubmit={onSubmit}/>
    </header>
  );
}

export default Header;
