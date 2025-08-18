import { useLoaderData } from "react-router-dom";
import axios from "axios";

import CocktailList from "../components/CocktailList";
import SearchForm from "../components/SearchForm";

// Fetch URL
const cocktailFetchUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

// Create the loader for the component
export const loader = async ({ request }) => {
  // Getting the URL and the value of search
  const url = new URL(request.url);
  const searchTerm = url.searchParams.get("search") || "";

  // Fetch the data
  const response = await axios.get(`${cocktailFetchUrl}${searchTerm}`);

  // Return the data
  return { drinks: response.data.drinks, searchTerm };
};

// The Landing component
function Landing() {
  // Get the data from the loader
  const { drinks, searchTerm } = useLoaderData();

  // Returned JSX
  return (
    <>
      <SearchForm searchTerm={searchTerm} />
      <CocktailList drinks={drinks} />
    </>
  );
}

export default Landing;
