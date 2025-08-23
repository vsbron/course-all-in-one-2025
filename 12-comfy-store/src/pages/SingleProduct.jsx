import { Link, useLoaderData } from "react-router-dom";

import { useState } from "react";
import { customFetch, formatPrice, generateAmountOptions } from "../utils";

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

  // Set the state value for product color and amount
  const [productColor, setProductColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  // Change amount handler
  const handleAmount = (e) => {
    setAmount(parseInt(e.target.value));
  };

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
          <p className="leading-8 mb-6">{description}</p>
          {/* COLORS */}
          <div className="mb-4">
            <h4 className="font-medium tracking-wider capitalize mb-2">
              Colors
            </h4>
            <div>
              {colors.map((color) => (
                <button
                  key={color}
                  type="button"
                  className={`badge w-6 h-6 mr-2 cursor-pointer ${
                    color === productColor && "border-2 border-secondary"
                  }`}
                  style={{ background: color }}
                  onClick={() => setProductColor(color)}
                ></button>
              ))}
            </div>
          </div>
          {/* AMOUNT */}
          <div className="w-full max-w-xs mb-10">
            <label className="label" htmlFor="amount">
              <h4 className="font-medium tracking-wider capitalize text-base-content mb-2">
                Amount
              </h4>
            </label>
            <select
              id="amount"
              className="select select-secondary select-bordered select-md"
              value={amount}
              onChange={handleAmount}
            >
              {generateAmountOptions(3)}
            </select>
          </div>
          {/* CART BUTTON */}
          <div>
            <button
              className="btn btn-secondary btn-md uppercase"
              onClick={() => console.log("Added to bag")}
            >
              Add to Bag
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SingleProduct;
