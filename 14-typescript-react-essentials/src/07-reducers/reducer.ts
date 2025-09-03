// Create the type for the state
export type CounterState = {
  count: number;
  status: string;
};

type UpdateCountAction = {
  type: "increment" | "decrement" | "reset";
};
type CounterAction = UpdateCountAction;

// Create initial state
export const initialState = {
  count: 0,
  status: "Pending",
};

// Create the reducer
export const counterReducer = (
  state: CounterState,
  action: CounterAction
): CounterState => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    case "reset":
      return { ...state, count: 0 };
    default:
      return state;
  }
};
