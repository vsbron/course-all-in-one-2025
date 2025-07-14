import { useState } from "react";

import AddPerson from "./AddPerson";
import List from "./List";

import { data } from "../../../data";

const LowerStateChallenge = () => {
  // Creating the state value for people
  const [people, setPeople] = useState(data);

  // Add person function
  const addPerson = (name) => {
    const fakeId = Date.now();
    const newPerson = { id: fakeId, name };
    setPeople([...people, newPerson]);
  };

  // Returned JSX
  return (
    <section>
      <AddPerson onAddPerson={addPerson} />
      <List people={people} />
    </section>
  );
};
export default LowerStateChallenge;
