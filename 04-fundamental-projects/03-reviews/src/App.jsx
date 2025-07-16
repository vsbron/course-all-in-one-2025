import { useState } from "react";

import people from "./data";

const App = () => {
  // Creating state value for the people index
  const [index, setIndex] = useState(0);

  // Destructuring the person data
  const { name, job, image, text } = people[index];

  console.log(name);

  // Returned JSX
  return <h2>Reviews Starter</h2>;
};
export default App;
