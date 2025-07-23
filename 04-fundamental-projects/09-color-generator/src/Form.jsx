import { useState } from "react";

function Form({ addColor }) {
  // Creating state value for color
  const [color, setColor] = useState("");

  // Create form submit handler
  const handleSubmit = (e) => {
    // Prevent default behavior
    e.preventDefault();
    // Call the add color function
    addColor(color);
  };

  // Create from color input change handler
  const handleChange = (e) => {
    setColor(e.target.value);
  };

  // Returned JSX
  return (
    <section className="container">
      <h4>Color generator</h4>
      <form className="color-form" onSubmit={handleSubmit}>
        <input type="color" value={color} onChange={handleChange} />
        <input
          type="text"
          value={color}
          onChange={handleChange}
          placeholder="#f15025"
        />
        <button className="btn" type="submit" style={{ background: color }}>
          Submit
        </button>
      </form>
    </section>
  );
}

export default Form;
