import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useAppContext } from "./AppContext";

// Set the URL for Unsplash
const url = "https://api.unsplash.com/search/photos?client_id=";

function Gallery() {
  // Getting the searchTerm from context
  const { searchTerm } = useAppContext();

  // Fetching the data
  const { isLoading, data, error } = useQuery({
    queryKey: ["images", searchTerm],
    queryFn: async () => {
      const result = await axios.get(
        `${url}${import.meta.env.VITE_UNSPLASH_PUBLIC_KEY}&query=${searchTerm}`
      );
      return result.data;
    },
  });

  // Guard clauses
  if (isLoading || error || data.results.length < 1)
    return (
      <section className="image-container">
        <h4>
          {isLoading
            ? "Loading..."
            : error
            ? "There was an error"
            : "No images found"}
        </h4>
      </section>
    );

  // Returned JSX
  return (
    <section className="image-container">
      {data.results.map((image) => (
        <img
          src={image?.urls?.regular}
          key={image.id}
          className="img"
          alt={image.alt_description}
        />
      ))}
    </section>
  );
}

export default Gallery;
