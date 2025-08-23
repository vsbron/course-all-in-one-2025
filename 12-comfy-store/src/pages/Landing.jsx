import { FeaturedProducts, Hero } from "../components";
import { customFetch } from "../utils";

const url = "/products?featured=true";

// Set up the loader
// eslint-disable-next-line react-refresh/only-export-components
export const loader = async () => {
  const response = await customFetch(url);
  const products = response.data.data;
  return { products };
};

function Landing() {
  // Returned JSX
  return (
    <>
      <Hero />
      <FeaturedProducts />
    </>
  );
}

export default Landing;
