function Categories({ categories }) {
  // Returned JSX
  return (
    <div className="btn-container">
      {categories.map((cat) => (
        <button type="button" className="btn" key={cat}>
          {cat}
        </button>
      ))}
    </div>
  );
}

export default Categories;
