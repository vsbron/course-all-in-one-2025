import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import CartContainer from "./components/CartContainer";
import Navbar from "./components/Navbar";
import { calculateTotals } from "./features/cart/cartSlice";
import Modal from "./components/Modal";

function App() {
  // Get the cart Items from redux store and dispatch function
  const { isOpen } = useSelector((store) => store.modal);
  const { cartItems } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  // Recalculate amount and total on each cart items change
  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

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
