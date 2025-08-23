function FormInput({ label, name, type, defaultValue, size }) {
  // Returned JSX
  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text text-base-content mb-1 capitalize">
          {label}
        </span>
      </label>
      <input
        type={type}
        name={name}
        defaultValue={defaultValue}
        className={`input input-bordered ${size}`}
      />
    </div>
  );
}

export default FormInput;
