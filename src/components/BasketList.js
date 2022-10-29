import React from "react";
import BasketItem from "./BasketItem";

export default function BasketList(props) {
  const { handleBasketShow, order } = props;
  return (
    <div className="bgBasket">
      <ul className="collection basket-list">
        <li className="collection-item active">Basket</li>

        {order.length ? (
          order.map((item) => {
            return <BasketItem {...item} />;
          })
        ) : (
          <li className="collection-item">Basket is empty</li>
        )}

        <li className="collection-item active">
          <p>Total cost: 1200 $</p>
        </li>
        <i onClick={handleBasketShow} className="material-icons basket-close">
          close
        </i>
      </ul>
    </div>
  );
}
