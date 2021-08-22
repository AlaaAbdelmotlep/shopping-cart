import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "../node_modules/bootstrap/dist/css/bootstrap.css";

// import Product from './components/product';
// import ShoppingCart from './components/shoppingCart';
import App from "./components/app";

ReactDom.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
