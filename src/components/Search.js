import React from "react";

function Search({handleSearch, search, onSubmit}) {
  function handleSubmit(e) {
    e.preventDefault();
    onSubmit();
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={search}
        onChange={handleSearch}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
