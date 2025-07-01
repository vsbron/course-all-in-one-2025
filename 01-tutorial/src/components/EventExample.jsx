function EventExample() {
  // Form event handlers
  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert("Submitting");
  };
  const handleFormInput = () => {
    console.log("Logging");
  };

  // Returned JSX
  return (
    <section style={{ padding: "4rem 0", textAlign: "center" }}>
      <form onSubmit={handleFormSubmit}>
        <h2>Typical Form</h2>
        <input
          type="text"
          name="example"
          onChange={handleFormInput}
          style={{ margin: "1rem 0" }}
        />
        <button>Click Me</button>
      </form>
    </section>
  );
}

export default EventExample;
