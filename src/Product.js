import React from "react";

const Product = props => {
  // ----- DON'T MODIFY BELOW -----
  var products = {};

  function addToCart(product) {
    var name = product.name;
    if (product.stock == 0) {
      alert("This item is out of stock!");
    } else if (products[name] == undefined) {
      products[name] = 1;
      alert("There are " + products[name] + " " + name + " in your cart!");
    } else {
      if (products[name] + 1 > product.stock) {
        alert("There are too many " + name + "s in your cart!");
      } else {
        products[name] = products[name] + 1;
        alert("There are " + products[name] + " " + name + "s in your cart!");
      }
    }
  }

  return (
    <div class="ui cards">
      {props.products.map(product => (
        <div class="card">
          <div class="content">
            <div class="header">{product.name}</div>
            <div class="description">Price: ${product.cost}</div>
          </div>
          <div
            class="ui bottom attached button"
            onClick={() => {
              addToCart(product);
            }}
          >
            <i class="add icon" />
            Add to Cart
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
