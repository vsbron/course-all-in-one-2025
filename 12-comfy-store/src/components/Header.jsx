import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { clearCart } from "../features/cart/cartSlice";
import { logoutUser } from "../features/user/userSlice";

function Header() {
  // Get the navigate and dispatch functions from hooks
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Get the user object from redux
  const { user } = useSelector((state) => state.user);

  // Logging out handle function
  const handleLogOut = () => {
    dispatch(clearCart());
    dispatch(logoutUser());
    navigate("/");
  };

  // Returned JSX
  return (
    <header className="bg-neutral py-2 text-neutral-content">
      <div className="align-element flex justify-center sm:justify-end">
        {user ? (
          // USER
          <div className="flex gap-x-2 sm:gap-x-8 items-center">
            <p className="text-xs sm:text-sm">Hello, {user.username}</p>
            <button
              className="btn btn-xs btn-outline btn-primary uppercase"
              onClick={handleLogOut}
            >
              Log out
            </button>
          </div>
        ) : (
          // LINKS
          <div className="flex gap-x-6 justify-center items-center">
            <Link to="/login" className="link link-hover text-xs sm:text-sm">
              Sign In / Guest
            </Link>
            <Link to="/register" className="link link-hover text-xs sm:text-sm">
              Create Account
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
