import { Form, useLoaderData, Link } from "react-router-dom";

import { FormCheckbox, FormInput, FormRange, FormSelect } from "./";

function Filters() {
  // Get the meta data from the loader hook
  const { meta, params } = useLoaderData();

  // Destructure existing filter params
  const { category, company, order, price, shipping, search } = params;

  // Returned JSX
  return (
    <Form className="bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
      {/* SEARCH */}
      <FormInput
        type="search"
        label="search product"
        name="search"
        size="input-sm"
        defaultValue={search}
      />
      {/* CATEGORIES */}
      <FormSelect
        label="Select category"
        name="category"
        list={meta.categories}
        defaultValue={category}
        size="select-sm"
      />
      {/* COMPANIES */}
      <FormSelect
        label="Select company"
        name="company"
        list={meta.companies}
        defaultValue={company}
        size="select-sm"
      />
      {/* ORDER */}
      <FormSelect
        label="Sort by"
        name="order"
        list={["A-Z", "Z-A", "High price to Low", "Low price to High"]}
        defaultValue={order}
        size="select-sm"
      />
      {/* PRICE */}
      <FormRange
        label="select price"
        name="price"
        size="range-sm"
        price={price}
      />
      {/* SHIPPING */}
      <FormCheckbox
        name="shipping"
        label="Free shipping"
        size="checkbox-sm"
        defaultValue={shipping}
      />
      {/* BUTTONS */}
      <button type="submit" className="btn btn-primary btn-sm uppercase">
        Search
      </button>
      <Link to="/products" className="btn btn-accent btn-sm uppercase">
        Reset
      </Link>
    </Form>
  );
}

export default Filters;
