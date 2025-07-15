import { useEffect, useState } from "react";

import Loading from "./Loading";
import Tours from "./Tours";

// Tours API url
const url = "https://www.course-api.com/react-tours-project";

const App = () => {
  // Creating the state values for loading and tours
  const [isLoading, setIsLoading] = useState(false);
  const [tours, setTours] = useState([]);

  // Declare the fetch tours function
  const fetchTours = async (signal) => {
    try {
      setIsLoading(true);
      const response = await fetch(url, { signal });
      const data = await response.json();
      setTours(data);
    } catch (error) {
      if (error.name === "AbortError") return;
      console.error("Fetch error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // useEffect function that fetches the tours data
  useEffect(() => {
    // Creating controller for fetch function adn call the function
    const controller = new AbortController();
    fetchTours(controller.signal);

    // Cleanup function
    return () => controller.abort();
  }, []);

  // Create the remove tour function
  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  // Returned JSX
  return (
    <main>
      {isLoading ? (
        <Loading />
      ) : tours.length > 0 ? (
        <Tours tours={tours} removeTour={removeTour} />
      ) : (
        <div className="title">
          <h2>No tours left</h2>
          <div className="title-underline"></div>
          <button
            type="button"
            style={{ marginTop: "2rem" }}
            className="btn"
            onClick={() => fetchTours()}
          >
            Refresh
          </button>
        </div>
      )}
    </main>
  );
};
export default App;
