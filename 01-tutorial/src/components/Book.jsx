function Book({ clickHandler, id, cover, title, subtitle, author, index }) {
  // Returned JSX
  return (
    <article className="book">
      <span className="book-order">#{index + 1}</span>
      <img
        src={`${cover}`}
        width="305"
        height="465"
        alt={title}
        title={title}
      />
      <div className="book-title">
        <h2>{title}</h2>
        {subtitle && <h3>{subtitle}</h3>}
      </div>
      <h4>{author.toUpperCase()}</h4>
      <button onClick={() => clickHandler(id)}>Log it</button>
    </article>
  );
}

export default Book;
