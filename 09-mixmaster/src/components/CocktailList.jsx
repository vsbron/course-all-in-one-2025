import styled from "styled-components";

import CocktailCard from "./CocktailCard";

function CocktailList({ drinks }) {
  // Guard clause
  if (!drinks)
    return <h4 style={{ textAlign: "center" }}>No matching cocktails</h4>;

  // Reformat drink props
  const formattedDrinks = drinks.map(
    ({ idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass }) => {
      return {
        id: idDrink,
        name: strDrink,
        image: strDrinkThumb,
        info: strAlcoholic,
        glass: strGlass,
      };
    }
  );

  // Returned JSX
  return (
    <StyledCocktailList>
      {formattedDrinks.map((drink) => (
        <CocktailCard key={drink.id} {...drink} />
      ))}
    </StyledCocktailList>
  );
}

// Styled components
const StyledCocktailList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`;

export default CocktailList;
