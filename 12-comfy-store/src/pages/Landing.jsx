import { FeaturedProducts, Hero } from "../components";
import { customFetch } from "../utils";

// Set upt the Query function
const featuredProductsQuery = {
  queryKey: ["featuredProducts"],
  queryFn: () => customFetch("/products?featured=true"),
};

// Set up the loader
// eslint-disable-next-line react-refresh/only-export-components
export const loader = (queryClient) => async () => {
  const response = await queryClient.ensureQueryData(featuredProductsQuery);
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
