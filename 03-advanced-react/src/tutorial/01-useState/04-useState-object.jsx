import { useState } from "react";

const UseStateObject = () => {
  // Initiating the state
  const [person, setPerson] = useState({
    name: "Eugene",
    age: 29,
    hobby: "Wrestling",
  });

  // Creating the click handler
  const handleClick = () => {
    setPerson({ name: "Boris", age: 37, hobby: "React" });
  };

  // Returned JSX
  return (
    <div>
      <h4>{person.name}</h4>
      <h4>{person.age}</h4>
      <h4>{person.hobby}</h4>
      <button onClick={handleClick}>Set changes</button>
    </div>
  );
};

export default UseStateObject;
