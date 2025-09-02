import { useTheme, ThemeProvider } from "./context";

// The Parent component
function ParentComponent() {
  return (
    <ThemeProvider>
      <Component />
    </ThemeProvider>
  );
}

// The component
function Component() {
  // Get the context from the Context API
  const { name } = useTheme();
  console.log(name);

  // Returned JSX
  return (
    <div>
      <h2>React & Typescript</h2>
      <h2>Context API</h2>
    </div>
  );
}
export default ParentComponent;
