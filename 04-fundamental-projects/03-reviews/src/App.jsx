import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

import people from "./data";

const App = () => {
  // Creating state value for the people index
  const [index, setIndex] = useState(0);

  // Destructuring the person data
  const { name, job, image, text } = people[index];

  // Creating the next/prev functions for a state change
  const prevPerson = () => {
    setIndex((i) => (i === 0 ? people.length - 1 : i - 1));
  };
  const nextPerson = () => {
    setIndex((i) => (i + 1 === people.length ? 0 : i + 1));
  };

  // Creating the function that assigns random number for random review to appear
  const randomPerson = () => {
    setIndex(Math.floor(Math.random() * people.length));
  };

  // Returned JSX
  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="btn-container">
          <button className="prev-btn" onClick={prevPerson}>
            <FaChevronLeft />
          </button>
          <button className="next-btn" onClick={nextPerson}>
            <FaChevronRight />
          </button>
        </div>
        <button className="btn btn-hipster" onClick={randomPerson}>
          Surprise Me!
        </button>
      </article>
    </main>
  );
};
export default App;
