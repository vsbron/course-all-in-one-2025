function Title({ title, subtitle }) {
  // Returned JSX
  return (
    <div className="section-title">
      <h2>
        {title} <span>{subtitle}</span>
      </h2>
    </div>
  );
}

export default Title;
