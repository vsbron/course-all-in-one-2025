import Tour from "./Tour";

function Tours({ tours, removeTour }) {
  // Returned JSX
  return (
    <section>
      <div className="title">
        <h2>Our tours</h2>
        <div className="title-underline"></div>
        <div className="tours">
          {tours.map((tour) => (
            <Tour key={tour.id} {...tour} removeTour={removeTour} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Tours;
