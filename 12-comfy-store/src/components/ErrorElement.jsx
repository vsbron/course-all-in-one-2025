import { useRouteError } from "react-router-dom";

function ErrorElement() {
  // Get the error object from the hook
  const error = useRouteError();
  console.log(error);

  // Returned JSX
  return <h4 className="font-bold text-4xl">There was an error...</h4>;
}

export default ErrorElement;
