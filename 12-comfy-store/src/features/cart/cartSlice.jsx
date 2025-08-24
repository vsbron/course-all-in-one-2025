import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

// Setting the initial state
const defaultState = {
  cartItems: [],
  numItemsInCart: 0,
  cartTotal: 0,
  shipping: 500,
  tax: 0,
  orderTotal: 0,
};

// Function that sets the cart on page load
const getCartFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("cart")) || defaultState;
};

// Create the cart slice
const cartSlice = createSlice({
  name: "cart",
  initialState: getCartFromLocalStorage(),
  reducers: {
    addItem: (state, action) => {
      // Destructure the product
      const { product } = action.payload;

      // Find the item, increase amount if found, add item if not
      const item = state.cartItems.find((i) => i.cartID === product.cartID);
      item ? (item.amount += product.amount) : state.cartItems.push(product);

      // Update cart stats
      state.numItemsInCart += product.amount;
      state.cartTotal += product.amount * product.price;

      // Call the helper reducer
      cartSlice.caseReducers.calculateTotals(state);

      // Display the toast message
      toast.success("Item added to cart");
    },
    editItem: (state, action) => {
      console.log(action.payload);

      // Call the helper reducer
      cartSlice.caseReducers.calculateTotals(state);

      // Display the toast message
      toast.success("Item edited successfully");
    },
    removeItem: (state, action) => {
      console.log(action.payload);

      // Call the helper reducer
      cartSlice.caseReducers.calculateTotals(state);

      // Display the toast message
      toast.success("Item was removed from the cart");
    },
    clearCart: (state) => {
      console.log(state);
    },
    calculateTotals: (state) => {
      // Calculate tax and total amount
      state.tax = 0.1 * state.cartTotal;
      state.orderTotal = state.cartTotal + state.shipping + state.tax;

      // Save cart in the local storage
      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});

// Export the actions
export const { addItem, editItem, removeItem, clearCart } = cartSlice.actions;

// Export the slice
export default cartSlice.reducer;
