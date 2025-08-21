import { useRouteError, Link } from "react-router-dom";

function Error() {
  // Get the error object from the hook
  const error = useRouteError();

  // Special return for 404 error
  if (error.status === 404) {
    return (
      <main className="grid min-h-[100vh] place-items-center px-8">
        <div className="text-center">
          <p className="text-9xl font-semibold text-primary mb-4">404</p>
          <h1 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6">
            Page not found
          </h1>
          <p className="text-lg leading-7 mb-10">
            Sorry, we couldn't find the page you're looking for
          </p>
          <div>
            <Link to="/" className="btn btn-secondary">
              Go back home
            </Link>
          </div>
        </div>
      </main>
    );
  }

  // Returned JSX
  return (
    <main className="grid min-h-[100vh] place-items-center px-8">
      <h4 className="text-center font-bold text-4xl">There was en error.</h4>
    </main>
  );
}

export default Error;
