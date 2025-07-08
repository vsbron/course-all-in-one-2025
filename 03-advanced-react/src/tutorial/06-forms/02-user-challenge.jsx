import { useState } from "react";

import { data } from "../../data";

const UserChallenge = () => {
  // Create state for the name input and data
  const [name, setName] = useState("");
  const [users, setUsers] = useState(data);
  const [id, setId] = useState(5);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setUsers((d) => [...d, { name: name, id: id }]);
    setName("");
    setId((i) => i++);
  };

  return (
    // Returned JSX
    <div>
      <form className="form" onSubmit={handleFormSubmit}>
        <h4>Add User</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            Name:
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      <ul
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr))",
        }}
      >
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};
export default UserChallenge;
