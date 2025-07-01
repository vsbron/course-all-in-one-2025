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
      id: "1",
    },
    {
      cover: "book-2.jpg",
      title: "The Housemaid",
      author: "Freida McFadden",
      id: "2",
    },
    {
      cover: "book-3.jpg",
      title: "Every Summer After",
      author: "Carley Fortune",
      id: "3",
    },
    {
      cover: "book-4.jpg",
      title: "One Golden Summer",
      author: "Carley Fortune",
      id: "4",
    },
    {
      cover: "book-5.jpg",
      title: "The First Gentleman: A Thriller",
      author: "James Patterson & Bill Clinton",
      id: "5",
    },
    {
      cover: "book-6.jpg",
      title: "The Wedding People: A Novel",
      author: "Alison Espach",
      id: "6",
    },
  ];

  // Function that gets the book info based on the passed id
  const getBook = (id) => {
    const chosenBook = books.filter((book) => book.id === id);
    console.log(
      `${chosenBook.at(0).title} is written by ${chosenBook.at(0).author}`
    );
  };

  // Returned JSX
  return (
    <section className="book-list">
      {books.map((book) => (
        <Book key={book.id} clickHandler={getBook} {...book} />
      ))}
    </section>
  );
}

export default BookList;
