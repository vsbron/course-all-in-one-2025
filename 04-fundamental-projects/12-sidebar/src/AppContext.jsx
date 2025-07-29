import { createContext, useContext, useState } from "react";

// Create the context
const AppContext = createContext();

// Setting the Provider
export const AppProvider = ({ children }) => {
  // Create state values for sidebar and module
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Create the toggle functions for further use
  const toggleSidebar = () => {
    setIsSidebarOpen((isOpen) => !isOpen);
  };
  const toggleModal = () => {
    setIsModalOpen((isOpen) => !isOpen);
  };

  // Returned Provider
  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        isModalOpen,
        toggleSidebar,
        toggleModal,
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
  const { isSidebarOpen, isModalOpen, toggleSidebar, toggleModal } = context;

  // Return values
  return {
    isSidebarOpen,
    isModalOpen,
    toggleSidebar,
    toggleModal,
  };
};
