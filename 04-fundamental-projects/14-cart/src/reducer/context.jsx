import { useContext, useReducer, useEffect, createContext } from "react";

import reducer from "./reducer";

// Create Context
const AppContext = createContext();

// Create the initial state
const initialState = {
  isLoading: false,
  cart: [],
};
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
  const {} = context;

  // Return values
  return {};
};
