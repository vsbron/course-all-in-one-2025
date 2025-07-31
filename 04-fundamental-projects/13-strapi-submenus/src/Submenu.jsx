import { useRef } from "react";
import { useAppContext } from "./AppContext";

import sublinks from "./data";

function Submenu() {
  // Get the values from Context API
  const { pageId, setPageId } = useAppContext();

  // Getting the correct page from the sublinks
  const currentPage = sublinks.find((link) => link.pageId === pageId);

  // Setting hte ref for the sub menu
  const submenuContainer = useRef(null);

  // Create handler when mouse leaves submenu function
  const handleMouseLeave = (event) => {
    // Getting the submenu element
    const submenu = submenuContainer.current;

    // Getting the bounding client rectangle and Y coordinate of the event
    const { top } = submenu.getBoundingClientRect();
    const { clientY } = event;

    // Early exit if we moved cursor from top
    if (clientY < top) return;

    // Close the submenu
    setPageId(null);
  };

  // Returned JSX
  return (
    <div
      className={`submenu ${currentPage ? "show-submenu" : ""}`}
      onMouseLeave={handleMouseLeave}
      ref={submenuContainer}
    >
      <h5>{currentPage?.page}</h5>
      <div
        className="submenu-links"
        style={{
          gridTemplateColumns:
            currentPage?.links?.length > 3 ? "1fr 1fr" : "1fr",
        }}
      >
        {currentPage?.links?.map(({ id, url, label, icon }) => (
          <a key={id} href={url}>
            {icon} {label}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Submenu;
