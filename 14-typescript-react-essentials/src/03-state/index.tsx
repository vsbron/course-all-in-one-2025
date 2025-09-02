/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";

// Create the type for Link
type Link = {
  id: number;
  url: string;
  text: string;
};

// Create the navLinks array
const navLinks: Link[] = [
  { id: 1, url: "some url 1", text: "some text 1" },
  { id: 2, url: "some url 2", text: "some text 2" },
  { id: 3, url: "some url 3", text: "some text 3" },
];

// The Component component
function Component() {
  // Create state values for primitives
  const [text, setText] = useState<string>("shakeAndBake");
  const [number, setNumber] = useState<number>(3);
  const [list, setList] = useState<string[]>([]);

  // Create state value with custom types
  const [links, setLinks] = useState<Link[]>(navLinks);

  // Returned JSX
  return (
    <div>
      <h2 className="mb-1">React & Typescript</h2>
      <h4>{text}</h4>
      <button
        className="btn btn-center"
        onClick={() => {
          setText("Hello");
          setLinks([
            ...links,
            { id: 4, url: "some url 4", text: "some text 4" },
          ]);
        }}
      >
        Click me Text
      </button>
    </div>
  );
}
export default Component;
