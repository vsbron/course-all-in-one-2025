// Create the type for the props
type ComponentProps = { name: string; id: number; children?: React.ReactNode };

// The Component component
function Component({ name, id, children }: ComponentProps) {
  // Returned JSX
  return (
    <div>
      <h2>React & Typescript</h2>
      <h2>Props</h2>
      <p>Name: {name}</p>
      <p>ID: {id}</p>
      <p>{children}</p>
    </div>
  );
}
export default Component;
