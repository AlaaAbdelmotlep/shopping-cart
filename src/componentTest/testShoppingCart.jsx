import React, { Component } from "react";
import Product from "./product";

class TestShoppingCart extends Component {
  state = {
    products: [
      { id: 1, name: "Burger", count: 2 },
      { id: 2, name: "Cola", count: 4 },
      { id: 3, name: "Checken", count: 3 },
    ],
  };

  //  to ensure that it return the clicked product
  //  handelDelete = (product) => {
  //      console.log(product);
  //  }

  //  handling delete function
  handelDelete = (product) => {
    // in order to change state these are important steps
    // clone
    // Edit
    // we want to return unClicked product , using filter
    // (p) refare to any item in array
    // product refare to product gets from 'onDelete(this.props.product)'
    const newProduct = this.state.products.filter((p) => p.id !== product.id);
    // setState
    this.setState({ products: newProduct });
  };

  // handling Reset function
  handelReset = () => {
    // update state

    // Clone
    let products = [...this.state.products];
    // Edit
    products.map((p) => {
      p.count = 0;
      return p;
    });
    // set state
    // this.setState({ products : products })
    // instead of typing products twise
    this.setState({ products });
  };

  // handle increament function
  handelIcncreament = (product) => {
    // Test thaat we can access product
    // console.log(product);

    // Update state
    // Clone
    // 1- we need to clone array first
    // 2- need the index of product using indexOf method
    // 3- colne the product[index] object
    const products = [...this.state.products];
    const index = products.indexOf(product);
    products[index] = { ...products[index] };
    // Edit
    products[index].count++;
    // setState
    this.setState({ products });
  };

  render() {
    return (
      <div>
        <h1>Shopping Cart</h1>

        {/* reser btn */}
        <button onClick={this.handelReset} className="btn btn-primary">
          Reset
        </button>

        {/* implement products into <Product /> */}
        {this.state.products.map((product) => (
          // passing data to component
          // product (attribute) = {product} (parameter)
          // once onDelete={this.handelDelete} , props will own it
          <Product
            key={product.id}
            product={product}
            onDelete={this.handelDelete}
            onIncreament={this.handelIcncreament}
          >
            {/* passing Children to Component */}
            {/* <h1>{product.id}</h1> */}
          </Product>
        ))}
      </div>
    );
  }
}

export default TestShoppingCart;
