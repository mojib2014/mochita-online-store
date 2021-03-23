// Action creator
export const setSelectedItem = (item) => {
  return {
    type: "catalog/setSelectedItem",
    payload: item,
  };
};

// Reducer
const initialSelectedItem = {};
export const selectedItemReducer = (
  selectedItem = initialSelectedItem,
  action,
) => {
  switch (action.type) {
    case "catalog/setSelectedItem":
      return action.payload;
    default:
      return selectedItem;
  }
};
