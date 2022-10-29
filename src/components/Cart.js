import React from "react";

export default function Cart(props) {
  const { quantity = 0, handleBasketShow } = props;
  return (
    <div className="cart blue darken-4 white-text" onClick={handleBasketShow}>
      <i className="material-icons">add_shopping_cart</i>
      {quantity ? <span className="card-quantity">{quantity}</span> : null}
    </div>
  );
}
