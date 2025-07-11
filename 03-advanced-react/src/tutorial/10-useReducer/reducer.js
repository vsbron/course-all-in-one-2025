import { data } from "../../data";
import { CLEAR_LIST, REMOVE_ITEM, RESET_LIST } from "./actions";

// Declaring the initial data
export const initialState = { people: data, isLoading: false };

// Creating the reducer
const reducer = (state, { type, payload }) => {
  // Switch statement that checks the type and does the change
  switch (type) {
    case CLEAR_LIST:
      return { ...state, people: [] };
    case RESET_LIST:
      return initialState;
    case REMOVE_ITEM:
      return {
        ...state,
        people: state.people.filter((person) => person.id !== payload.id),
      };
    default:
      throw new Error(`No matching ${type}`);
  }
};

export default reducer;
