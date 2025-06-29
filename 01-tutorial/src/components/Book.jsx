function Book() {
  // Book details constant variables
  const title = "The Lost Bookshop";
  const subtitle =
    "The most charming and uplifting novel for 2025 and the perfect gift for book lovers!";
  const author = "Evie Woods";

  // Returned JSX
  return (
    <article className="book">
      <img
        src="./images/book-1.jpg"
        width="305"
        height="465"
        alt="The Lost Bookshop"
        title="The Lost Bookshop"
      />
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <h4>{author.toUpperCase()}</h4>
    </article>
  );
}

export default Book;
