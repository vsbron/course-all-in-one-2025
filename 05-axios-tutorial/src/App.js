import Title from "./components/Title";
import Setup from "./examples/4-global-instance";
import "./axios/global";

function App() {
  // Returned JSX
  return (
    <main>
      <Title />
      <Setup />
    </main>
  );
}

export default App;
