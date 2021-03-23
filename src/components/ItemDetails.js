import React from "react";
import Button from "./Button";
import { addItem } from "../features/cart/cartSlice";
import { inventoryData } from "../data";

export default function ItemDetails({ dispatch, match }) {
  const item = inventoryData.filter(
    (item) => item.name === match.params.name,
  )[0];
  return (
    <div className="item-details-container">
      <div className="img-container">
        <img src={item.img} alt={item.name} />
      </div>
      <div className="item-detail">
        <h1>{item.name}</h1>
        <p>{item.price}</p>
        <select name="color" id="color">
          <option value="white">White</option>
          <option value="black">Black</option>
          <option value="blue">Blue</option>
        </select>
        <Button className="add-to-cart" onClick={() => dispatch(addItem(item))}>
          Add to cart
        </Button>
      </div>
    </div>
  );
}
