import { useState } from "react";
import { FaBars } from "react-icons/fa";

import { links, social } from "./data";
import logo from "./logo.svg";

function Navbar() {
  // Create state value for links to show
  const [showLinks, setShowLinks] = useState(false);

  // Create the button handler button to toggle menu
  const toggleLinks = () => {
    setShowLinks((sL) => !sL);
  };

  // Returned JSX
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="logo" alt="Logo" />
          <button className="nav-toggle" onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>
        <div className={`links-container ${showLinks ? "show-container" : ""}`}>
          <ul className="links">
            {links.map(({ id, url, text }) => (
              <li key={id}>
                <a href={url}>{text}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
