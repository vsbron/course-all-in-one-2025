import { createSlice } from "@reduxjs/toolkit";

import cartItems from "../../cartItems";

// Set up the initial state
const initialState = {
  cartItems: cartItems,
  amount: 4,
  total: 0,
  isLoading: true,
};

// Create the Cart slice
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
  },
});

// Export actions
export const { clearCart, removeItem } = cartSlice.actions;

// Export reducer
export default cartSlice.reducer;
