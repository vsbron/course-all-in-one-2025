import { useState } from "react";

const ShortCircuitOverview = () => {
  const [text, setText] = useState("");
  const [name, setName] = useState("Susan");
  console.log();

  // Returned JSX
  return (
    <>
      <h2>Short Circuit Overview</h2>
      <div>Falsy OR: {text || "Hello world"}</div>
      <div>Falsy AND: {text && "Hello world"}</div>
      <div>Truthy OR: {name || "Hello world"}</div>
      <div>Truthy AND: {name && "Hello world"}</div>
    </>
  );
};
export default ShortCircuitOverview;
