import { useState } from "react";

import { data } from "../../data";

// Declaring the initial data
const initialPeople = data;

const ReducerBasics = () => {
  // Creating the state for the people
  const [people, setPeople] = useState(initialPeople);

  // Create a helper functions
  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };
  const clearList = () => {
    setPeople([]);
  };
  const resetList = () => {
    setPeople(initialPeople);
  };

  // Creating boolean flag
  const isEmpty = people.length === 0;

  // Returned JSX
  return (
    <div>
      {people.map((person) => {
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
