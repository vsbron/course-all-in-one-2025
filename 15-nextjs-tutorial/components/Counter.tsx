"use client";

import { useState } from "react";

function Counter() {
  // Create state value for Count
  const [count, setCount] = useState<number>(0);

  // Click handler
  const increment = () => {
    setCount((c) => c + 1);
  };

  // Returned JSX
  return (
    <div className="flex flex-col items-center w-[100px]">
      <p className="text-5xl font-bold">{count}</p>
      <button
        onClick={increment}
        className="bg-blue-500 rounded text-white px-4 py-2 mt-2 cursor-pointer hover:bg-blue-400"
      >
        Increment
      </button>
    </div>
  );
}

export default Counter;
