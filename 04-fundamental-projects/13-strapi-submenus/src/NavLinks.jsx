import { useAppContext } from "./AppContext";

import sublinks from "./data";

function NavLinks() {
  // Get the values from Context API
  const { openSidebar } = useAppContext();

  // Returned JSX
  return (
    <div className="nav-links">
      {sublinks.map(({ pageId, page }) => (
        <button key={pageId} className="nav-link">
          {page}
        </button>
      ))}
    </div>
  );
}

export default NavLinks;
