import { useState } from "react";

import Form from "./Form";

function App() {
  // Creating state variable for items
  const [items, setItems] = useState([]);

  // Returned JSX
  return (
    <section className="section-center">
      <Form />
    </section>
  );
}

export default App;
