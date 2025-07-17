function Categories({ categories, filteredItems }) {
  // Returned JSX
  return (
    <div className="btn-container">
      {categories.map((cat) => (
        <button
          type="button"
          className="btn"
          key={cat}
          onClick={() => filteredItems(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

export default Categories;
