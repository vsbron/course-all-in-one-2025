import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

// Setting the initial state
const defaultState = { user: { username: "coding addict" }, theme: "dracula" };

// Create the user slice
const userSlice = createSlice({
  name: "user",
  initialState: defaultState,
  reducers: {
    loginUser: (state, action) => {
      console.log("login");
    },
    logoutUser: (state) => {
      console.log("logout");
    },
    toggleTheme: (state) => {
      console.log("Toggle");
    },
  },
});

// Export the actions
export const { loginUser, logoutUser, toggleTheme } = userSlice.actions;

// Export the reducer
export default userSlice.reducer;
