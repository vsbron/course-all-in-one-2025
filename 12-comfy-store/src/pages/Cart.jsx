import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { CartItemsList, SectionTitle, CartTotals } from "../components";

function Cart() {
  // Temp user logic
  const user = null;

  // Get the total number of items in the cart
  const numItemsInCart = useSelector((state) => state.cart.numItemsInCart);

  // Guard clause if cart is empty
  if (numItemsInCart === 0) return <SectionTitle text="Your cart is empty" />;

  // Returned JSX
  return (
    <>
      <SectionTitle text="Shopping Cart" />
      <div className="mt-8 grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <CartItemsList />
        </div>
        <div className="lg:col-span-4 lg:pl-4">
          <CartTotals />
          {user ? (
            <Link
              to="/checkout"
              className="btn btn-primary btn-block mt-8 uppercase"
            >
              Proceed to checkout
            </Link>
          ) : (
            <Link
              to="/login"
              className="btn btn-primary btn-block mt-8 uppercase"
            >
              Please log in
            </Link>
          )}
        </div>
      </div>
    </>
  );
}

export default Cart;
