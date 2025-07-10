import { createContext, useContext, useState } from "react";

// Create the context
const NavbarContext = createContext();

export const NavbarProvider = ({ children }) => {
  // Create state for user
  const [user, setUser] = useState({ name: "John" });

  // Create log out function that resets the user
  const logOut = () => {
    setUser(null);
  };

  // Return the provider with values
  return (
    <NavbarContext.Provider value={{ user, logOut }}>
      {children}
    </NavbarContext.Provider>
  );
};

// Custom hook for easier use
// eslint-disable-next-line react-refresh/only-export-components
export const useNavbar = () => {
  // Getting the context
  const context = useContext(NavbarContext);

  // Guard clause
  if (!context) {
    throw new Error("NavbarContext must be used within an NavbarProvider");
  }

  // Destructuring the context values
  const { user, logOut } = context;

  // Return values to the consumer
  return { user, logOut };
};
