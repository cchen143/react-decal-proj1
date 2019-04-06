import React from "react";
import "./styles/cart.css";
import Product from "./Product";
import Receipt from "./Receipt.jsx";

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: []
    };
  }

  handleAddToCart(name, cost) {
    var index = this.state.cartItems.findIndex(function(element) {
      return element.productName === name && element.price === cost;
    });
    if (index === -1) {
      var item = { productName: name, price: cost, count: 1 };
      this.setState({
        cartItems: this.state.cartItems.concat([item])
      });
    } else {
      let cartItems = [...this.state.cartItems];
      cartItems[index].productName = name;
      cartItems[index].price = cost;
      cartItems[index].count = this.state.cartItems[index].count + 1;
      this.setState({ cartItems });
    }
  }

  handleRemoveFromCart(name, cost) {
    var index = this.state.cartItems.findIndex(function(element) {
      return element.productName === name && element.price === cost;
    });
    if (this.state.cartItems[index].count === 1) {
      var cartItems = [...this.state.cartItems];
      cartItems = cartItems.filter(
        item => item.productName !== name && item.price !== cost
      );
      this.setState({ cartItems });
    } else {
      let cartItems = [...this.state.cartItems];
      cartItems[index].productName = name;
      cartItems[index].price = cost;
      cartItems[index].count = this.state.cartItems[index].count - 1;
      this.setState({ cartItems });
    }
  }

  render() {
    return (
      <div class="main">
        <div class="products">
          <Product onAddToCart={this} />
        </div>
        <div class="receipt">
          <Receipt items={this.state.cartItems} />
        </div>
      </div>
    );
  }
}

export default Cart;
