import { useState } from "react";

import Counter from "./Counter";
import List from "./List";

import { data } from "../../../data";

const LowerState = () => {
  // Creating state value for people
  const [people, _] = useState(data);

  // Returned JSX
  return (
    <section>
      <Counter />
      <List people={people} />
    </section>
  );
};
export default LowerState;
