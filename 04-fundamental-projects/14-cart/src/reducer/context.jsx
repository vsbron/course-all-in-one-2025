import { useContext, useReducer, useEffect, createContext } from "react";

import {
  CLEAR_CART,
  REMOVE,
  INCREASE,
  DECREASE,
  LOADING,
  DISPLAY_ITEMS,
} from "./action";
import reducer from "./reducer";

import cartItems from "../data";

// Create Context
const AppContext = createContext();

// Create the initial state
const initialState = {
  isLoading: false,
  cart: new Map(cartItems.map((item) => [item.id, item])),
};

// Create the provider
export const AppProvider = ({ children }) => {
  // Getting the state and dispatch function from the reducer
  const [state, dispatch] = useReducer(reducer, initialState);

  // Return the provider
  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};

// Custom hook for easier use
export const useAppContext = () => {
  // Getting the context
  const context = useContext(AppContext);

  // Guard clause
  if (!context) throw new Error("useApp must be used within an AppProvider");

  // Destructuring the context for the values
  const { cart } = context;

  // Return values
  return { cart };
};
