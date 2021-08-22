import React from "react";

const ProductDetails = (props) => {
  // access id in Match props
  //console.log(props.match.params.id);

  const products = props.products.filter(
    // Using parseInt to convert from string to number
    (c) => c.id === parseInt(props.match.params.id)
  )[0];

  return (
    <React.Fragment>
      <h1>Detailes{props.match.params.id}</h1>
      <h1>Product Name : {products.name}</h1>
      <h1>Count in ShoppingCart : {products.count}</h1>
    </React.Fragment>
  );
};

export default ProductDetails;
