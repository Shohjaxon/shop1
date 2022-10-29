import React from "react";

export default function BasketItem({ id, name, price, quantity }) {
  return (
    <li className="collection-item">
      <p>
        {name} x{quantity} = {price * quantity} <b>$</b>
      </p>
      <span>
        <button className="waves-effect waves-light btn">
          <i className="material-icons">exposure_plus_1</i>
        </button>
        <button
          style={{ marginLeft: "5px" }}
          className="waves-effect waves-light btn"
        >
          <i className="material-icons">exposure_minus_1</i>
        </button>

        <button
          style={{ marginLeft: "5px" }}
          className="waves-effect waves-light btn"
        >
          <i className="material-icons">delete_forever</i>
        </button>
      </span>
    </li>
  );
}
