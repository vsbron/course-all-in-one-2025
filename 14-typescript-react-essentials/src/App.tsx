import Component from "./02-props";

function App() {
  // Returned JSX
  return (
    <main>
      <Component name="Peter" id={123}>
        Hello hello
      </Component>
      <Component name="Mary" id={456} />
    </main>
  );
}

export default App;
