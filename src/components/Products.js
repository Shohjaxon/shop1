import React from "react";
import Product from "./Product";

export default function Products(props) {
  const { products = [], addToBasket } = props;

  if (!products.length) {
    return <h3>Mahsulot yo'q</h3>;
  }
  return (
    <div className="products">
      {products.map((product) => (
        <Product key={product.id} {...product} addToBasket={addToBasket} />
      ))}
    </div>
  );
}
