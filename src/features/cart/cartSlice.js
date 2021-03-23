// Action creators
export const addItem = (item) => {
  return {
    type: "cart/addItem",
    payload: item,
  };
};

export const changeItemQuantity = (item, newQuantity) => {
  return {
    type: "cart/changeItemQuantity",
    payload: { item, newQuantity },
  };
};

export const removeItem = (item) => {
  return {
    type: "cart/removeItem",
    payload: item,
  };
};

export const getQuantityInCart = () => {
  return {
    type: "cart/getQuantityInCart",
  };
};

export const getItemByName = (name) => {
  return {
    type: "cart/getItemByName",
    payload: name,
  };
};

// Reducer
const initialState = [];
export const cartReducer = (cart = initialState, action) => {
  switch (action.type) {
    case "cart/addItem": {
      const itemToAdd = { ...action.payload, quantity: 1 };
      return [...cart, itemToAdd];
    }
    case "cart/changeItemQuantity": {
      const { item, newQuantity } = action.payload;
      return cart.filter((i) =>
        i.id === item.id ? (i.quantity = newQuantity) : i,
      );
    }
    case "cart/getItemByName":
      return cart.filter((item) => item.name === action.payload);
    case "cart/removeItem":
      return cart.filter((item) => item.id !== action.payload.id);
    case "cart/getQuantityInCart":
      return cart.filter((item) => item.quantity);
    default:
      return cart;
  }
};
