import { useState } from "react";
import { nanoid } from "nanoid";
import { ToastContainer } from "react-toastify";

import Form from "./Form";
import Items from "./Items";

// Default local data
const defaultItems = [
  { id: nanoid(), title: "walk the dog", isDone: false },
  { id: nanoid(), title: "wash dishes", isDone: false },
  { id: nanoid(), title: "drink coffee", isDone: true },
  { id: nanoid(), title: "take a nap", isDone: false },
];

function App() {
  // Create state value for items
  const [items, setItems] = useState(defaultItems);

  // Returned JSX
  return (
    <section className="section-center">
      <ToastContainer position="top-center" />
      <Form />
      <Items items={items} />
    </section>
  );
}

export default App;
