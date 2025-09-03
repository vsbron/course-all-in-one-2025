import { fetchTours } from "./types";
import { useQuery } from "@tanstack/react-query";

function Component() {
  // Get the data with useQuery hook
  const {
    isPending,
    error,
    data: tours,
  } = useQuery({
    queryKey: ["tours"],
    queryFn: fetchTours,
  });

  // Guard clauses
  if (isPending) return <h2>Loading...</h2>;
  if (error) return <h2>Error: {error.message}</h2>;

  // Returned JSX
  return (
    <div>
      <h2 className="mb-1">Tours</h2>
      {tours.map((tour) => (
        <p className="mb-1" key={tour.id}>
          {tour.name}
        </p>
      ))}
    </div>
  );
}

export default Component;
