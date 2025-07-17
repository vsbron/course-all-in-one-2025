import { useState } from "react";

import Title from "./Title";

import menu from "./data";
import Menu from "./Menu";

const App = () => {
  // Creating state value for menu items
  const [menuItems, setMenuItems] = useState(menu);

  // Returned JSX
  return (
    <main>
      <section className="menu">
        <Title text="Our menu" />
        <Menu items={menuItems} />
      </section>
    </main>
  );
};
export default App;
