import { useRef, useState } from "react";
import { FaBars } from "react-icons/fa";

import { links, social } from "./data";
import logo from "./logo.svg";

function Navbar() {
  // Create state value for links to show
  const [showLinks, setShowLinks] = useState(false);

  // Setting the ref for the links container
  const linksRef = useRef(null);

  // Create the button handler button to toggle menu
  const toggleLinks = () => {
    setShowLinks((sL) => !sL);
  };

  // Dynamic css with the height of links container
  const linkStyles = {
    height: showLinks
      ? `${linksRef.current.getBoundingClientRect().height}px`
      : "0",
  };

  // Returned JSX
  return (
    <nav>
      <div className="nav-center">
        {/* Logo */}
        <div className="nav-header">
          <img src={logo} className="logo" alt="Logo" />
          <button className="nav-toggle" onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>

        {/* Nav links */}
        <div className="links-container" style={linkStyles}>
          <ul className="links" ref={linksRef}>
            {links.map(({ id, url, text }) => (
              <li key={id}>
                <a href={url}>{text}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social links */}
        <ul className="social-icons">
          {social.map(({ id, url, icon }) => (
            <li key={id}>
              <a href={url} target="_blank">
                {icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
