import { useState } from "react";
import { FaBeer } from "react-icons/fa";

import people from "./data";

const App = () => {
  // Creating state value for the people index
  const [index, setIndex] = useState(0);

  // Destructuring the person data
  const { name, job, image, text } = people[index];

  // Returned JSX
  return (
    <div>
      <h2>Reviews Starter</h2>
    </div>
  );
};
export default App;
