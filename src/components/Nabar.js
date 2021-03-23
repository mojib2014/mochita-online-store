import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

export default function Nabar({ itemQuantity }) {
  return (
    <header className="navbar-header">
      <div className="content">
        <nav className="navbar">
          <ul>
            <li>
              <NavLink to="/home">Home</NavLink>
            </li>
            <li>
              <NavLink to="/catalog">Catalog</NavLink>
            </li>
            <li className="cart">
              <NavLink to="/cart">
                <img src={`${__dirname}images/icon_cart.png`} alt="cart icon" />
                <p className="item-quantity">
                  {itemQuantity ? itemQuantity : 0}
                </p>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
