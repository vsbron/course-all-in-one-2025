import { useGlobal } from "./GlobalContext";

function App() {
  // Getting the values from the Context API
  const { value, toggleValue } = useGlobal();

  // Returned JSX
  return (
    <div>
      <h1>Hello world</h1>
      <div>{value ? "Value is true" : "Value is false"}</div>
      <button onClick={toggleValue}>
        Toggle value to {value ? "false" : "true"}
      </button>
    </div>
  );
}

export default App;
