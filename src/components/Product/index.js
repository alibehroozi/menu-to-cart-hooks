import React from "react";
import "./Product.css";

function Product({ product: { name, price }, onProductClick }) {
  return (
    <div className="product" onClick={onProductClick}>
      {name} $ {price}
    </div>
  );
}

export default Product;
