import { useState } from "react";

import menu from "./data";

import Categories from "./Categories";
import Menu from "./Menu";
import Title from "./Title";

// Getting the list with uniques menu items categories
const allCategories = ["all", ...new Set(menu.map((item) => item.category))];

const App = () => {
  // Creating state value for menu items
  const [menuItems, setMenuItems] = useState(menu);

  // Create the filtered items based on a chosen category
  const filteredItems = (cat) => {
    setMenuItems(
      cat !== "all" ? menu.filter((item) => item.category === cat) : menu
    );
  };

  // Returned JSX
  return (
    <main>
      <section className="menu">
        <Title text="Our menu" />
        <Categories categories={allCategories} filteredItems={filteredItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
};
export default App;
