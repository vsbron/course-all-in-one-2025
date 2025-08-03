import { FaCartPlus } from "react-icons/fa";
import { useAppContext } from "./reducer/context";
const Navbar = () => {
  // Getting the cart's total amount from the reducer
  const { totalAmount } = useAppContext();

  // Returned JSX
  return (
    <nav>
      <div className="nav-center">
        <h4>useReducer</h4>
        <div className="nav-container">
          <FaCartPlus className="cart-icon" />
          <div className="amount-container">
            <p className="total-amount">{totalAmount}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
