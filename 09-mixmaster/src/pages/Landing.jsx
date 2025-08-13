import { useLoaderData } from "react-router-dom";
import axios from "axios";

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

  console.log(drinks);

  // Returned JSX
  return <h1>Landing</h1>;
}

export default Landing;
