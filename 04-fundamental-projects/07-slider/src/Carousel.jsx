import { useState } from "react";
import { FaQuoteRight } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import { shortList, longList } from "./data";

function Carousel() {
  // Create state value for the people
  const [people, setPeople] = useState(shortList);

  // Creating handler function for changing the slides
  const prevSlide = () => {};
  const nextSlide = () => {};

  // Returned JSX
  return (
    <section className="slider-container">
      {people.map(({ id, image, name, title, quote }) => (
        <article className="slide" key={id}>
          <img src={image} alt={name} className="person-img" />
          <h5 className="name">{name}</h5>
          <p className="title">{title}</p>
          <p className="text">{quote}</p>
          <FaQuoteRight className="icon" />
        </article>
      ))}
      <button type="button" className="prev" onClick={prevSlide}>
        <FiChevronLeft />
      </button>
      <button type="button" className="next" onClick={nextSlide}>
        <FiChevronRight />
      </button>
    </section>
  );
}

export default Carousel;
