import { createContext, useContext } from "react";

// Create context
const AppContext = createContext();

// Create provider
export const AppProvider = ({ children }) => {
  // Returned Provider
  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
};

// Create the custom hook
export const useAppContext = () => {
  const context = useContext(AppContext);

  // Guard clause
  if (!context)
    throw new Error("useAppContext must be used within an AppProvider");

  // Destructuring the context for the values
  const {} = context;

  // Return values
  return {};
};
