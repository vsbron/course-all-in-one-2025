import Book from "./Book";

function BookList() {
  // Initializing the books details
  const book1 = {
    cover: "book-1.jpg",
    title: "The Lost Bookshop",
    subtitle:
      "The most charming and uplifting novel for 2025 and the perfect gift for book lovers!",
    author: "Evie Woods",
  };
  const book2 = {
    cover: "book-2.jpg",
    title: "The Housemaid",
    author: "Freida McFadden",
  };
  const book3 = {
    cover: "book-3.jpg",
    title: "Every Summer After",
    author: "Carley Fortune",
  };
  const book4 = {
    cover: "book-4.jpg",
    title: "One Golden Summer",
    author: "Carley Fortune",
  };
  const book5 = {
    cover: "book-5.jpg",
    title: "The First Gentleman: A Thriller",
    author: "James Patterson & Bill Clinton",
  };
  const book6 = {
    cover: "book-6.jpg",
    title: "The Wedding People: A Novel",
    author: "Alison Espach",
  };

  // Returned JSX
  return (
    <section className="book-list">
      <Book
        cover={book1.cover}
        title={book1.title}
        subtitle={book1.subtitle}
        author={book1.author}
      />
      <Book cover={book2.cover} title={book2.title} author={book2.author} />
      <Book cover={book3.cover} title={book3.title} author={book3.author} />
      <Book cover={book4.cover} title={book4.title} author={book4.author} />
      <Book cover={book5.cover} title={book5.title} author={book5.author} />
      <Book cover={book6.cover} title={book6.title} author={book6.author} />
    </section>
  );
}

export default BookList;
