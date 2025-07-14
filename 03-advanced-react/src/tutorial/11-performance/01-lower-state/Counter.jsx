import { useState } from "react";

function Counter() {
  // Creating state value for counter
  const [count, setCount] = useState(0);

  // Returned JSX
  return (
    <button
      className="btn"
      onClick={() => setCount(count + 1)}
      style={{ marginBottom: "1rem" }}
    >
      count {count}
    </button>
  );
}

export default Counter;
