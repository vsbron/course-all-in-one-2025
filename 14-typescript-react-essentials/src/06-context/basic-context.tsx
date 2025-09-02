import { createContext, useContext, useState } from "react";

// Create the context
const ThemeContext = createContext<{ name: string } | undefined>(undefined);

// Create the provider
export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  // Create State value for text
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [text, setText] = useState("Hello");

  // Returned Provider
  return (
    <ThemeContext.Provider value={{ name: text }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Create the custom hook for easier access
// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => {
  // Get the context from the Context API
  const context = useContext(ThemeContext);

  // Guard clause
  if (context === undefined)
    throw new Error("useTheme must be used within the ThemeProvider");

  // Destructure the context
  const { name } = context;

  // Return the values
  return { name };
};
