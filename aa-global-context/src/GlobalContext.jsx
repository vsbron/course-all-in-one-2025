import { createContext, useContext, useState } from "react";

// Creating the Context
const GlobalContext = createContext();

// Setting the Provider
export const GlobalProvider = ({ children }) => {
  // Create the state for the value
  const [value, setValue] = useState(false);

  // Create the toggle function
  const toggleValue = () => {
    setValue((val) => !val);
  };

  // Returned Provider
  return (
    <GlobalContext.Provider value={{ value, toggleValue }}>
      {children}
    </GlobalContext.Provider>
  );
};

// Custom hook for easier use
// eslint-disable-next-line react-refresh/only-export-components
export const useGlobal = () => {
  // Getting the context
  const context = useContext(GlobalContext);

  // Guard clause
  if (!context)
    throw new Error("useGlobal must be used within an GlobalProvider");

  // Destructuring the context for the values
  const { value, toggleValue } = context;

  // Return values
  return { value, toggleValue };
};
