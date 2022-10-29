import React from "react";

export default function Product(props) {
  const { id, name, description, price, image, addToBasket } = props;
  return (
    <div className="card">
      <div className="card-image">
        <img src={image} alt={name} />
      </div>
      <div className="card-content">
        <span className="card-title">{name}</span>
        <p>{description}</p>
      </div>
      <div className="card-action">
        <button
          onClick={() => addToBasket({ id, name, price })}
          className="btn"
        >
          Buy
        </button>
        <span className="right" style={{ fontSize: "1.8rem" }}>
          {price} $
        </span>
      </div>
    </div>
  );
}
