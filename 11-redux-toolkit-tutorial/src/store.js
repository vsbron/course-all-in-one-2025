import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice";
import modalReducer from "./features/modal/modalSlice";

// Creating store with the reducer
export const store = configureStore({
  reducer: { cart: cartReducer, modal: modalReducer },
});
