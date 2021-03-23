// Action creator
export const setCurrency = (currency) => {
  return {
    type: "currencyFilter/setCurrency",
    payolad: currency,
  };
};

// Reducer
const initialCurrencyFilter = "USD";
export const currencyFilterReducer = (
  currencyFilter = initialCurrencyFilter,
  action,
) => {
  switch (action.type) {
    case "currencyFilter/setCurrency":
      return action.payolad;
    default:
      return currencyFilter;
  }
};
