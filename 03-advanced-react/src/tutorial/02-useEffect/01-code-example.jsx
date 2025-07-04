import { useState } from "react";

const CodeExample = () => {
  // Setting the value state
  const [value, setValue] = useState(0);

  // Declaring a test function
  const sayHello = () => {
    console.log("Hello");
    // Causes infinite render
    // setValue(val => val + 1)
  };

  // Calling the test function
  sayHello();

  // Returned JSX
  return (
    <div>
      <h1>value : {value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        click me
      </button>
    </div>
  );
};
export default CodeExample;
