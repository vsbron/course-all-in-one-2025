import Duties from "./Duties";

function JobInfo({ jobs, currentItem }) {
  // Destructuring jobs props
  const { company, dates, duties, title } = jobs[currentItem];

  // Returned JSX
  return (
    <article className="job-info">
      <h3>{title}</h3>
      <span className="job-company">{company}</span>
      <p className="job-date">{dates}</p>
      <Duties duties={duties} />
    </article>
  );
}

export default JobInfo;
