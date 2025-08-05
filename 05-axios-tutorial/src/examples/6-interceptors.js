import { useEffect } from "react";

import authFetch from "../axios/interceptors";

// Setting the URL for fetch
const url = "https://www.course-api.com/react-store-products";

const Interceptors = () => {
  // Create the fetch function
  const fetchData = async () => {
    try {
      const resp = await authFetch("react-store-products");
      console.log(resp);
    } catch (error) {}
  };

  // useEffect that calls the fetch function
  useEffect(() => {
    fetchData();
  }, []);

  // Returned JSX
  return <h2 className="text-center">interceptors</h2>;
};

export default Interceptors;
