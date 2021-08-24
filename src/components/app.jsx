import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Home from "./home";
import NavBar from "./navBar";
import Meun from "./menu";
import ShoppingCart from "./shoppingCart";
import Login from "./login";
import ProductDetails from "./productDetails";
import NotFound from "./notFound";
import About from "./about";
import Contact from "./contact";

class App extends Component {
  state = {
    // update state to check if product is in cart or not
    products: [
      { id: 1, name: "Burger", count: 1, price: 50, inCart: false },
      { id: 2, name: "Cola", count: 1, price: 50, inCart: false },
      { id: 3, name: "Checken", count: 1, price: 50, inCart: false },
    ],
  };

  // handel delete at first to delete item from shopping cart
  // handelDelete = (product) => {
  //   // clone
  //   // Edit
  //   const newProduct = this.state.products.filter((p) => p.id !== product.id);
  //   // setState
  //   this.setState({ products: newProduct });
  // };

  handelReset = () => {
    // Clone
    let products = [...this.state.products];
    // Edit
    products.map((p) => {
      p.count = 0;
      return p;
    });
    this.setState({ products });
  };

  handelIcncreament = (product) => {
    const products = [...this.state.products];
    const index = products.indexOf(product);
    products[index] = { ...products[index] };
    products[index].count++;
    this.setState({ products });
  };

  // change value of InCart in state
  handelInCart = (product) => {
    // 1- clone state products
    const products = [...this.state.products];
    const index = products.indexOf(product);
    // 2-Deap clone for object
    products[index] = { ...products[index] };
    // 3- update state
    products[index].inCart = !products[index].inCart;
    // 4-setState
    this.setState({ products });
  };

  render() {
    return (
      <React.Fragment>
        {/* passing num of product that are inCart : true */}
        <NavBar
          // productCount={this.state.products.filter((p) => p.count > 0).length}
          productCount={this.state.products.filter((p) => p.inCart).length}
        />

        <main className="container">
          {/* wrapping Rout within switch to avoide render 2 component in same page
              switch will return the first Route that match URL */}
          <Switch>
            {/* <Route path="/cart" component={ShoppingCart} /> */}
            {/* ShoppingCart attr don't pass within component , So we have to use render insteadof component */}
            {/* passing props to ShoppingCart to allow Route inject 3props (History , Location, Match)*/}
            {/* Cause this props don't get inject due to render instead of component */}
            <Route
              path="/cart"
              render={(props) => (
                <ShoppingCart
                  // this line responsabile for when click on add to cart , item appare in shoppingcart
                  products={this.state.products.filter((p) => p.inCart)}
                  // for Menu update
                  onDelete={this.handelInCart}
                  onReset={this.handelReset}
                  onIncreament={this.handelIcncreament}
                  {...props}
                />
              )}
            />

            <Route
              path="/menu"
              render={(props) => (
                <Meun
                  {...props}
                  products={this.state.products}
                  onClick={this.handelInCart}
                />
              )}
            />

            {/* passing parameter to Route /product/:id */}
            {/* To render the acutal product detailes we need to pass Product obj to productDetailes */}
            <Route
              path="/product/:id"
              render={(props) => (
                <ProductDetails products={this.state.products} {...props} />
              )}
            />

            <Route path="/login" component={Login} />

            <Route path="/notFound" component={NotFound} />

            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            {/* <Route path="/" exact component={Home} />
            <Redirect from="/home" to="/" /> */}
            <Route path="/home" component={Home} />
            <Redirect from="/" to="/home" />
            <Redirect to="/notFound" />
          </Switch>

          {/* instead of render shoppingCart , we will Render component in path using <Route /> */}
          {/* <ShoppingCart
            products={this.state.products}
            onDelete={this.handelDelete}
            onReset={this.handelReset}
            onIncreament={this.handelIcncreament}
          /> */}
        </main>
      </React.Fragment>
    );
  }
}

export default App;
