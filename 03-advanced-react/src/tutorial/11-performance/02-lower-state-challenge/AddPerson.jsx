import { useState } from "react";

function AddPerson({ onAddPerson }) {
  // Creating the state value for name input
  const [name, setName] = useState("");

  // Form submit handler function
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      alert("Please Provide Name Value");
      return;
    }
    onAddPerson(name);
    setName("");
  };

  // Returned JSX
  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label htmlFor="name" className="form-label">
          name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="form-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <button className="btn btn-block" type="submit">
        submit
      </button>
    </form>
  );
}

export default AddPerson;
