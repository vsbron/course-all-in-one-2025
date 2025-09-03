// Create the type for the state
export type CounterState = {
  count: number;
  status: string;
};

// Create initial state
export const initialState = {
  count: 0,
  status: "Pending",
};

// Create the reducer
export const counterReducer = (
  state: CounterState,
  action: any
): CounterState => {
  return state;
};
