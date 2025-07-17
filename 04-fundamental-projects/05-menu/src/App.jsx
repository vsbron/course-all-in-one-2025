import { useState } from "react";

import menu from "./data";

import Menu from "./Menu";
import Title from "./Title";
import Categories from "./Categories";

// Getting the list with uniques menu items categories
const allCategories = ["all", ...new Set(menu.map((item) => item.category))];

const App = () => {
  // Creating state value for menu items
  const [menuItems, setMenuItems] = useState(menu);
  const [categories, setCategories] = useState(allCategories);

  // Returned JSX
  return (
    <main>
      <section className="menu">
        <Title text="Our menu" />
        <Categories categories={categories} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
};
export default App;
