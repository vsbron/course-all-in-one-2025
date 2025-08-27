import { redirect } from "react-router-dom";
import { toast } from "react-toastify";

// Set the loader
// eslint-disable-next-line react-refresh/only-export-components
export const loader = (store) => () => {
  // Get the user info from the store
  const user = store.getState().user.user;

  // If no user redirect to login page
  if (!user) {
    toast.warn("You must be logged in to access the orders");
    return redirect("/login");
  }
  return null;
};

function Orders() {
  // Returned JSX
  return <div>Orders</div>;
}

export default Orders;
