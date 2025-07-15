import Tour from "./Tour";

function Tours({ tours }) {
  // Returned JSX
  return (
    <section>
      <div className="title">
        <h2>Our tours</h2>
        <div className="title-underline"></div>
        <div className="tours">
          {tours.map((tour) => (
            <Tour key={tour.id} {...tour} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Tours;
