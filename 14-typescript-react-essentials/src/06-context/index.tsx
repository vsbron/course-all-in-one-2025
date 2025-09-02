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
  const { theme, setTheme } = useTheme();
  console.log(theme, setTheme);

  // Returned JSX
  return (
    <div>
      <h2>React & Typescript</h2>
      <button
        className="btn btn-center"
        onClick={() => {
          if (theme === "dark") {
            setTheme("system");
            return;
          }
          if (theme === "system") {
            setTheme("dark");
            return;
          }
        }}
      >
        Toggle theme
      </button>
    </div>
  );
}
export default ParentComponent;
