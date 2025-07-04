import { useEffect, useState } from "react";

const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturnsFetchData = () => {
  // Creating the state for the user
  const [user, setUser] = useState(null);

  // Creating the useEffect function
  useEffect(() => {
    // Creating abort controller for fetch function
    const controller = new AbortController();
    const signal = controller.signal;

    // The fetch function
    const fetchData = async () => {
      try {
        const response = await fetch(url, { signal });
        const data = await response.json();
        console.log(data);
        setUser(data);
      } catch {
        console.log("There was an error while fetching data");
      }
    };

    // Calling the fetch function
    fetchData();

    // Clear the fetch function
    return () => controller.abort();
  }, []);

  // Returned JSX
  return <h2>Fetch Data</h2>;
};
export default MultipleReturnsFetchData;
