import { useState, useTransition, Suspense, lazy } from "react";

// Importing the component with LazyLoad
const SlowComponent = lazy(() => import("./SlowComponent"));

const LatestReact = () => {
  // Creating the state values for text, items and show
  const [text, setText] = useState("");
  const [items, setItems] = useState([]);
  const [show, setShow] = useState(false);

  // Getting the pending state and startTransition function from the hook
  const [isPending, startTransition] = useTransition();

  // Input change handler
  const handleChange = (e) => {
    setText(e.target.value);

    // slow down CPU
    startTransition(() => {
      const newItems = Array.from({ length: 15000 }, (_, index) => {
        return (
          <div key={index}>
            <img src="/vite.svg" alt="" />
          </div>
        );
      });
      setItems(newItems);
    });
  };

  // Returned JSX
  return (
    <section>
      <form className="form">
        <input
          type="text"
          className="form-input"
          value={text}
          onChange={handleChange}
        />
      </form>
      <h4>Items Below</h4>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          marginTop: "2rem",
        }}
      >
        {isPending ? <div>Loading...</div> : items}
      </div>
      <button onClick={() => setShow((show) => !show)} className="btn">
        toggle
      </button>
      {show && (
        <Suspense fallback="Loading...">
          <SlowComponent />
        </Suspense>
      )}
    </section>
  );
};
export default LatestReact;
