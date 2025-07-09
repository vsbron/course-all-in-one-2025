import useToggle from "./useToggle";

const ToggleExample = () => {
  // Getting the states from the custom hook
  const { show, toggle } = useToggle(false);

  // Returned JSX
  return (
    <div>
      <h4>toggle custom hook</h4>
      <button className="btn" onClick={() => toggle()}>
        toggle
      </button>
      {show && <h4>some stuff</h4>}
    </div>
  );
};
export default ToggleExample;
