import { useState, useEffect } from "react";
const url = "https://www.course-api.com/react-tours-project";

function Component() {
  // Create state value for loading and error
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // useFEtch function that fetches the data
  useEffect(() => {
    const fetchData = async () => {
      // Enable loading state
      setIsLoading(true);
      try {
        // Fetch the data
        const response = await fetch(url);

        // Guard clause
        if (!response.ok) {
          throw new Error(`Failed to fetch tours...`);
        }

        // JSON and log the data
        const rawData = await response.json();
        console.log(rawData);
      } catch (err) {
        const message =
          err instanceof Error ? err.message : "There was an error...";
        setError(message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  // Returned JSX
  return (
    <div>
      <h2>React & Typescript</h2>
      <h2>Fetch Data</h2>
    </div>
  );
}
export default Component;
