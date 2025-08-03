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
    case CLEAR_CART: {
      return { ...state, cart: new Map() };
    }
    case REMOVE: {
      // Creating the new cart instance as a Map
      const newCart = new Map(state.cart);

      // Delete the item via ID
      newCart.delete(action.payload.id);

      // Return stat with the new cart
      return { ...state, cart: newCart };
    }
    case INCREASE: {
      // Creating the new cart instance as a Map
      const newCart = new Map(state.cart);

      // Getting the item from the cart
      const item = newCart.get(action.payload.id);

      // Create new item with updated amount
      const newItem = { ...item, amount: item.amount + 1 };

      // Update the item in the state cart
      newCart.set(action.payload.id, newItem);

      // Return stat with the new cart
      return { ...state, cart: newCart };
    }
    case DECREASE: {
      // Creating the new cart instance as a Map
      const newCart = new Map(state.cart);

      // Getting the item from the cart
      const item = newCart.get(action.payload.id);

      // Declare new item
      let newItem = {};

      // If item has more than one quantity
      if (item.amount > 1) {
        // Create new item with updated amount
        newItem = { ...item, amount: item.amount - 1 };

        // Update the item in the state cart
        newCart.set(action.payload.id, newItem);
      } else {
        // Delete the item via ID if it's just 1
        newCart.delete(action.payload.id);
      }

      // Return stat with the new cart
      return { ...state, cart: newCart };
    }
    default: {
      throw new Error(`No matching action type: ${action.type}`);
    }
  }
};

export default reducer;
