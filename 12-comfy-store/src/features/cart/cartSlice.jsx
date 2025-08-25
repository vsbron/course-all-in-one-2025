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
      // Get the id and the amount from the payload and get the product
      const { cartID, amount } = action.payload;
      const item = state.cartItems.find((i) => i.cartID === cartID);

      // Update the items amount in the cart
      state.numItemsInCart += amount - item.amount;
      state.cartTotal += item.price * (amount - item.amount);

      // Update the amount after the calculations
      item.amount = amount;

      // Call the helper reducer
      cartSlice.caseReducers.calculateTotals(state);

      // Display the toast message
      toast.success("Cart updated");
    },
    removeItem: (state, action) => {
      // Get the item's id and the product
      const { cartID } = action.payload;
      const product = state.cartItems.find((i) => i.cartID === cartID);

      // Filter out deleted product and update the cart
      state.cartItems = state.cartItems.filter(
        (item) => item.cartID !== cartID
      );

      // Update cart stats
      state.numItemsInCart -= product.amount;
      state.cartTotal -= product.amount * product.price;

      // Call the helper reducer
      cartSlice.caseReducers.calculateTotals(state);

      // Display the toast message
      toast.success("Item was removed from the cart");
    },
    clearCart: () => {
      // Set the default state to the local storage
      localStorage.setItem("cart", JSON.stringify(defaultState));

      // Display the toast message
      toast.success("Cart was cleared");

      // Reset the cart
      return defaultState;
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
