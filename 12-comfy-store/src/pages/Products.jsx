import { Filters, PaginationContainer, ProductsContainer } from "../components";
import { customFetch } from "../utils";

// Set up the loader
// eslint-disable-next-line react-refresh/only-export-components
export const loader = async ({ request }) => {
  // Get the search params to the array
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);
  // Fetch the data
  const response = await customFetch("/products", { params });
  const products = response.data.data;
  const meta = response.data.meta;
  return { products, meta, params };
};

function Products() {
  // Returned JSX
  return (
    <>
      <Filters />
      <ProductsContainer />
      <PaginationContainer />
    </>
  );
}

export default Products;
