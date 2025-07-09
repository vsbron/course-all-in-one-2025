import { useState } from "react";

// Frameworks array
const frameworks = ["react", "angular", "vue", "svelte"];

const OtherInputs = () => {
  // Create state variable for shipping and framework
  const [shipping, setShipping] = useState(false);
  const [chosenFramework, setChosenFramework] = useState(frameworks[0]);

  // Create the change handlers for checkbox and radio inputs
  const handleShipping = (e) => {
    setShipping(e.target.checked);
  };
  const handleFramework = (e) => {
    setChosenFramework(e.target.checked);
  };

  // Returned JSX
  return (
    <div>
      <form className="form">
        <h4>Other Inputs</h4>
        <div className="form-row" style={{ textAlign: "left" }}>
          <label htmlFor="shipping"> Free Shipping </label>
          <input
            type="checkbox"
            name="shipping"
            id="shipping"
            checked={shipping}
            onChange={handleShipping}
          />
        </div>
        <div className="form-row" style={{ textAlign: "left" }}>
          <label htmlFor="framework" className="form-label">
            Framework
          </label>
          <select
            name="framework"
            id="framework"
            value={chosenFramework}
            onChange={handleFramework}
          >
            {frameworks.map((fw) => (
              <option key={fw} value={fw}>
                {fw}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
    </div>
  );
};
export default OtherInputs;
