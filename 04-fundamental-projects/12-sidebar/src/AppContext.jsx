import { createContext, useContext, useState } from "react";

// Create the context
const AppContext = createContext();

// Setting the Provider
export const AppProvider = ({ children }) => {
  // Create state values for sidebar and module
  const [isSidebarOpen, setIsSidebarOpen] = useState(boolean);
  const [isModalOpen, setIsModalOpen] = useState(boolean);

  // Create the setter functions for further use
  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Returned Provider
  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        isModalOpen,
        openModal,
        openSidebar,
        closeModal,
        closeSidebar,
      }}
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
  const {
    isSidebarOpen,
    isModalOpen,
    openModal,
    openSidebar,
    closeModal,
    closeSidebar,
  } = context;

  // Return values
  return {
    isSidebarOpen,
    isModalOpen,
    openModal,
    openSidebar,
    closeModal,
    closeSidebar,
  };
};
