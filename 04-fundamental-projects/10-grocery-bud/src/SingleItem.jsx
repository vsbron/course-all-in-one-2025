import { useState } from "react";

function SingleItem({ item, removeItem }) {
  // Create state value for item's checked status
  const [isChecked, setIsChecked] = useState(item.completed);

  // Returned JSX
  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => setIsChecked((iC) => !iC)}
      />
      <p
        style={{
          textTransform: "capitalize",
          textDecoration: isChecked && "line-through",
        }}
      >
        {item.name}
      </p>
      <button className="btn remove-btn" type="button">
        Delete
      </button>
    </div>
  );
}

export default SingleItem;
