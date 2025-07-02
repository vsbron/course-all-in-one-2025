import Title from "./ui/Title";

import { tours } from "../lib/data";

function Tours() {
  // Returned JSX
  return (
    <section className="section" id="tours">
      <Title title="Featured" subtitle="tours" />
      <div className="section-center featured-center">
        {tours.map((tour) => (
          <article className="tour-card" key={tour.id}>
            <div className="tour-img-container">
              <img src={tour.img} className="tour-img" alt={tour.title} />
              <p className="tour-date">{tour.date}</p>
            </div>
            <div className="tour-info">
              <div className="tour-title">
                <h4>{tour.title}</h4>
              </div>
              <p>{tour.text}</p>
              <div className="tour-footer">
                <p>
                  <span>
                    <i className="fas fa-map"></i>
                  </span>{" "}
                  {tour.country}
                </p>
                <p>{tour.days}</p>
                <p>{tour.price}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Tours;
