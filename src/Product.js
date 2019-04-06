import React from "react";
import ProductData from "./Data";
const Product = props => {
  // ----- DON'T MODIFY BELOW -----

  return (
    <div class="ui cards">
      {ProductData.products.map(product => (
        <div class="card">
          <div class="content">
            <div class="header">{product.name}</div>
            <div class="description">Price: ${product.cost}</div>
          </div>
          <div
            class="ui bottom attached button"
            onClick={() => {
              props.onAddToCart.handleAddToCart(product.name, product.cost);
            }}
          >
            <i class="add icon" />
            Add to Cart
          </div>
          <div
            class="ui bottom attached button"
            onClick={() => {
              props.onAddToCart.handleRemoveFromCart(
                product.name,
                product.cost
              );
            }}
          >
            <i class="remove icon" />
            Remove from Cart
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
