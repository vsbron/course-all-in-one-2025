import { useState } from "react";

import data from "./data";

import List from "./List";

const App = () => {
  // Creating the state value for the people
  const [people, setPeople] = useState(data);

  // Creating the clear list function
  const clearList = () => {
    setPeople([]);
  };

  // Returned JSX
  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <List people={people} />
        <button type="button" className="btn btn-block" onClick={clearList}>
          Clear all
        </button>
      </section>
    </main>
  );
};

export default App;
