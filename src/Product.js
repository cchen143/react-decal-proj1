import React from "react";

const Product = props => {
  // ----- DON'T MODIFY BELOW -----
  var count = 1;

  function click(product) {
    count += 1;
    return (
      <div
        class="ui bottom attached button"
        onClick={() => {
          click(product);
        }}
      >
        <i class="add icon" />
        Add to Cart
      </div>
    );
  }

  function addToCart(product) {
    var name = product.name;
    if (count > 1) name = name + "s";
    if (count > product.stock) {
      alert("There are too many " + name + "s in your cart!");
    } else {
      alert("There are " + count + " " + name + " in your cart!");
    }
    count = 1;
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
              click();
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
