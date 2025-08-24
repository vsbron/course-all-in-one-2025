import { useState } from "react";

import { formatPrice } from "../utils";

function FormRange({ label, name, size, price }) {
  // Set the step and max value for price
  const step = 1000;
  const maxPrice = 100000;

  // Set state value for selected price
  const [selectedPrice, setSelectedPrice] = useState(price || maxPrice);

  // Returned JSX
  return (
    <div className="form-control">
      <label
        htmlFor={name}
        className="text-base-content label cursor-pointer mb-2 flex justify-between"
      >
        <span className="label-text capitalize">{label}</span>
        <span>{formatPrice(selectedPrice)}</span>
      </label>
      <input
        type="range"
        name={name}
        min={0}
        max={maxPrice}
        value={selectedPrice}
        onChange={(e) => {
          setSelectedPrice(e.target.value);
        }}
        step={step}
        className={`range range-primary ${size} mb-2`}
      />
      <div className="w-full flex justify-between text-xs">
        <span className="font-bold text-md">0</span>
        <span className="font-bold text-md">Max: {formatPrice(maxPrice)}</span>
      </div>
    </div>
  );
}

export default FormRange;
