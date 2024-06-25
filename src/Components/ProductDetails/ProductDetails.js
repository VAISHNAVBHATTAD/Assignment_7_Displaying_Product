import React from "react";

const ProductDetails = ({ product }) => {
    return (
      <div className="product-details">
        <h2>{product.name}</h2>
        <p>{product.price}</p>
        <p>{product.description}</p>
      </div>
    );
  };
  
  export default ProductDetails;
