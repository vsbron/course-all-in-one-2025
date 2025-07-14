import { useState } from "react";

// Declaring the items array
const newItems = Array.from({ length: 5000 }, (_, index) => {
  return (
    <div key={index}>
      <img src="/vite.svg" alt="" />
    </div>
  );
});

const SlowComponent = () => {
  // Creating the state value for the items
  const [items, _] = useState(newItems);

  // Returned JSX
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        marginTop: "2rem",
      }}
    >
      {items}
    </div>
  );
};
export default SlowComponent;
