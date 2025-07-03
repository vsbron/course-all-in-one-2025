import { useState } from "react";

const UseStateBasics = () => {
  // Setting the state for the counter
  const [count, setCount] = useState(0);

  // Creating a button click handler
  const handleClick = () => {
    setCount((c) => c + 1);
  };

  // Returned JSX
  return (
    <div>
      <h4>You clicked {count} times!</h4>
      <button onClick={handleClick} className="btn">
        Click Me
      </button>
    </div>
  );
};

export default UseStateBasics;
