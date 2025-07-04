import { useEffect, useState } from "react";

const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturnsFetchData = () => {
  // Creating the state for the user, loading and error
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  // Creating the useEffect function
  useEffect(() => {
    // Creating abort controller for fetch function
    const controller = new AbortController();
    const signal = controller.signal;

    // The fetch function
    const fetchData = async () => {
      try {
        // Enabling loading state
        setIsLoading(true);

        // Fetching the data
        const response = await fetch(url, { signal });
        const data = await response.json();

        // Disabling the error, setting the user
        setIsError(false);
        setUser(data);
      } catch {
        // If error, enabling error, logging the message
        setIsError(true);
        console.log("There was an error while fetching data");
      } finally {
        // Disabling the loading state
        setIsLoading(false);
      }
    };

    // Calling the fetch function
    fetchData();

    // Clear the fetch function
    return () => controller.abort();
  }, []);

  // Returned JSX
  if (isLoading) {
    return <h2>Loading</h2>;
  } else if (isError) {
    return <h2>There was an error while fetching data</h2>;
  } else
    return (
      <>
        <h2>Fetch Data</h2>
        <div>{user.login}</div>
      </>
    );
};
export default MultipleReturnsFetchData;
