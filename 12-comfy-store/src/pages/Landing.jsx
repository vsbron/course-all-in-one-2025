import { Hero } from "../components";
import { customFetch } from "../utils";

const url = "/products?featured=true";

// Set up the loader
export const loader = async () => {
  const response = await customFetch(url);
  const products = response.data.data;
  console.log(products);
  return { products };
};

function Landing() {
  // Returned JSX
  return (
    <>
      <Hero />
    </>
  );
}

export default Landing;
