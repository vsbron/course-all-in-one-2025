import Book from "./Book";

function BookList() {
  // Initializing the books details
  const books = [
    {
      cover: "book-1.jpg",
      title: "The Lost Bookshop",
      subtitle:
        "The most charming and uplifting novel for 2025 and the perfect gift for book lovers!",
      author: "Evie Woods",
    },
    {
      cover: "book-2.jpg",
      title: "The Housemaid",
      author: "Freida McFadden",
    },
    {
      cover: "book-3.jpg",
      title: "Every Summer After",
      author: "Carley Fortune",
    },
    {
      cover: "book-4.jpg",
      title: "One Golden Summer",
      author: "Carley Fortune",
    },
    {
      cover: "book-5.jpg",
      title: "The First Gentleman: A Thriller",
      author: "James Patterson & Bill Clinton",
    },
    {
      cover: "book-6.jpg",
      title: "The Wedding People: A Novel",
      author: "Alison Espach",
    },
  ];

  // Returned JSX
  return (
    <section className="book-list">
      {books.map((book) => (
        <Book key={`${book.title} by ${book.author}`} {...book} />
      ))}
    </section>
  );
}

export default BookList;
