import { useContext, useReducer, useEffect, createContext } from "react";
import App from "./App";

// Create Context
const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const greeting = "Hello";

  // Return the provider
  return (
    <AppContext.Provider value={{ greeting }}>{children}</AppContext.Provider>
  );
};

// Custom hook for easier use
export const useAppContext = () => {
  // Getting the context
  const context = useContext(AppContext);

  // Guard clause
  if (!context) throw new Error("useApp must be used within an AppProvider");

  // Destructuring the context for the values
  const { greeting } = context;

  // Return values
  return { greeting };
};
