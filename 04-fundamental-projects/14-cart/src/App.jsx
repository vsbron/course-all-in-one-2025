// components
import Navbar from "./Navbar";
import CartContainer from "./CartContainer";
import { useAppContext } from "./reducer/context";

function App() {
  // Getting the loading state from context API
  const { isLoading } = useAppContext();

  if (isLoading) {
    return (
      <main>
        <div className="loading" style={{ marginTop: "6rem" }}></div>
      </main>
    );
  }

  // Returned JSX
  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
