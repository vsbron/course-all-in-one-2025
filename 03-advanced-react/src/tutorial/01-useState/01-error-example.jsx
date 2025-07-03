const ErrorExample = () => {
  // Initiating the counter
  let count = 0;

  // Creating a button click handler
  const handleClick = () => {
    count = count + 1;
    console.log(count);
  };

  // Returned JSX
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={handleClick} className="btn">
        increase
      </button>
    </div>
  );
};

export default ErrorExample;

// Works but nothing happens on the screen as the app is not re-rendered
