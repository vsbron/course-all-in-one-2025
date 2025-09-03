// Create the type for the state
export type CounterState = {
  count: number;
  status: "Pending" | "active" | "inactive";
};

type UpdateCountAction = {
  type: "increment" | "decrement" | "reset";
};
type SetStatusAction = {
  type: "setStatus";
  payload: "active" | "inactive";
};
type CounterAction = UpdateCountAction | SetStatusAction;

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
    case "setStatus":
      return { ...state, status: action.payload };
    default:
      throw new Error(
        `Unexpected action type: ${action}. Please double check the counter reducer.`
      );
  }
};
