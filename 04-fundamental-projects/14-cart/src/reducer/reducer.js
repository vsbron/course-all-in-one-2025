import {
  CLEAR_CART,
  REMOVE,
  INCREASE,
  DECREASE,
  LOADING,
  DISPLAY_ITEMS,
} from "./action";

// Create reducer
const reducer = (state, action) => {
  switch (action.type) {
    case CLEAR_CART:
      return { ...state, cart: new Map() };
      break;
    default:
      throw new Error(`No matching action type: ${action.type}`);
  }
};

export default reducer;
