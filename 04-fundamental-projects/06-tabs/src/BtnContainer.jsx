function BtnContainer({ jobs, currentItem, setCurrentItem }) {
  // Returned JSX
  return (
    <div className="btn-container">
      {jobs.map((job, i) => (
        <button
          key={job.id}
          onClick={() => setCurrentItem(index)}
          className={`job-btn ${i === currentItem ? "active-btn" : ""}`}
        >
          {job.company}
        </button>
      ))}
    </div>
  );
}

export default BtnContainer;
