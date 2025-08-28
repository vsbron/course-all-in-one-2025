import { redirect, useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";

import { customFetch } from "../utils";
import {
  OrdersList,
  ComplexPaginationContainer,
  SectionTitle,
} from "../components";

// Set up the Query function
const ordersQuery = (user, params) => {
  return {
    queryKey: [
      "orders",
      user.username,
      params.page ? parseInt(params.page) : 1,
    ],
    queryFn: () =>
      customFetch.get("/orders", {
        params,
        headers: { Authorization: `Bearer ${user.token}` },
      }),
  };
};

// Set the loader
// eslint-disable-next-line react-refresh/only-export-components
export const loader =
  (store, queryClient) =>
  async ({ request }) => {
    // Get the user info from the store
    const user = store.getState().user.user;

    // If no user redirect to login page
    if (!user) {
      toast.warn("You must be logged in to view the orders");
      return redirect("/login");
    }

    // Get the entries from url params
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);

    try {
      // Fetch all the orders
      const response = await queryClient.ensureQueryData(
        ordersQuery(user, params)
      );

      // Return the orders and meta data
      return { orders: response.data.data, meta: response.data.meta };
    } catch (err) {
      // If not, generate error message and toast it
      const errorMessage =
        err?.response?.data?.error?.message ||
        "There was an error placing your order";
      toast.error(errorMessage);
      if (err?.response?.status === 401 || err?.response?.status === 403)
        return redirect("/login");
      return null;
    }
  };

// The Orders component
function Orders() {
  // Get the meta data from the loader
  const { meta } = useLoaderData();

  // Guard clause if no errors
  if (meta.pagination.total < 1) {
    return <SectionTitle text="Please make an order" />;
  }

  // Returned JSX
  return (
    <>
      <SectionTitle text="Your orders" />
      <OrdersList />
      <ComplexPaginationContainer />
    </>
  );
}

export default Orders;
