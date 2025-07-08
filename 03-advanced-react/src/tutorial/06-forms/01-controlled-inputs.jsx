import { useState } from "react";

const ControlledInputs = () => {
  // Crate states for form inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // Create form submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
    console.log(email);
  };

  // Returned JSX
  return (
    <form className="form" onSubmit={handleSubmit}>
      <h4>Controlled Inputs</h4>
      <div className="form-row">
        <label htmlFor="name" className="form-label">
          Name:
        </label>
        <input
          type="text"
          id="name"
          className="form-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="form-row">
        <label htmlFor="email" className="form-label">
          Email:
        </label>
        <input
          type="email"
          id="email"
          className="form-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="btn btn-block">
        Submit
      </button>
    </form>
  );
};
export default ControlledInputs;
