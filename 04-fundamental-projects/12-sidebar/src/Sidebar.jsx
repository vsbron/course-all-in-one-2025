import { FaTimes } from "react-icons/fa";

import { useAppContext } from "./AppContext";

import { social, links } from "./data";
import logo from "./logo.svg";

function Sidebar() {
  // Getting the sidebar state and toggle function from the Context API
  const { isSidebarOpen, toggleSidebar } = useAppContext();

  // Returned JSX
  return (
    <aside className={`sidebar ${isSidebarOpen ? "show-sidebar" : ""}`}>
      <div className="sidebar-header">
        <img src={logo} alt="Coding addict" className="logo" />
        <button className="close-btn" onClick={toggleSidebar}>
          <FaTimes />
        </button>
      </div>
      <ul className="links">
        {links.map(({ id, url, text, icon }) => (
          <li key={id}>
            <a href={url}>
              {icon}
              {text}
            </a>
          </li>
        ))}
      </ul>
      <ul className="social-links">
        {social.map(({ id, url, icon }) => (
          <li key={id}>
            <a href={url}>{icon}</a>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
