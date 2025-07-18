import { useEffect, useRef, useState } from "react";

const UseRefBasics = () => {
  // Creating the state for the value
  const [value, setValue] = useState(0);

  // Creating the useRef instances
  const refContainer = useRef(null);
  const isMounted = useRef(false);

  // useEffect function that places our focus on the input field
  useEffect(() => {
    refContainer.current.focus();
  }, []);

  // useEffect function that logs the mounted ref only on re-render
  useEffect(() => {
    // Check and assign isMounted if false
    if (!isMounted.current) {
      isMounted.current = true;
      return;
    }

    // Log the message
    console.log("Re-render log");
  }, [value]);

  // Create the form submit handler that logs the input value using ref
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(refContainer.current.value);
  };

  // Returned JSX
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="form-input"
            ref={refContainer}
          />
        </div>
        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      <h3>value : {value}</h3>
      <button onClick={() => setValue(value + 1)} className="btn">
        increase
      </button>
    </div>
  );
};

export default UseRefBasics;
