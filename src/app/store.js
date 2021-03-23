import { createStore, combineReducers } from "redux";
import { catalogReducer } from "../features/catalog/catalogSlice";
import { cartReducer } from "../features/cart/cartSlice";
import { searchTermReducer } from "../features/searchTerm/searchTermSlice";
import { currencyFilterReducer } from "../features/currencyFilter/currencyFilterSlice";

export const store = createStore(
  combineReducers({
    catalog: catalogReducer,
    cart: cartReducer,
    searchTerm: searchTermReducer,
    currencyFilter: currencyFilterReducer,
  }),
);
