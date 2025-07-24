import { useState } from "react";
import { toast } from "react-toastify";

function Form({ addItem }) {
  // Create state value for name
  const [item, setItem] = useState("");

  // Form submit handler
  const handleSubmit = (e) => {
    // Prevent default behavior and guard clause with toast error
    e.preventDefault();
    if (!item) {
      toast.error("Item name is empty!");
      return;
    }

    // Add item to the list and reset the form
    addItem(item);
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
