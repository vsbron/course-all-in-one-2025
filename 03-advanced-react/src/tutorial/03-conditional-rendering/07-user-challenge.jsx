import { useState } from "react";

const UserChallenge = () => {
  // Creating user state
  const [user, setUser] = useState(null);

  // Creating auth functions (kinda)
  const logIn = () => {
    setUser({ name: "John Doe", age: 25, type: "Student" });
  };
  const logOut = () => {
    setUser(null);
  };

  // Returned JSX
  return (
    <div>
      <h2>User challenge</h2>

      {user ? (
        // Display welcome message if user is logged in
        <div>
          <div>Hello there {user.name}</div>
          <button className="btn" onClick={logOut}>
            Log out
          </button>
        </div>
      ) : (
        // Display log in prompt if user is logged out
        <div>
          <div>Please log in</div>
          <button className="btn" onClick={logIn}>
            Log in
          </button>
        </div>
      )}
    </div>
  );
};

export default UserChallenge;
