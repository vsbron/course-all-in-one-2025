import { createContext, useContext, useEffect, useState } from "react";

// Create context
const AppContext = createContext();

// Checking whether user prefers dark mode or not
const getInitialDarkMode = () => {
  // Get the dark theme setting from local storage
  const storedTheme = localStorage.getItem("darkTheme");

  // Check if there's a value and return the boolean accordingly
  if (storedTheme !== null) {
    return storedTheme === "true";
  }

  // If nothing in storage, return the preferred scheme
  return window.matchMedia("(prefers-color-scheme: dark)").matches; // fallback
};

// Create provider
export const AppProvider = ({ children }) => {
  // Create state value for dark theme
  const [isDarkTheme, setIsDarkTheme] = useState(getInitialDarkMode());
  const [searchTerm, setSearchTerm] = useState("Wrestling");

  // Theme toggle function
  const toggleDarkTheme = () => {
    // Invert the dark mode state
    setIsDarkTheme((isDark) => !isDark);

    // Set the local storage
    localStorage.setItem("darkTheme", !isDarkTheme);
  };

  // useEffect function that toggles the dark mode based on the state
  useEffect(() => {
    document.body.classList.toggle("dark-theme", isDarkTheme);
  }, [isDarkTheme]);

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
