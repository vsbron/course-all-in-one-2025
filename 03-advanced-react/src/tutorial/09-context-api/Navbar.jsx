import { useState } from "react";
import NavLinks from "./NavLinks";

function Navbar() {
  // Create state for user
  const [user, setUser] = useState({ name: "John" });

  // Create log out function that resets the user
  const logOut = () => {
    setUser(null);
  };

  // Returned JSX
  return (
    <nav className="navbar">
      <h5>CONTEXT API</h5>
      <NavLinks user={user} logOut={logOut} />
    </nav>
  );
}

export default Navbar;
