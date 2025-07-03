import { useState } from "react";

import { people } from "../../data";

// Setting the initial people data
const initialData = people;

const UseStateArray = () => {
  // Setting the state of people
  const [people, setPeople] = useState(initialData);

  // Setting click handlers
  const handleRemove = (id) => {
    setPeople((ppl) => ppl.filter((p) => p.id !== id));
  };
  const handleClear = () => {
    setPeople([]);
  };

  // Returned JSX
  return (
    <>
      <h2>useState array example</h2>
      <ul>
        {people.map((ppl) => (
          <li key={ppl.id}>
            {ppl.name}{" "}
            <button onClick={() => handleRemove(ppl.id)} className="btn">
              x
            </button>
          </li>
        ))}
      </ul>
      <button onClick={handleClear} className="btn">
        Clear the list
      </button>
    </>
  );
};

export default UseStateArray;
