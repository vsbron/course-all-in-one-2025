import { useDispatch, useSelector } from "react-redux";

import CartItem from "./CartItem";
import { clearCart } from "../features/cart/cartSlice";

function CartContainer() {
  // Getting the cart values from the Redux
  const { cartItems, amount, total } = useSelector((store) => store.cart);

  // Get the dispatch function
  const dispatch = useDispatch();

  // Guard clause for empty cart
  if (amount < 1)
    return (
      <section className="cart">
        <header>
          <h2>Your Bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );

  // Returned JSX
  return (
    <section className="cart">
      <header>
        <h2>Your Bag</h2>
      </header>
      <div>
        {cartItems.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            Total <span>${total}</span>
          </h4>
        </div>
        <button
          className="btn clear-btn"
          onClick={() => {
            dispatch(clearCart());
          }}
        >
          Clear cart
        </button>
      </footer>
    </section>
  );
}

export default CartContainer;
