import React, { Component } from "react";
import Product from "./product";

class ShoppingCart extends Component {
  render() {
    // destruction {onReset , OnDelete , Product} from props , to getover from repeating this.props
    const { products, onReset, onDelete, onIncreament } = this.props;
    return (
      <div>
        <h1>Shopping Cart</h1>
        <button onClick={onReset} className="btn btn-primary">
          Reset
        </button>
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            onDelete={onDelete}
            onIncreament={onIncreament}
          />
        ))}
      </div>
    );
  }
}

export default ShoppingCart;
