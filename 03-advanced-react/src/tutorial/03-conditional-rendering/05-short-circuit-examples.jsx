import { useState } from "react";

const ShortCircuitExamples = () => {
  // Creating some state values
  const [text] = useState("");
  const [name] = useState("susan");
  const [user] = useState({ name: "john" });
  const [isEditing] = useState(false);

  // Returned JSX
  return (
    <div>
      <h2>short circuit - examples</h2>
      {/* Displays default value if text is null */}
      <h4>{text || "Default value"}</h4>

      {/* Separator */}
      <hr style={{ margin: "20px 0" }} />

      {/* Displays default name with some text if there is a name - !Not operator is used */}
      {!text && (
        <div>
          <h4>Whatever return</h4>
          <h4>{name}</h4>
        </div>
      )}

      {/* Separator */}
      <hr style={{ margin: "20px 0" }} />

      {/* Same, but renders entire component */}
      {user && !isEditing && <SomeComponent name={user.name} />}

      {/* Separator */}
      <hr style={{ margin: "20px 0" }} />

      <h2>Ternary operator</h2>
      <button className="btn">{isEditing ? "Editing..." : "Add"}</button>

      {/* Separator */}
      <hr style={{ margin: "20px 0" }} />

      {user ? <div>Hello {user.name}</div> : <div>Please log in</div>}
    </div>
  );
};

// Helper component
const SomeComponent = ({ name }) => {
  // Returned JSX
  return (
    <div>
      <h4>Whatever return</h4>
      <h4>{name}</h4>
    </div>
  );
};

export default ShortCircuitExamples;
