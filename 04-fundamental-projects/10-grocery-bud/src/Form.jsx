import { useState } from "react";

function Form() {
  // Create state value for name
  const [name, setName] = useState("");

  // Form submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
  };

  // Returned JSX
  return (
    <form onSubmit={handleSubmit}>
      <h4>Grocery bud</h4>
      <div className="form-control">
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
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
