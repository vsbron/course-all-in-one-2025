import { useAppContext } from "./reducer/context";

import CartItem from "./CartItem";
const CartContainer = () => {
  // Getting the cart from the reducer
  const { cart } = useAppContext();

  // Converting cart to the array
  const cartArray = Array.from(cart.entries());

  if (cartArray.length === 0) {
    return (
      <section className="cart">
        {/* cart header */}
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      {/* cart header */}
      <header>
        <h2>your bag</h2>
      </header>
      {/* cart items */}
      <div>
        {cartArray.map(({ id, item }) => (
          <CartItem key={id} {...item} />
        ))}
      </div>
      {/* cart footer */}
      <footer>
        <hr />
        <div>
          <h5 className="cart-total">
            total <span>$10</span>
          </h5>
        </div>
        <button
          className="btn btn-hipster"
          onClick={() => console.log("clear cart")}
        >
          clear cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
