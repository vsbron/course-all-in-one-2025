import { FaBars } from "react-icons/fa";

import { useAppContext } from "./AppContext";

import NavLinks from "./NavLinks";

function Navbar() {
  // Get the values from Context API
  const { openSidebar } = useAppContext();

  // Returned JSX
  return (
    <nav className="nav">
      <div className="nav-center">
        <h3 className="logo">Strapi</h3>
        <button className="toggle-btn" onClick={openSidebar}>
          <FaBars />
        </button>
        <NavLinks />
      </div>
    </nav>
  );
}

export default Navbar;
