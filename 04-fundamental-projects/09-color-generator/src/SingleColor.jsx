function SingleColor({ color, index }) {
  // Destructuring the color
  const { hex, weight } = color;

  // Returned JSX
  return (
    <article
      className={`color ${index > 10 ? "color-light" : ""}`}
      style={{ background: `#${hex}` }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">#{hex}</p>
    </article>
  );
}

export default SingleColor;
