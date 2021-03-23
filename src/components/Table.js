import React from "react";
import { NavLink } from "react-router-dom";
import Button from "./Button";
import Input from "./Input";
import { removeItem, changeItemQuantity } from "../features/cart/cartSlice";
import {
  calculatePrice,
  calculatePriceByQuantity,
  getCurrencySymbol,
} from "../utilities/utilities";

export default function Table({ items, dispatch, currencyFilter }) {
  return (
    <table>
      <thead>
        <tr>
          <th colSpan="2" scope="col">
            Product
          </th>
          <th className="cart-price" scope="col">
            Price
          </th>
          <th className="cart-quantity" scope="col">
            Quantity
          </th>
          <th className="cart-total" scope="total">
            Total
          </th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.id}>
            <td className="cart-img-wrapper">
              <div>
                <NavLink to={`/item-details/${item.name.replace(" ", "-")}`}>
                  <img src={item.img} alt={item.name} />
                </NavLink>
              </div>
            </td>
            <td className="cart-item-details">
              <div className="cart-item-title">{item.name}</div>
              <Button
                className="remove-from-cart-btn"
                onClick={() => dispatch(removeItem(item))}
              >
                Remove
              </Button>
            </td>
            <td>
              {getCurrencySymbol(currencyFilter)}
              {calculatePrice(item.price, currencyFilter)}
            </td>
            <td>
              <Input
                type="number"
                name={item.name}
                value={item.quantity}
                onChange={(e) =>
                  dispatch(changeItemQuantity(item, e.target.value))
                }
              />
            </td>
            <td>
              {getCurrencySymbol(currencyFilter)}
              {calculatePriceByQuantity(
                item.price,
                currencyFilter,
                item.quantity,
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
