import { createSlice } from "@reduxjs/toolkit";

// Set up the initial state
const initialState = {
  isOpen: false,
};

// Create the Modal slice
const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state) => {
      state.isOpen = true;
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
  },
});

// Export actions
export const { openModal, closeModal } = modalSlice.actions;

// Export reducer
export default modalSlice.reducer;
