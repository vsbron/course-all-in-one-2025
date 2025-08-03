import { useContext, useReducer, useEffect, createContext } from "react";

import {
  CLEAR_CART,
  REMOVE,
  INCREASE,
  DECREASE,
  LOADING,
  DISPLAY_ITEMS,
} from "./action";
import reducer from "./reducer";

import cartItems from "../data";
import { getTotals } from "../utils";

// Setting the url for data fetching
const url = "https://www.course-api.com/react-useReducer-cart-project";

// Create Context
const AppContext = createContext();

// Create the initial state
const initialState = {
  isLoading: false,
  cart: new Map(cartItems.map((item) => [item.id, item])),
};

// Create the provider
export const AppProvider = ({ children }) => {
  // Getting the state and dispatch function from the reducer
  const [state, dispatch] = useReducer(reducer, initialState);

  // Get the total amount and cost of the cart
  const { totalAmount, totalCost } = getTotals(state.cart);

  // Helper function to work with the state
  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };
  const removeItem = (id) => {
    dispatch({ type: REMOVE, payload: { id } });
  };
  const increase = (id) => {
    dispatch({ type: INCREASE, payload: { id } });
  };
  const decrease = (id) => {
    dispatch({ type: DECREASE, payload: { id } });
  };

  // useEffect function for data fetching
  useEffect(() => {
    // Setting the Abort controller
    const controller = new AbortController();
    const { signal } = controller;

    // Create the fetch function
    const fetchData = async () => {
      try {
        // Fetch and json data
        const response = await fetch(url, { signal });
        const cart = await response.json();
        console.log(cart);
      } catch (error) {
        // If Abort controller error - move on
        if (error.name === "AbortError") return;
        console.error("Fetch error:", error);
      }
    };

    // Call the fetch function
    fetchData();

    // Cleanup function
    return () => controller.abort();
  }, []);

  // Return the provider
  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        removeItem,
        increase,
        decrease,
        totalAmount,
        totalCost,
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
    isLoading,
    cart,
    clearCart,
    removeItem,
    increase,
    decrease,
    totalAmount,
    totalCost,
  } = context;

  // Return values
  return {
    isLoading,
    cart,
    clearCart,
    removeItem,
    increase,
    decrease,
    totalAmount,
    totalCost,
  };
};
