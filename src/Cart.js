import React from "react";
import "./styles/cart.css";
import Product from "./Product";
import ProductData from "./Data";

class Cart extends React.Component {
  render() {
    return <Product products={ProductData.products} />;
  }
}

export default Cart;
