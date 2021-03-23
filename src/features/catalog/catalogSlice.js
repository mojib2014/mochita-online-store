import { inventoryData } from "../../data";

// Action creators
export const loadData = () => {
  return {
    type: "catalog/loadData",
    payload: inventoryData,
  };
};

// Reducer
const initialState = [];
export const catalogReducer = (catalog = initialState, action) => {
  switch (action.type) {
    case "catalog/loadData":
      return action.payload;
    default:
      return catalog;
  }
};
