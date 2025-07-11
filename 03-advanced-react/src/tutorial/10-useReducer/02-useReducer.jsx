import { useReducer } from "react";

import { data } from "../../data";

// Declaring the initial data
const initialState = { people: data };

// Creating the reducer
const reducer = () => {};

const ReducerBasics = () => {
  // Getting the state and the dispatch from useReducer hook
  const [state, dispatch] = useReducer(reducer, initialState);

  // Create a helper functions
  const removeItem = (id) => {};
  const clearList = () => {};
  const resetList = () => {};

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
