import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

import people from "./data";

const App = () => {
  // Creating state value for the people index
  const [index, setIndex] = useState(0);

  // Destructuring the person data
  const { name, job, image, text } = people[index];

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
      </article>
    </main>
  );
};
export default App;
