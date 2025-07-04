import { useEffect, useState } from "react";

const UseEffectBasics = () => {
  // Creating the value state
  const [value, setValue] = useState(0);

  // Declaring a test function
  const sayHello = () => {
    console.log("hello there");
  };

  // Calling the test function
  sayHello();

  // Creating an useEffect function
  useEffect(() => {
    console.log("Hello from useEffect");
  }, []);

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
export default UseEffectBasics;
