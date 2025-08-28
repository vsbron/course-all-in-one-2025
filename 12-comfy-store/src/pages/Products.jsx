import { Filters, PaginationContainer, ProductsContainer } from "../components";
import { customFetch } from "../utils";

// Set up the Query function
const allProductsQuery = (params) => {
  // Destructuring params
  const { search, category, company, sort, price, shipping, page } = params;

  return {
    queryKey: [
      "products",
      search ?? "",
      category ?? "all",
      company ?? "all",
      sort ?? "A-Z",
      price ?? 100000,
      shipping ?? false,
      page ?? 1,
    ],
    queryFn: () => customFetch("/products", { params }),
  };
};

// Set up the loader
// eslint-disable-next-line react-refresh/only-export-components
export const loader =
  (queryClient) =>
  async ({ request }) => {
    // Get the search params to the array
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);
    // Fetch the data
    const response = await queryClient.ensureQueryData(
      allProductsQuery(params)
    );
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
