import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// Set the URL for Unsplash
const url = "https://api.unsplash.com/search/photos?client_id=";

function Gallery() {
  // Fetching the data
  const response = useQuery({
    queryKey: ["images"],
    queryFn: async () => {
      const result = await axios.get(
        `${url}${import.meta.env.VITE_UNSPLASH_PUBLIC_KEY}&query=office`
      );
      return result.data;
    },
  });

  // Returned JSX
  return <div>Gallery</div>;
}

export default Gallery;
