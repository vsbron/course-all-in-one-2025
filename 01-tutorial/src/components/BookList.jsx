import Book from "./Book";

function BookList() {
  // Returned JSX
  return (
    <section className="book-list">
      <Book
        cover="book-1.jpg"
        title="The Lost Bookshop"
        subtitle="The most charming and uplifting novel for 2025 and the perfect gift for book lovers!"
        author="Evie Woods"
      />
      <Book cover="book-2.jpg" title="The Housemaid" author="Freida McFadden" />
      <Book
        cover="book-3.jpg"
        title="Every Summer After"
        author="Carley Fortune"
      />
      <Book
        cover="book-4.jpg"
        title="One Golden Summer"
        author="Carley Fortune"
      />
      <Book
        cover="book-5.jpg"
        title="The First Gentleman: A Thriller"
        author="James Patterson & Bill Clinton"
      />
      <Book
        cover="book-6.jpg"
        title="The Wedding People: A Novel"
        author="Alison Espach "
      />
    </section>
  );
}

export default BookList;
