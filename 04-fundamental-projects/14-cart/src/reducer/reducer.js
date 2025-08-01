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
    case REMOVE:
      // Creating the new cart instance as a Map
      const newCart = new Map(state.cart);

      // Delete the item via ID
      newCart.delete(action.payload.id);

      // Return stat with the new cart
      return { ...state, cart: newCart };
    case INCREASE:
      const newCart2 = new Map(state.cart);
      const itemId = action.payload.id;
      const item = newCart2.get(itemId);
      console.log(item);

      // Return stat with the new cart
      return { ...state, cart: newCart2 };
    default:
      throw new Error(`No matching action type: ${action.type}`);
  }
};

export default reducer;
