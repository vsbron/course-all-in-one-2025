import { useState } from "react";
import Values from "values.js";

import ColorList from "./ColorList";
import Form from "./Form";

function App() {
  // Create state value for the colors
  const [colors, setColors] = useState(new Values("#f15025").all(10));

  // Returned JSX
  return (
    <main>
      <Form />
      <ColorList colors={colors} />
    </main>
  );
}

export default App;
