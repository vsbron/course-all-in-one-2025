import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

// Set up the nav links
const links = [
  { id: 1, url: "/", text: "home" },
  { id: 2, url: "about", text: "about" },
  { id: 3, url: "products", text: "products" },
  { id: 4, url: "cart", text: "cart" },
  { id: 5, url: "checkout", text: "checkout" },
  { id: 6, url: "orders", text: "orders" },
];

function NavLinks() {
  // Get the user object from redux
  const { user } = useSelector((state) => state.user);

  // Returned JSX
  return links.map(({ id, url, text }) =>
    (url === "checkout" || url === "orders") && !user ? null : (
      <li key={id}>
        <NavLink to={url} className="capitalize">
          {text}
        </NavLink>
      </li>
    )
  );
}

export default NavLinks;
