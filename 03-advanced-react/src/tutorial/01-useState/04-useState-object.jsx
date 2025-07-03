import { useState } from "react";

const UseStateObject = () => {
  // Initiating the state
  const [name, setName] = useState("Eugene");
  const [age, setAge] = useState(29);
  const [hobby, setHobby] = useState("Wrestling");

  // Creating the click handler
  const handleClick = () => {
    setName("Boris");
    setAge(37);
    setHobby("React");
  };

  // Returned JSX
  return (
    <div>
      <h4>{name}</h4>
      <h4>{age}</h4>
      <h4>{hobby}</h4>
      <button onClick={handleClick}>Set changes</button>
    </div>
  );
};

export default UseStateObject;
