import { createSlice } from "@reduxjs/toolkit";

// Set up the initial state
const initialState = {
  cartItems: [],
  amount: 0,
  total: 0,
  isLoading: true,
};

// Create the Cart slice
const cartSlice = createSlice({
  name: "cart",
  initialState,
});

export default cartSlice.reducer;
