import { Link, useLoaderData } from "react-router-dom";
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

  // Guard clause
  if (!data)
    return (
      <>
        <h3>Could not find the drink</h3>
        <p style={{ margin: "1.5rem 0 1rem" }}>
          There was some kind of error. Please try again later...
        </p>
        <p>
          <Link to="/" style={{ color: "var(--primary-500)" }}>
            &laquo; Go back
          </Link>
        </p>
      </>
    );

  // Get the drink props from the fetched data
  const {
    strDrink: name,
    strDrinkThumb: image,
    strAlcoholic: info,
    strCategory: category,
    strGlass: glass,
    strInstructions: instructions,
  } = data.drinks[0];

  // Pull out the ingredients from the drink object
  const validIngredients = Object.keys(data.drinks[0])
    .filter(
      (key) => key.startsWith("strIngredient") && data.drinks[0][key] !== null
    )
    .map((key) => data.drinks[0][key]);

  // Returned JSX
  return (
    <StyledCocktail>
      <header>
        <Link to="/" className="btn">
          Back home
        </Link>
        <h3>{name}</h3>
      </header>
      <div className="drink">
        <img src={image} alt={name} className="img" />
        <div className="drink-info">
          <p>
            <span className="drink-data">Name: </span> {name}
          </p>
          <p>
            <span className="drink-data">Category: </span> {category}
          </p>
          <p>
            <span className="drink-data">Info: </span> {info}
          </p>
          <p>
            <span className="drink-data">Glass: </span> {glass}
          </p>
          <p>
            <span className="drink-data">Ingredients: </span>
            {/* {validIngredients.map((item, index) => (
              <span className="ing" key={item}>
                {item}
                {index < validIngredients.length - 1 ? ", " : ""}
              </span>
            ))} */}
            {validIngredients.join(", ")}
          </p>
          <p>
            <span className="drink-data">Instructions: </span> {instructions}
          </p>
        </div>
      </div>
    </StyledCocktail>
  );
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
