import React from "react";
import Card from "./Card";

function SearchList({ filteredPersons }) {
  const products = filteredPersons.map((name) => (
    <Card key={name.id} {...name} />
  ));
  return <div>{products}</div>;
}

export default SearchList;
