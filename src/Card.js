import React from 'react'

function Card  ({ productName, shortDescription })  {
    return (
      <div>
        <h3>{productName}</h3>
        <p>{shortDescription}</p>
      </div>
    );
  };
export default Card