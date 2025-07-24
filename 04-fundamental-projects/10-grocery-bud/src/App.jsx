import { useState } from "react";
import { nanoid } from "nanoid";

import Form from "./Form";
import Items from "./Items";

function App() {
  // Creating state variable for items
  const [items, setItems] = useState([]);

  // Create the function for adding the item to the state
  const addItem = (item) => {
    const newItem = {
      name: item,
      completed: false,
      id: nanoid(),
    };

    // Adding new items to the state
    setItems((oldItems) => [...oldItems, newItem]);
  };

  // Create function for removing the item from the state
  const removeItem = (itemId) => {
    setItems((curItems) => curItems.filter((item) => item.id !== itemId));
  };

  // Returned JSX
  return (
    <section className="section-center">
      <Form addItem={addItem} />
      <Items items={items} removeItem={removeItem} />
    </section>
  );
}

export default App;
