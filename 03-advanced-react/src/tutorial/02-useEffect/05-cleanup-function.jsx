import { useEffect, useState } from "react";

const CleanupFunction = () => {
  // Crating active state
  const [isActive, setIsActive] = useState(false);

  // Crating click handler
  const handleClick = () => {
    setIsActive((isActive) => !isActive);
  };

  // Returned JSX
  return (
    <div>
      <h3>cleanup function</h3>
      <button
        className="btn"
        onClick={handleClick}
        style={{ marginBottom: "1rem" }}
      >
        {isActive ? "Hide component" : "Show component"}
      </button>
      {isActive && <RandomComponent />}
    </div>
  );
};

const RandomComponent = () => {
  // Create basic useEffect function
  useEffect(() => {
    // Creating the log message inside the interval with id
    const logMessage = setInterval(() => {
      console.log("Hello from Random Component's interval");
    }, 1000);

    // Cleanup function for interval
    return () => clearInterval(logMessage);
  }, []);

  // Returned JSX
  return <h4>I am Random component</h4>;
};

export default CleanupFunction;
