/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";

function Component() {
  // Create state values for primitives
  const [text, setText] = useState<string>("shakeAndBake");
  const [number, setNumber] = useState<number>(3);
  const [list, setList] = useState<string[]>([]);

  // Returned JSX
  return (
    <div>
      <h2 className="mb-1">React & Typescript</h2>
      <h4>{text}</h4>
      <button className="btn btn-center" onClick={() => setText("Hello")}>
        Click me Text
      </button>
    </div>
  );
}
export default Component;
