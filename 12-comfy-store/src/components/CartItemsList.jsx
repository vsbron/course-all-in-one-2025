import { useSelector } from "react-redux";

import CartItem from "./CartItem";

function CartItemsList() {
  // Get the cart items from the redux store
  const { cartItems } = useSelector((state) => state.cart);

  // Returned JSX
  return (
    <>
      {cartItems.map((item) => (
        <CartItem key={item.cartID} cartItem={item} />
      ))}
    </>
  );
}

export default CartItemsList;
