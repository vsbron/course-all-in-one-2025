import { Filters, PaginationContainer, ProductsContainer } from "../components";
import { customFetch } from "../utils";

// Set up the loader
// eslint-disable-next-line react-refresh/only-export-components
export const loader = async () => {
  const response = await customFetch("/products");
  const products = response.data.data;
  const meta = response.data.meta;
  return { products, meta };
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
