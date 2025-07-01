import Book from "./Book";

import { books } from "../lib/books";

function BookList() {
  // Function that gets the book info based on the passed id
  const getBook = (id) => {
    const chosenBook = books.find((book) => book.id === id);
    console.log(`${chosenBook.title} is written by ${chosenBook.author}`);
  };

  // Returned JSX
  return (
    <>
      <h1 style={{ textAlign: "center", marginTop: "3rem" }}>Book case</h1>
      <section className="book-list">
        {books.map((book, i) => (
          <Book key={book.id} clickHandler={getBook} {...book} index={i} />
        ))}
      </section>
    </>
  );
}

export default BookList;
