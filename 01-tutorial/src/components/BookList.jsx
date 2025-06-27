import Book from "./Book";

function BookList() {
  // Returned JSX
  return (
    <section style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

export default BookList;
