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
