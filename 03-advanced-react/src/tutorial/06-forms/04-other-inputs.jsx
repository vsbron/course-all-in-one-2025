import { useState } from "react";

// Frameworks array
const frameworks = ["react", "angular", "vue", "svelte"];

const OtherInputs = () => {
  // Create state variable for shipping
  const [shipping, setShipping] = useState(false);

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
            onChange={(e) => setShipping(e.target.checked)}
          />
        </div>
        <div className="form-row" style={{ textAlign: "left" }}>
          <label htmlFor="framework" className="form-label">
            Framework
          </label>
        </div>
        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
    </div>
  );
};
export default OtherInputs;
