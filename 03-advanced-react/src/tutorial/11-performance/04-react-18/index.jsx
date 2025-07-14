import { useState, useTransition } from "react";

const LatestReact = () => {
  // Creating the state values for text and items
  const [text, setText] = useState("");
  const [items, setItems] = useState([]);

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
    </section>
  );
};
export default LatestReact;
