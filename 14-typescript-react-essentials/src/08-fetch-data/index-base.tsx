import { useState, useEffect } from "react";
import { tourSchema, type Tour } from "./types";

const url = "https://www.course-api.com/react-tours-project";

function Component() {
  // Create state value for tours, loading and error
  const [tours, setTours] = useState<Tour[]>([]);
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
        const rawData: Tour[] = await response.json();

        // Checking the data type with the one we have from Zod
        const result = tourSchema.array().safeParse(rawData);
        if (!result.success) {
          console.log(result.error.message);
          throw new Error(`Failed to parse tours...`);
        }

        // Update the state
        setTours(result.data);
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

  // Guard clauses
  if (isLoading) {
    return <h3>Loading...</h3>;
  }
  if (error) {
    return <h3>Error {error}</h3>;
  }

  // Returned JSX
  return (
    <div>
      <h2 className="mb-1">Tours</h2>
      {tours.map((tour) => (
        <p key={tour.id} className="mb-1">
          {tour.name}
        </p>
      ))}
    </div>
  );
}
export default Component;
