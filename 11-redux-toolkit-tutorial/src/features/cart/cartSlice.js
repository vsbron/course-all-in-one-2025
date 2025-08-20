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
});

export default cartSlice.reducer;
