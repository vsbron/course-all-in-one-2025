import { useLoaderData } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

// Fetch URL
const singleCocktailUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

// Create the loader for the component
export const loader = async ({ params }) => {
  // Fetch the data using the id
  const { data } = await axios.get(`${singleCocktailUrl}${params.id}`);

  // Return the data
  return { id: params.id, data };
};

// The Cocktail component
function Cocktail() {
  // Get the data from the loader
  const { id, data } = useLoaderData();

  // Returned JSX
  return <StyledCocktail>Cocktail</StyledCocktail>;
}

// Styled components
const StyledCocktail = styled.div`
  header {
    text-align: center;
    margin-bottom: 3rem;
    .btn {
      margin-bottom: 1rem;
    }
  }
  .img {
    border-radius: var(--borderRadius);
  }
  .drink-info {
    padding-top: 2rem;
  }
  .drink p {
    font-weight: 700;
    text-transform: capitalize;
    line-height: 2;
    margin-bottom: 1rem;
  }
  .drink-data {
    margin-right: 0.5rem;
    background: var(--primary-300);
    padding: 0.25rem 0.5rem;
    border-radius: var(--borderRadius);
    color: var(--primary-700);
    letter-spacing: var(--letterSpacing);
  }
  .ing {
    display: inline-block;
    margin-right: 0.5rem;
  }
  @media (min-width: 992px) {
    .drink {
      display: grid;
      grid-template-columns: 2fr 3fr;
      gap: 3rem;
      align-items: center;
    }
    .drink-info {
      padding-top: 0;
    }
  }
`;

export default Cocktail;
