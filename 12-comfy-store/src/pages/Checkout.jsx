import { redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

import { CheckoutForm, SectionTitle, CartTotals } from "../components";

// Set the loader
// eslint-disable-next-line react-refresh/only-export-components
export const loader = (store) => () => {
  // Get the user info from the store
  const user = store.getState().user.user;

  // If no user redirect to login page
  if (!user) {
    toast.warn("You must be logged in to checkout");
    return redirect("/login");
  }
  return null;
};

function Checkout() {
  // Get the total number of items in the cart
  const cartTotal = useSelector((store) => store.cart.cartTotal);

  // Guard clause
  if (cartTotal === 0) {
    return <SectionTitle text="Your cart is empty" />;
  }

  // Returned JSX
  return (
    <>
      <SectionTitle text="Place your order" />
      <div className="mt-8 grid gap-8 md:grid-cols-2 items-start">
        <CheckoutForm />
        <CartTotals />
      </div>
    </>
  );
}

export default Checkout;
