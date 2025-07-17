import Duties from "./Duties";

function JobInfo({ jobs }) {
  // Destructuring jobs props
  const { company, dates, duties, title } = jobs[0];

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
