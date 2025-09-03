import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./09-rtk/counterSlice";

// Configure the store
export const store = configureStore({ reducer: { counter: counterReducer } });

// Set 2 types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
