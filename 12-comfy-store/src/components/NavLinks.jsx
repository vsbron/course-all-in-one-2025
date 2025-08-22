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
  // Returned JSX
  return links.map(({ id, url, text }) => (
    <li key={id}>
      <NavLink to={url} className="capitalize">
        {text}
      </NavLink>
    </li>
  ));
}

export default NavLinks;
