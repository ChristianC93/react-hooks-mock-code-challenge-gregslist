import React, {useEffect, useState} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredListings, setFilteredListings] = useState([]);
  
  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then((resp) => resp.json())
    .then((listings) => setListings(listings))
  }, [])

  function onDeleteListing(deletedListing) {
    const updatedListings = listings.filter((listing) => listing.id !== deletedListing.id);
    setListings(updatedListings);
  }

  function onSearchChange(e) {
    setSearch(e.target.value)
  }

  function onSubmit() {
    const searchListings = listings.filter((listing) => listing.description.toLowerCase().includes(search));
    setFilteredListings(searchListings);
  }

  const ads = filteredListings.length > 0 ? filteredListings : listings

  return (
    <div className="app">
      <Header handleSearch={onSearchChange} search={search} onSubmit={onSubmit} />
      <ListingsContainer listings={ads} onDelete={onDeleteListing} />
    </div>
  );
}

export default App;
