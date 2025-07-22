import { useEffect, useState } from "react";
import { FaQuoteRight } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import { longList } from "./data";

function Carousel() {
  // Create state value for the people and current person
  const [people, _] = useState(longList);
  const [currentPerson, setCurrentPerson] = useState(0);

  // Creating handler function for changing the slides
  const prevSlide = () => {
    setCurrentPerson((cp) => (cp === 0 ? people.length - 1 : cp - 1));
  };
  const nextSlide = () => {
    setCurrentPerson((cp) => (cp === people.length - 1 ? 0 : cp + 1));
  };

  // useEffect that changes the slides automatically
  useEffect(() => {
    const slideInterval = setInterval(() => {
      nextSlide();
    }, 2000);

    // Cleanup function
    return () => clearInterval(slideInterval);
  }, [currentPerson]);

  // Returned JSX
  return (
    <section className="slider-container">
      {people.map(({ id, image, name, title, quote }, index) => (
        <article
          className="slide"
          style={{
            transform: `translateX(${100 * (index - currentPerson)}%)`,
            opacity: index === currentPerson ? 1 : 0,
            visibility: index === currentPerson ? "visible" : "hidden",
          }}
          key={id}
        >
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
