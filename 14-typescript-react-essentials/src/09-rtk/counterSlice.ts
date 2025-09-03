import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// Create some types for RTK
type CounterStatus = "Pending" | "active" | "inactive";
type CounterState = {
  count: number;
  status: CounterStatus;
};

// Create the initial state
const initialState: CounterState = {
  count: 0,
  status: "Pending",
};

// Create the slice
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    reset: (state) => {
      state.count = 0;
    },
    setStatus(state, action: PayloadAction<CounterStatus>) {
      state.status = action.payload;
    },
  },
});

// Export the actions
export const { increment, decrement, reset, setStatus } = counterSlice.actions;

// Export the reducer
export default counterSlice.reducer;
