import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { calculateTotals, getCartItems } from "./features/cart/cartSlice";
import CartContainer from "./components/CartContainer";
import Navbar from "./components/Navbar";
import Modal from "./components/Modal";

function App() {
  // Get the cart Items from redux store and dispatch function
  const { isOpen } = useSelector((store) => store.modal);
  const { cartItems, isLoading } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  // Get the cart items from the API on load
  useEffect(() => {
    dispatch(getCartItems());
  }, []);

  // Recalculate amount and total on each cart items change
  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  // Guard clause
  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }

  // Returned JSX
  return (
    <main>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
