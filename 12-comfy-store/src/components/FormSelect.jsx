function FormSelect({ label, name, list, defaultValue, size }) {
  // Returned JSX
  return (
    <div className="form-control">
      <label htmlFor={name} className="label">
        <span className="text-base-content label-text capitalize mb-2">
          {label}
        </span>
      </label>
      <select
        name={name}
        id={name}
        className={`select select-bordered ${size}`}
        defaultValue={defaultValue}
      >
        {list.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}

export default FormSelect;
