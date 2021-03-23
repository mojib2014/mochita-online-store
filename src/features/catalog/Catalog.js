import React, { useEffect } from "react";
import { loadData } from "./catalogSlice";
import { addItem } from "../cart/cartSlice";
import Item from "../../components/Item";
import { calculatePrice, getCurrencySymbol } from "../../utilities/utilities";
import "./catalog.css";

export default function Catalog({ catalog, dispatch, currencyFilter, cart }) {
  useEffect(() => {
    dispatch(loadData());
  }, [dispatch]);

  return (
    <section className="catalog">
      <header className="collection-header">
        <div className="section-header">
          <h1>Catalog</h1>
          <p>Full Catalog</p>
        </div>
        <div className="filters-toolbar-wrapper">
          <div className="filters-toolbar">
            <div className="filters-toolbar-item"></div>
          </div>
        </div>
      </header>
      <ul className="catalog-container">
        {catalog.map((item) => (
          <Item
            key={item.name}
            item={item}
            onClick={() => dispatch(addItem(item))}
            buttonTitle="Add to Cart"
            getCurrencySymbol={getCurrencySymbol}
            calculatePrice={calculatePrice}
            currencyFilter={currencyFilter}
            cart={cart}
            dispatch={dispatch}
          />
        ))}
      </ul>
    </section>
  );
}
