const ControlledInputs = () => {
  // Returned JSX
  return (
    <form className="form">
      <h4>Controlled Inputs</h4>
      <div className="form-row">
        <label htmlFor="name" className="form-label">
          Name:
        </label>
        <input type="text" id="name" className="form-input" />
      </div>
      <div className="form-row">
        <label htmlFor="email" className="form-label">
          Email:
        </label>
        <input type="text" id="email" className="form-input" />
      </div>
      <button type="submit" className="btn btn-block">
        Submit
      </button>
    </form>
  );
};
export default ControlledInputs;
