function Book({ cover, title, subtitle, author }) {
  // Simple event handler
  const handleLogBook = () => {
    console.log(`${title} is written by ${author}`);
  };

  // Returned JSX
  return (
    <article className="book">
      <img
        src={`./images/${cover}`}
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
      <button onClick={handleLogBook}>Log it</button>
    </article>
  );
}

export default Book;
