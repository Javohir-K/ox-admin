import React, { useState } from "react";
import SearchList from "./SearchList";

function Search({ details }) {
  const [searchField, setSearchField] = useState("");

  const filteredProducts = details.filter((product) => {
    return product.productName
      .toLowerCase()
      .includes(searchField.toLowerCase());
  });

  const handleChange = (e) => {
    setSearchField(e.target.value);
  };

  function searchList() {
    return <SearchList filteredProducts={filteredProducts} />;
  }

  return (
    <section className="search-container">
      <div className="search-title">
        <h2>Search your product</h2>
        <div className="search-input">
          <input
            type="search"
            placeholder="Search..."
            onChange={handleChange}
          />
        </div>
      </div>
      {searchList()}
    </section>
  );
}

export default Search;
