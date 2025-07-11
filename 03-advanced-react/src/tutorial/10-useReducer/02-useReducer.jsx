import { useReducer } from "react";

import { data } from "../../data";

// Declaring the initial data
const initialState = { people: data, isLoading: false };

// Preparing the action type names
const CLEAR_LIST = "CLEAR_LIST";
const RESET_LIST = "RESET_LIST";
const REMOVE_ITEM = "REMOVE_ITEM";

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

const ReducerBasics = () => {
  // Getting the state and the dispatch from useReducer hook
  const [state, dispatch] = useReducer(reducer, initialState);

  // Create a helper functions
  const removeItem = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: { id } });
  };
  const clearList = () => {
    dispatch({ type: CLEAR_LIST });
  };
  const resetList = () => {
    dispatch({ type: RESET_LIST });
  };

  // Creating boolean flag
  const isEmpty = state.people.length === 0;

  // Returned JSX
  return (
    <div>
      {state.people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      <button
        className="btn"
        style={{ marginTop: "2rem" }}
        onClick={isEmpty ? resetList : clearList}
      >
        {isEmpty ? "Reset" : "Clear items"}
      </button>
    </div>
  );
};

export default ReducerBasics;
