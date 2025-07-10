import { useState } from "react";
import { useGlobal } from "./GlobalContext";

function App() {
  // Getting the values from the Context API
  const { name, setName } = useGlobal();

  // Create the state for the input value
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setName(value);
    setValue("");
  };

  // Returned JSX
  return (
    <div style={{ textAlign: "center", margin: "0 auto" }}>
      <h1>Hello world</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          id="name"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
      <div>{name}</div>
    </div>
  );
}

export default App;
