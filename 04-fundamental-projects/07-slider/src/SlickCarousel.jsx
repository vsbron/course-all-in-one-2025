import Slider from "react-slick";
import { FaQuoteRight } from "react-icons/fa";

import { list } from "./data";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SlickCarousel() {
  // Settings for the slick slider
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    autoplaySpeed: 1000,
    pauseOnHover: true,
  };

  // Returned JSX
  return (
    <section className="slick-container">
      <Slider {...settings}>
        {list.map(({ id, image, name, title, quote }) => (
          <article key={id}>
            <img src={image} alt={name} className="person-img" />
            <h5 className="name">{name}</h5>
            <p className="title">{title}</p>
            <p className="text">{quote}</p>
            <FaQuoteRight className="icon" />
          </article>
        ))}
      </Slider>
    </section>
  );
}

export default SlickCarousel;
