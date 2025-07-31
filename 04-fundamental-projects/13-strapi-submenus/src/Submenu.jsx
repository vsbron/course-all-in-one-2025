import { useAppContext } from "./AppContext";

import sublinks from "./data";

function Submenu() {
  // Get the values from Context API
  const { pageId } = useAppContext();

  // Getting the correct page from the sublinks
  const currentPage = sublinks.find((link) => link.pageId === pageId);

  // Returned JSX
  return (
    <div className={`submenu ${currentPage ? "show-submenu" : ""}`}>
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
