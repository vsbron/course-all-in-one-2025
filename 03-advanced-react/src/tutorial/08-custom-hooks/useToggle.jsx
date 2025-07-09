import { useState } from "react";

const useToggle = (defaultValue) => {
  // Creating the state and the toggle function
  const [show, setShow] = useState(defaultValue);
  const toggle = () => setShow((s) => !s);

  // Return the value and the function
  return { show, toggle };
};

export default useToggle;
