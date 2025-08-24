import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice";

// Creating store with the reducer
export const store = configureStore({
  reducer: { cart: cartReducer },
});
