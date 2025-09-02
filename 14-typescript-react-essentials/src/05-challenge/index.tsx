// Create types for the component
type BasicCardProps = {
  type: "basic";
  name: string;
};
type AdvancedCardProps = {
  type: "advanced";
  name: string;
  email: string;
};
type ProfileCardProps = BasicCardProps | AdvancedCardProps;

// The Component component
function Component(props: ProfileCardProps) {
  // Destructure props
  const { type, name } = props;

  // Returned JSX 1
  if (type === "basic") {
    return (
      <article className="alert alert-success">
        <h2>User: {name}</h2>
      </article>
    );
  }

  // Returned JSX 2
  return (
    <article className="alert alert-danger">
      <h2>User: {name}</h2>
      <h2>Email: {props.email}</h2>
    </article>
  );
}
export default Component;
