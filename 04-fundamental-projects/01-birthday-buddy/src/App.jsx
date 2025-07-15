import { useState } from "react";

import data from "./data";

import List from "./List";

const App = () => {
  // Creating the state value for the people
  const [people, setPeople] = useState(data);

  // Returned JSX
  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <List people={people} />
      </section>
    </main>
  );
};

export default App;
