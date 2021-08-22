import React, { Component } from "react";
import NavBar from "./navBar";
import { Route, Switch, Redirect } from "react-router-dom";
import ShoppingCart from "./shoppingCart";
import About from "./about";
import Home from "./home";
import Contact from "./contact";
import ProductDetails from "./productDetails";
import NotFound from "./notFound";
class App extends Component {
  state = {
    products: [
      { id: 1, name: "Burger", count: 2 },
      { id: 2, name: "Cola", count: 4 },
      { id: 3, name: "Checken", count: 3 },
    ],
  };

  handelDelete = (product) => {
    // clone
    // Edit
    const newProduct = this.state.products.filter((p) => p.id !== product.id);
    // setState
    this.setState({ products: newProduct });
  };

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

  render() {
    return (
      <React.Fragment>
        <NavBar
          productCount={this.state.products.filter((p) => p.count > 0).length}
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
                  products={this.state.products}
                  onDelete={this.handelDelete}
                  onReset={this.handelReset}
                  onIncreament={this.handelIcncreament}
                  {...props}
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
