import { useState } from "react";

function Form({ addItem }) {
  // Create state value for name
  const [item, setItem] = useState("");

  // Form submit handler
  const handleSubmit = (e) => {
    // Prevent default behavior
    e.preventDefault();

    // Guard clause
    if (!item) return;

    // Add item to the list
    addItem(item);

    // Clear the form value
    setItem("");
  };

  // Returned JSX
  return (
    <form onSubmit={handleSubmit}>
      <h4>Grocery bud</h4>
      <div className="form-control">
        <input
          type="text"
          value={item}
          onChange={(e) => {
            setItem(e.target.value);
          }}
        />
        <button type="submit" className="btn">
          Add item
        </button>
      </div>
    </form>
  );
}

export default Form;
