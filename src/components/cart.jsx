import React from "react";

const Cart = (props) => {
  // change styling of button
  const style = props.product.inCart ? { color: "black" } : { color: "white" };
  return (
    <button
      style={style}
      onClick={() => props.onClick(props.product)}
      className="btn btn-primary"
    >
      add to cart
    </button>
  );
};

export default Cart;
