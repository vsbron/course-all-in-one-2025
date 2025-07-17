function Title({ text }) {
  // Returned JSX
  return (
    <div className="title">
      <h2>{text || "Default Title"}</h2>
      <div className="title-underline"></div>
    </div>
  );
}

export default Title;
