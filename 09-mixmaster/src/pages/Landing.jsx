import { useLoaderData } from "react-router-dom";
import axios from "axios";

import CocktailList from "../components/CocktailList";
import SearchForm from "../components/SearchForm";

// Fetch URL
const cocktailFetchUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

// Create the loader for the component
export const loader = async () => {
  const searchTerm = "margarita";

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
      <SearchForm />
      <CocktailList drinks={drinks} />
    </>
  );
}

export default Landing;
