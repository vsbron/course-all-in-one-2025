function SectionTitle({ text }) {
  // Returned JSX
  return (
    <div className="border-b border-base-300 pb-5">
      <h2 className="text-3xl font-medium tracking-widest capitalize">
        {text}
      </h2>
    </div>
  );
}

export default SectionTitle;
