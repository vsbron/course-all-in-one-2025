import { useSelector } from "react-redux";

import { CartIcon } from "../icons";

function Navbar() {
  // Getting the items amount in the cart from the store
  const { amount } = useSelector((store) => store.cart);

  // Returned JSX
  return (
    <nav>
      <div className="nav-center">
        <h3>Redux Toolkit</h3>
        <div className="nav-container">
          <CartIcon />
          <div className="amount-container">
            <p className="total-amount">{amount}</p>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
