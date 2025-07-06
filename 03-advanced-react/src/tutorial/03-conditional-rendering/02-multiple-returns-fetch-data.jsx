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

        // Guard clause
        if (!response.ok) {
          setIsError(true);
          return;
        }

        // Getting the actual data
        const data = await response.json();

        // Disabling the error, setting the user
        setIsError(false);
        setUser(data);
      } catch (err) {
        // If error, enabling error, logging the message
        setIsError(true);
        console.log(err);
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

  // Returned conditional JSX
  if (isLoading) {
    return <h2>Loading</h2>;
  }
  if (isError) {
    return <h2>There was an error while fetching data</h2>;
  }
  return (
    <>
      <h2>Fetch Data</h2>
      <div>
        <img
          src={user.avatar_url}
          style={{ borderRadius: "25px" }}
          width="150"
          height="150"
          alt={user.login}
          title={user.name}
        />
        <h3>{user.name}</h3>
        <h4>Works at {user.company}</h4>
        <p>{user.bio}</p>
      </div>
    </>
  );
};
export default MultipleReturnsFetchData;
