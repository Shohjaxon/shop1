import React from "react";

export default function Header() {
  return (
    <nav>
      <div className="nav-wrapper container">
        <a href="/" className="brand-logo">
          Shop
        </a>

        <ul className="right hide-on-med-and-down">
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
          <li>
            <a href="/">Shop</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
