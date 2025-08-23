import { ProductsGrid, SectionTitle } from "./";

function FeaturedProducts() {
  // Returned JSX
  return (
    <div className="pt-24">
      <SectionTitle text="Featured Products" />
      <ProductsGrid />
    </div>
  );
}

export default FeaturedProducts;
