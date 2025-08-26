import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

// Set up the themes object
const themes = { dracula: "dracula", winter: "winter" };

// Get the saved theme from local storage or assign the preferred OS theme
const getTheme = () => {
  const defTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dracula"
    : "winter";
  const theme = localStorage.getItem("theme") || defTheme;
  document.documentElement.setAttribute("data-theme", theme);
  return theme;
};

// Get the saved user from local storage
const getUser = () => {
  return JSON.parse(localStorage.getItem("user")) || null;
};

// Setting the initial state
const defaultState = { user: getUser(), theme: getTheme() };

// Create the user slice
const userSlice = createSlice({
  name: "user",
  initialState: defaultState,
  reducers: {
    loginUser: (state, action) => {
      // Create the new user with all the details and store it in the state
      const user = { ...action.payload.user, token: action.payload.jwt };
      state.user = user;

      // Set the local storage and display message
      localStorage.setItem("user", JSON.stringify(user));
      toast.success("Logged in successfully");
    },
    logoutUser: (state) => {
      state.user = null;
      localStorage.removeItem("user");
      toast.success("Logged out successfully");
    },
    toggleTheme: (state) => {
      const { dracula, winter } = themes;
      state.theme = state.theme === dracula ? winter : dracula;
      document.documentElement.setAttribute("data-theme", state.theme);
      localStorage.setItem("theme", state.theme);
    },
  },
});

// Export the actions
export const { loginUser, logoutUser, toggleTheme } = userSlice.actions;

// Export the reducer
export default userSlice.reducer;
