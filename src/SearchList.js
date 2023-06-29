import React from "react";
import Card from "./Card";

function SearchList({ filteredProducts }) {
  const products = filteredProducts.map((name) => (
    <Card key={name.id} {...name} />
  ));
  return <div className="product-list">{products}</div>;
}

export default SearchList;
