import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./features/cart/cartSlice";
import userReducer from "./features/cart/userSlice";

// Creating store with the reducer
export const store = configureStore({
  reducer: { cart: cartReducer, user: userReducer },
});
