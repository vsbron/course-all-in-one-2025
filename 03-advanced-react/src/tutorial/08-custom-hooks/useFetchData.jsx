import { useEffect, useState } from "react";

const useFetchData = (url) => {
  // Creating the state variables
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState(null);

  // useEffect function that fetches the data
  useEffect(() => {
    // Setting the controller for the cleanup function
    const controller = new AbortController();
    const signal = controller.signal;

    // Fetch function
    const fetchData = async () => {
      try {
        const resp = await fetch(url, { signal });
        // console.log(resp);
        if (!resp.ok) {
          setIsError(true);
          setIsLoading(false);
          return;
        }

        const data = await resp.json();
        setData(data);
        setIsError(false);
      } catch (error) {
        setIsError(true);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();

    // Cleanup function
    return () => controller.abort();
  }, [url]);

  // Returned values
  return { isLoading, isError, data };
};

export default useFetchData;
