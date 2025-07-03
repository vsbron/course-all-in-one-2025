import { useState } from "react";

const UseStateGotcha = () => {
  // Creating the state
  const [count, setCount] = useState(0);

  // Creating the click handler
  const handleClick = () => {
    setTimeout(() => {
      setCount((c) => c + 1);
    }, 3000);
  };

  // Returned JSX
  return (
    <div>
      <h4>{count}</h4>
      <button className="btn" onClick={handleClick}>
        Increase with delay
      </button>
    </div>
  );
};

export default UseStateGotcha;
