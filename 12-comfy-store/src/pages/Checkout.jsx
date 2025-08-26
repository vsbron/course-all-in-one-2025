import { useSelector } from "react-redux";

import { CheckoutForm, SectionTitle, CartTotals } from "../components";

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
