import React from "react";

function Card({ productName, shortDescription, stocks, properties }) {
  return (
    <div className="product-card">
      <h3 className="product-name">{productName}</h3>
      <p className="product-short-desc">Description: {shortDescription}</p>
      <div className="product-props">
        <p>
          Size: {properties[0].value} Color: 
        </p>
        {
          properties[1].value ?
          (<div
          style={{ background: `${properties[1].value}` }}
          className="product-color"
          ></div>) : <p>No color</p>
        }
      </div>
      <p className="product-price">Price: {stocks[0].sellPrice.USD} $</p>
    </div>
  );
}
export default Card;
