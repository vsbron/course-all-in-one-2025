import { useState } from "react";
import { nanoid } from "nanoid";

import data from "./data";

// Paragraphs limit const
const MIN_PARAGRAPHS = 1;
const MAX_PARAGRAPHS = 8;

function App() {
  // Creating state value for the count and text
  const [count, setCount] = useState(MIN_PARAGRAPHS);
  const [text, setText] = useState([]);

  // Create form submit handler
  const handleSubmit = (e) => {
    // Prevent default behavior
    e.preventDefault();

    // Getting the needed amount of paragraphs from data
    setText(data.slice(0, parseInt(count)));
  };

  // Returned JSX
  return (
    <section className="section-center">
      <h4>Tired of boring lorem ipsum?</h4>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">Paragraphs:</label>
        <input
          type="number"
          name="amount"
          id="amount"
          min={MIN_PARAGRAPHS}
          max={MAX_PARAGRAPHS}
          step={1}
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button className="btn" type="submit">
          Generate
        </button>
      </form>
      <article className="lorem-text">
        {text.map((paragraph) => (
          <p key={nanoid()}>{paragraph}</p>
        ))}
      </article>
    </section>
  );
}

export default App;
