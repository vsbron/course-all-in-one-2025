import { useRouteError } from "react-router-dom";

function SinglePageError() {
  // Get the error from the hook
  const error = useRouteError();

  // Returned JSX
  return <h2>{error.message}</h2>;
}

export default SinglePageError;
