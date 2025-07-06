import { useState } from "react";

const ToggleChallenge = () => {
  // Setting the active state
  const [isActive, setIsActive] = useState(false);

  // Click handler function
  const handleButtonClick = () => {
    setIsActive((active) => !active);
  };

  // Returned JSX
  return (
    <div>
      <h2 style={{ marginBottom: "40px" }}>Toggle challenge</h2>

      {/* The toggle button */}
      <button
        className="btn"
        style={{ marginBottom: "10px" }}
        onClick={handleButtonClick}
      >
        {isActive ? "Disable" : "Enable"} component
      </button>

      {/* The conditional component display */}
      {isActive ? (
        <SomeComponent />
      ) : (
        <div className="alert alert-danger">
          Please click the button above to see the component
        </div>
      )}
    </div>
  );
};

// Helper component
const SomeComponent = () => {
  // Returned JSX
  return <h4>The component is active</h4>;
};

export default ToggleChallenge;
