import { useState } from "react";

import List from "./List";

import { data } from "../../../data";

const LowerState = () => {
  // Creating a state value for people and count
  const [people, _] = useState(data);
  const [count, setCount] = useState(0);

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
      <List people={people} />
    </section>
  );
};
export default LowerState;
