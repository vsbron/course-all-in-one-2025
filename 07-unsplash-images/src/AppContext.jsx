import { createContext, useContext, useState } from "react";

// Create context
const AppContext = createContext();

// Create provider
export const AppProvider = ({ children }) => {
  // Create state value for dark theme
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [searchTerm, setSearchTerm] = useState("Wrestling");

  // Theme toggle function
  const toggleDarkTheme = () => {
    // Invert the dark mode state
    setIsDarkTheme((dark) => !dark);

    // Select body element and toggle class
    document.body.classList.toggle("dark-theme", !isDarkTheme);
  };

  // Returned Provider
  return (
    <AppContext.Provider
      value={{ isDarkTheme, toggleDarkTheme, searchTerm, setSearchTerm }}
    >
      {children}
    </AppContext.Provider>
  );
};

// Create the custom hook
export const useAppContext = () => {
  const context = useContext(AppContext);

  // Guard clause
  if (!context)
    throw new Error("useAppContext must be used within an AppProvider");

  // Destructuring the context for the values
  const { isDarkTheme, toggleDarkTheme, searchTerm, setSearchTerm } = context;

  // Return values
  return { isDarkTheme, toggleDarkTheme, searchTerm, setSearchTerm };
};
