import { FeaturedProducts, Hero } from "../components";
import { customFetch } from "../utils";

// Set up the loader
// eslint-disable-next-line react-refresh/only-export-components
export const loader = (queryClient) => async () => {
  const response = await customFetch("/products?featured=true");
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
