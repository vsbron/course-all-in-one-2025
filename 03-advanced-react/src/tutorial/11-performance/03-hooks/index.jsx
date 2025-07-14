import { useCallback, useState } from "react";

import List from "./List";

import { data } from "../../../data";

const LowerState = () => {
  // Creating a state value for people and count
  const [people, setPeople] = useState(data);
  const [count, setCount] = useState(0);

  // Creating a remove person function with useCallback hook
  const removePerson = useCallback(
    (id) => {
      const newPeople = people.filter((person) => person.id !== id);
      setPeople(newPeople);
    },
    [people]
  );

  // Returned JSX
  return (
    <section>
      <button
        className="btn"
        onClick={() => setCount(count + 1)}
        style={{ marginBottom: "1rem" }}
      >
        count {count}
      </button>
      <List people={people} removePerson={removePerson} />
    </section>
  );
};
export default LowerState;
