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
  };

  // Returned JSX
  return (
    <section className="slick-container">
      <Slider {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </section>
  );
}

export default SlickCarousel;
