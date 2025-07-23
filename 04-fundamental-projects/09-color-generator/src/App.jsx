import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import Values from "values.js";

import ColorList from "./ColorList";
import Form from "./Form";

function App() {
  // Create state value for the colors
  const [colors, setColors] = useState(new Values("#f15025").all(10));

  // Add color function
  const addColor = (color) => {
    try {
      const newColor = new Values(color).all(10);
      setColors(newColor);
    } catch (error) {
      toast.error(error.message);
    }
  };

  // Returned JSX
  return (
    <main>
      <Form addColor={addColor} />
      <ColorList colors={colors} />
      <ToastContainer position="top-center" />
    </main>
  );
}

export default App;
