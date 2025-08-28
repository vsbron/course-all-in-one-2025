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

    // Sort the page
    let orderedProducts;
    switch (params.order) {
      case "A-Z":
        orderedProducts = [...products].sort((a, b) =>
          a.attributes.title.localeCompare(b.attributes.title)
        );
        break;
      case "Z-A":
        orderedProducts = [...products].sort((a, b) =>
          b.attributes.title.localeCompare(a.attributes.title)
        );
        break;
      case "High price to Low":
        orderedProducts = [...products].sort(
          (a, b) => b.attributes.price - a.attributes.price
        );
        break;
      case "Low price to High":
        orderedProducts = [...products].sort(
          (a, b) => a.attributes.price - b.attributes.price
        );
        break;
      default:
        orderedProducts = [...products];
    }

    // Return the products, meta data and params
    return { products: orderedProducts, meta, params };
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
