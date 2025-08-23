import { Link } from "react-router-dom";

import hero1 from "../assets/hero1.webp";
import hero2 from "../assets/hero2.webp";
import hero3 from "../assets/hero3.webp";
import hero4 from "../assets/hero4.webp";

// Add images to an array
const carouselImages = [hero1, hero2, hero3, hero4];

function Hero() {
  // Returned JSX
  return (
    <div className="grid lg:grid-cols-2 gap-24 items-center">
      {/* INFO */}
      <div className="">
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight mb-8 sm:text-6xl">
          We are changing the way people shop
        </h1>
        <p className="max-w-xl text-lg leading-8 mb-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores error
          quibusdam reprehenderit placeat, eum explicabo nemo quaerat quisquam
          odit in.
        </p>
        <div>
          <Link to="/products" className="btn btn-primary">
            Our Products
          </Link>
        </div>
      </div>
      {/* CAROUSEL */}
      <div className="hidden h-[28rem] lg:carousel carousel-center p-4 space-x-4 bg-neutral rounded-box">
        {carouselImages.map((image) => (
          <div key={image} className="carousel-item">
            <img src={image} className="rounded-box h-full w-80 object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hero;
