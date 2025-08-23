import { Link, useLoaderData } from "react-router-dom";

import { customFetch, formatPrice } from "../utils";

// Set up the loader
// eslint-disable-next-line react-refresh/only-export-components
export const loader = async ({ params }) => {
  const response = await customFetch(`/products/${params.id}`);
  const product = response.data.data;
  return { product };
};

function SingleProduct() {
  // Get the product from the hook and destructure it
  const { product } = useLoaderData();
  const { image, title, price, description, colors, company } =
    product.attributes;
  const dollarsAmount = formatPrice(price);

  // Returned JSX
  return (
    <section>
      <div className="text-md breadcrumbs mb-6">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </div>
      {/* PRODUCT */}
      <div className="grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
        {/* IMAGE */}
        <img
          src={image}
          alt={title}
          className="w-96 h-96 object-cover rounded-lg lg:w-full"
        />
        {/* PRODUCT INFO */}
        <div>
          <h1 className="capitalize text-3xl font-bold mb-2">{title}</h1>
          <h4 className="text-xl text-neutral-content font-bold mb-3">
            {company}
          </h4>
          <p className="text-xl mb-6">{dollarsAmount}</p>
          <p className="leading-8">{description}</p>
        </div>
      </div>
    </section>
  );
}

export default SingleProduct;
