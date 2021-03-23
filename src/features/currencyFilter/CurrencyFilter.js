import React from "react";
import Button from "../../components/Button";
import { currenciesData } from "../../data";
import { setCurrency } from "./currencyFilterSlice";

export default function CurrencyFilter({ currencyFilter, dispatch }) {
  return (
    <div className="currency-filters-container">
      <h3>Choose a currency</h3>
      {currenciesData.map((currency) => (
        <Button
          key={currency}
          className={`currency-button ${
            currencyFilter === currency && "selected"
          }`}
          onClick={() => dispatch(setCurrency(currency))}
        >
          {currency}
        </Button>
      ))}
    </div>
  );
}
