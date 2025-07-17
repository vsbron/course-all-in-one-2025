import MenuItem from "./MenuItem";

function Menu({ items }) {
  // Returned JSX
  return (
    <div className="section-center">
      {items.map((menuItem) => (
        <MenuItem key={menuItem.id} {...menuItem} />
      ))}
    </div>
  );
}

export default Menu;
