import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { ToastContainer, toast } from "react-toastify";

import Form from "./Form";
import Items from "./Items";

// Declaring the name for local storage
const STORAGE_ITEM_NAME = "list-react";

function App() {
  // Creating state variable for items
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem(STORAGE_ITEM_NAME)) || []
  );

  // useEffect function that handles the data being saved/loaded from the localStorage
  useEffect(() => {
    // Setting the data in the localStorage
    localStorage.setItem(STORAGE_ITEM_NAME, JSON.stringify(items));
  }, [items]);

  // Create the function for adding the item to the state
  const addItem = (item) => {
    const newItem = {
      name: item,
      completed: false,
      id: nanoid(),
    };

    // Adding new items to the state
    setItems((oldItems) => [...oldItems, newItem]);

    // Toast message
    toast.success("Item was added successfully!");
  };

  // Create function for removing the item from the state
  const removeItem = (itemId) => {
    setItems((curItems) => curItems.filter((item) => item.id !== itemId));

    // Toast message
    toast.warn("Item was deleted!");
  };

  // Create function for editing the item in the state
  const editItem = (itemId) => {
    const newItems = items.map((item) => {
      if (item.id === itemId) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });
    setItems(newItems);
    localStorage.setItem(STORAGE_ITEM_NAME, JSON.stringify(newItems));

    // Toast message
    toast.success("Item was successfully edited!");
  };

  // Returned JSX
  return (
    <section className="section-center">
      <ToastContainer position="top-center" />
      <Form addItem={addItem} />
      <Items items={items} removeItem={removeItem} editItem={editItem} />
    </section>
  );
}

export default App;
