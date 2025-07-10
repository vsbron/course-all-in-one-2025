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
    <div>
      <h2>Navbar</h2>
      <NavLinks user={user} logOut={logOut} />
    </div>
  );
}

export default Navbar;
