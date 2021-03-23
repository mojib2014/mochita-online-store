import React from "react";
import { NavLink } from "react-router-dom";
import Button from "./Button";

export default function Item({
  item,
  onClick,
  getCurrencySymbol,
  calculatePrice,
  currencyFilter,
  cart,
  dispatch,
}) {
  const displayPrice = (price, currencyFilter) => {
    return calculatePrice(price, currencyFilter);
  };

  const renderBtnTitle = (item) => {
    return cart.every((i) => i.id !== item.id) ? "Add to cart" : "In cart";
  };

  return (
    <li key={item.name} className="item">
      <NavLink to={`/item-details/${item.name}`}>
        <img src={item.img} alt={item.name} />
        <h3>{item.name}</h3>
        <h3>
          {getCurrencySymbol(currencyFilter)}
          {displayPrice(item.price, currencyFilter).toFixed(2)}
          {currencyFilter}
        </h3>
      </NavLink>
      <Button
        className="add-to-cart"
        onClick={onClick}
        disabled={renderBtnTitle(item) === "In cart" ? true : false}
      >
        {renderBtnTitle(item)}
      </Button>
    </li>
  );
}
