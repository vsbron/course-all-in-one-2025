import { ToastContainer } from "react-toastify";

import Form from "./Form";
import Items from "./Items";

function App() {
  // Returned JSX
  return (
    <section className="section-center">
      <ToastContainer position="top-center" />
      <Form />
      <Items />
    </section>
  );
}

export default App;
