import React, { useEffect, useState } from "react";
import { API_KEY, API_URL } from "../config";
import BasketList from "./BasketList";
import Cart from "./Cart";
import Loader from "./Loader";
import Products from "./Products";

export default function Shop() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isBasketShow, setBasketShow] = useState(false);
  const [order, setOrder] = useState([]);
  console.log(order);

  const addToBasket = (item) => {
    const itemIndex = order.findIndex((orderItem) => orderItem.id === item.id); // 5

    if (itemIndex < 0) {
      const newItem = {
        ...item,
        quantity: 1,
      };
      setOrder([...order, newItem]);
    } else {
      const newOrder = order.map((orderItem, index) => {
        if (index === itemIndex) {
          return {
            ...orderItem,
            quantity: orderItem.quantity + 1,
          };
        } else {
          return orderItem;
        }
      });
      setOrder(newOrder);
    }
  };

  const handleBasketShow = () => {
    setBasketShow(!isBasketShow);
  };

  useEffect(() => {
    fetch(API_URL, {
      headers: { Authorization: API_KEY },
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setProducts(data.featured);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container content">
      <Cart quantity={order.length} handleBasketShow={handleBasketShow} />

      {loading ? (
        <Loader />
      ) : (
        <Products products={products} addToBasket={addToBasket} />
      )}

      {isBasketShow && <BasketList order={order} handleBasketShow={handleBasketShow} />}
    </div>
  );
}
