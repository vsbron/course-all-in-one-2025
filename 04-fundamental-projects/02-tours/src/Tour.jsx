import { useState } from "react";

function Tour({ id, name, info, image, price, removeTour }) {
  // Create the state value for expanded text
  const [readMore, setReadMore] = useState(false);

  // Toggle text handler
  const toggleText = () => {
    setReadMore((iE) => !iE);
  };

  // Modify the text based on the readMore state
  const modifiedInfo = readMore ? info : `${info.substring(0, 200)}...`;

  // Returned JSX
  return (
    <article className="single-tour">
      <img src={image} alt={name} className="img" />
      <span className="tour-price">${price}</span>
      <div className="tour-info">
        <h5>{name}</h5>
        <p>
          {modifiedInfo}
          <br />
          <button type="button" className="info-btn" onClick={toggleText}>
            {readMore ? "Show less" : "Show more"}
          </button>
        </p>
        <button
          className="btn btn-block delete-btn"
          onClick={() => removeTour(id)}
        >
          Not interested
        </button>
      </div>
    </article>
  );
}

export default Tour;
