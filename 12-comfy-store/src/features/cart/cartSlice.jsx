import { createSlice } from "@reduxjs/toolkit";
// import { toast } from "react-toastify";

// Setting the initial state
const defaultState = {
  cartItems: [],
  numItemsInCart: 0,
  cartTotal: 0,
  shipping: 500,
  tax: 0,
  orderTotal: 0,
};

// Create the cart slice
const cartSlice = createSlice({
  name: "cart",
  initialState: defaultState,
  reducers: {
    addItem: (state, action) => {
      state.cartItems = [...state.cartItems, action.payload];
    },
    editItem: (state, action) => {
      console.log(action.payload);
    },
    removeItem: (state, action) => {
      console.log(action.payload);
    },
    clearCart: (state) => {
      console.log(state);
    },
  },
});

// Export the actions
export const { addItem, editItem, removeItem, clearCart } = cartSlice.actions;

// Export the slice
export default cartSlice.reducer;
