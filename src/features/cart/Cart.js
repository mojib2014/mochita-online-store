import React from "react";
import { calculateTotal, getCurrencySymbol } from "../../utilities/utilities";
import "./cart.css";
import Table from "../../components/Table";

export default function Cart({ cart, currencyFilter, dispatch }) {
  const total = calculateTotal(cart, currencyFilter);
  return (
    <section className="cart-container">
      <h1>Shopping Cart</h1>
      <Table items={cart} dispatch={dispatch} currencyFilter={currencyFilter} />
      <div className="total-container">
        <div className="total-price">
          <h3 className="total">Total: </h3>
          <h3 className="total-value">
            {getCurrencySymbol(currencyFilter)}
            {total}
          </h3>
        </div>
      </div>
    </section>
  );
}
