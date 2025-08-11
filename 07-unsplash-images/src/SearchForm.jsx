import { useAppContext } from "./AppContext";

function SearchForm() {
  // Getting the searchTerm setter from context
  const { setSearchTerm } = useAppContext();

  // Form submit handler
  const submitHandler = (e) => {
    // Prevent default behavior
    e.preventDefault();

    // Get the input value
    const searchValue = e.target.elements.search.value;

    // Guard clause
    if (!searchValue) return;

    // Setting the state
    setSearchTerm(searchValue);
  };

  // Returned JSX
  return (
    <section>
      <h1 className="title">unsplash images</h1>
      <form className="search-form" onSubmit={submitHandler}>
        <input
          type="text"
          className="form-input search-input"
          name="search"
          placeholder="Cat"
        />
        <button type="submit" className="btn">
          Search
        </button>
      </form>
    </section>
  );
}

export default SearchForm;
