import { NavbarProvider } from "./NavbarProvider";
import NavLinks from "./NavLinks";

function Navbar() {
  // Returned JSX
  return (
    <nav className="navbar">
      <h5>CONTEXT API</h5>
      <NavbarProvider>
        <NavLinks />
      </NavbarProvider>
    </nav>
  );
}

export default Navbar;
