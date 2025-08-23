import axios from "axios";

// Set the production URL
const productionUrl = "https://strapi-store-server.onrender.com/api";
// All products - */products
// Featured products - */products?featured=true
// Single product - */products/19

// Create the basic instance of axios
export const customFetch = axios.create({
  baseURL: productionUrl,
});

/* ------------------------------------------- */

// Helper function to format the price
export const formatPrice = (price) => {
  const dollarsAmount = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format((price / 100).toFixed(2));

  // Return the new value
  return dollarsAmount;
};

// Helper function to generate amount options
export const generateAmountOptions = (number) => {
  return Array.from({ length: number }, (_, index) => {
    const amount = index + 1;
    return (
      <option key={index} value={amount}>
        {amount}
      </option>
    );
  });
};
