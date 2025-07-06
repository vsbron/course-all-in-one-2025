import { useState } from "react";

const ShortCircuitExamples = () => {
  // Creating some state values
  const [text, setText] = useState("");
  const [name, setName] = useState("susan");
  const [user, setUser] = useState({ name: "john" });
  const [isEditing, setIsEditing] = useState(false);

  // Returned JSX
  return (
    <div>
      <h2>short circuit - examples</h2>
      {/* Displays default value if text is null */}
      <h4>{text || "Default value"}</h4>

      <hr />

      {/* Displays default name with some text if there is a name - !Not operator is used */}
      {!text && (
        <div>
          <h4>Whatever return</h4>
          <h4>{name}</h4>
        </div>
      )}

      <hr />

      {/* Same, but renders entire component */}
      {user && !isEditing && <SomeComponent name={user.name} />}
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
