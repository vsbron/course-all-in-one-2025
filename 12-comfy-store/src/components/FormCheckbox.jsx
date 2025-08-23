function FormCheckbox({ label, name, defaultValue, size }) {
  // Returned JSX
  return (
    <div className="flex flex-col items-center">
      <label htmlFor={name} className="label cursor-pointer">
        <span className="label-text capitalize text-base-content mb-2">
          {label}
        </span>
      </label>
      <input
        type="checkbox"
        name={name}
        id={name}
        defaultChecked={defaultValue}
        className={`checkbox checkbox-primary ${size}`}
      />
    </div>
  );
}

export default FormCheckbox;
