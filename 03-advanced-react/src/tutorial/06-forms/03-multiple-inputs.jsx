import { useState } from "react";

const MultipleInputs = () => {
  // Create state for form inputs (in an object)
  const [user, setUser] = useState({ name: "", email: "", password: "" });

  // Create one change function for each input
  const handleChange = (e) => {
    const fieldKey = e.target.name;
    const fieldValue = e.target.value;
    const newUser = { ...user, [fieldKey]: fieldValue };
    setUser(newUser);
  };

  // Create form submit function
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };

  // Returned JSX
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Multiple Inputs</h4>
        {/* name */}
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            name="name"
            value={user.name}
            onChange={handleChange}
          />
        </div>
        {/* email */}
        <div className="form-row">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-input"
            id="email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
        </div>
        {/* email */}
        <div className="form-row">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-input"
            id="password"
            name="password"
            value={user.password}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
    </div>
  );
};
export default MultipleInputs;
