import { FaTimes } from "react-icons/fa";

import { useAppContext } from "./AppContext";

import sublinks from "./data";

function Sidebar() {
  // Get the values from Context API
  const { isSidebarOpen, closeSidebar } = useAppContext();

  // Returned JSX
  return (
    <aside className="sidebar">
      <div className="sidebar-container">
        <button className="close-btn">
          <FaTimes />
        </button>
        <div className="sidebar-links">
          {sublinks.map(({ pageId, page, links }) => (
            <article key={pageId}>
              <h4>{page}</h4>
              <div className="sidebar-sublinks">
                {links.map(({ url, icon, label, id }) => (
                  <a href={url} key={id}>
                    {icon} {label}
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
