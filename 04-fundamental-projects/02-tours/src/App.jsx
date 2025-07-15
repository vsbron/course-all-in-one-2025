import { useEffect, useState } from "react";

import Loading from "./Loading";
import Tours from "./Tours";

// Tours API url
const url = "https://www.course-api.com/react-tours-project";

const App = () => {
  // Creating the state values for loading and tours
  const [isLoading, setIsLoading] = useState(false);
  const [tours, setTours] = useState([]);

  // useEffect function that fetches the tours data
  useEffect(() => {
    // Creating controller for fetch function
    const controller = new AbortController();
    const signal = controller.signal;

    // Declare the fetch function
    const fetchTours = async () => {
      try {
        // Enabling the loading state
        setIsLoading(true);

        // Fetch data
        const response = await fetch(url, { signal });
        const data = await response.json();

        setTours(data);
      } catch (error) {
        if (error.name === "AbortError") {
          return;
        }
        console.error("Fetch error:", error);
      } finally {
        setIsLoading(false);
      }
    };

    // Call the function
    fetchTours();

    // Cleanup function
    return () => controller.abort();
  }, []);

  // Returned JSX
  return <div>{isLoading ? <Loading /> : <Tours />}</div>;
};
export default App;
