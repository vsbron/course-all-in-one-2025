import { createContext, useContext, useState } from "react";

// Create the context
const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // Create state value for sidebar status and page id
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [pageId, setPageId] = useState(null);

  // Create the toggle functions for further use
  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  // Returned provider with values
  return (
    <AppContext.Provider
      value={{ isSidebarOpen, openSidebar, closeSidebar, pageId, setPageId }}
    >
      {children}
    </AppContext.Provider>
  );
};

// Custom hook for easier use
export const useAppContext = () => {
  // Getting the context
  const context = useContext(AppContext);

  // Guard clause
  if (!context) throw new Error("useApp must be used within an AppProvider");

  // Destructuring the context for the values
  const { isSidebarOpen, openSidebar, closeSidebar, pageId, setPageId } =
    context;

  // Return values
  return { isSidebarOpen, openSidebar, closeSidebar, pageId, setPageId };
};
