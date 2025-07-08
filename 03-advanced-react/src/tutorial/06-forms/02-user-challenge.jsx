import { useState } from "react";

import { data } from "../../data";

const UserChallenge = () => {
  // Create state for the name input and data
  const [name, setName] = useState("");
  const [users, setUsers] = useState(data);

  // Create form submit handler
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setUsers((d) => [...d, { name: name, id: Date.now() }]);
    setName("");
  };

  // Create remove user handler
  const removeUser = (id) => {
    setUsers((us) => us.filter((user) => user.id !== id));
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
          gap: "20px",
        }}
      >
        {users.map((user) => (
          <li key={user.id}>
            {user.name}{" "}
            <span
              style={{
                background: "red",
                color: "white",
                display: "inline-block",
                fontWeight: "700",
                lineHeight: "1",
                width: "20px",
                height: "20px",
                marginLeft: "10px",
                cursor: "pointer",
                border: "rgba(0,0,0,.5) 1px solid",
                borderRadius: "3px",
              }}
              onClick={() => removeUser(user.id)}
            >
              X
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default UserChallenge;
