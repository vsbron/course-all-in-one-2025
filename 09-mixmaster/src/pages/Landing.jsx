import { useLoaderData } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import CocktailList from "../components/CocktailList";
import SearchForm from "../components/SearchForm";

// Fetch URL
const cocktailFetchUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

// Query function that fetches and caches the query
const searchCocktailsQuery = (searchTerm) => {
  return {
    queryKey: ["search", searchTerm || "all"],
    queryFn: async () => {
      // Fetch the actual data
      searchTerm = searchTerm || "a";
      const response = await axios.get(`${cocktailFetchUrl}${searchTerm}`);
      return response.data.drinks;
    },
  };
};

// Create the loader for the component
export const loader =
  (queryClient) =>
  async ({ request }) => {
    // Getting the URL and the value of search
    const url = new URL(request.url);
    const searchTerm = url.searchParams.get("search") || "";

    // Pre-fetch the data for initial load
    queryClient.ensureQueryData(searchCocktailsQuery(searchTerm));

    // Return the data
    return { searchTerm };
  };

// The Landing component
function Landing() {
  // Get the data from the loader and React Query
  const { searchTerm } = useLoaderData();
  const { data: drinks } = useQuery(searchCocktailsQuery(searchTerm));

  // Returned JSX
  return (
    <>
      <SearchForm searchTerm={searchTerm} />
      <CocktailList drinks={drinks} />
    </>
  );
}

export default Landing;
