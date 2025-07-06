import { useState, useEffect } from "react";

const Example = () => {
  // Creating the condition state
  const [condition, setCondition] = useState(true);

  // This won't work (can't create state inside IF (conditional))
  // if (condition) {
  //   const [state, setState] = useState(false);
  // }

  // // This will also fail cannot create hook after conditional IF
  // if (condition) {
  //   return <h2>Hello There</h2>;
  // }
  // useEffect(() => {
  //   console.log("hello there");
  // }, []);

  // Returned JSX
  return <h2>example</h2>;
};

export default Example;
