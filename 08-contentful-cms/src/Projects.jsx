import { useFetchProjects } from "./fetchProjects";

function Projects() {
  // Get the isLoading state and the projects from the custom hook
  const { isLoading, projects } = useFetchProjects();

  // Guard clause
  if (isLoading) {
    return (
      <section className="projects">
        <h2>Loading...</h2>
      </section>
    );
  }

  // Returned JSX
  return (
    <section className="projects">
      <div className="title">
        <h2>Projects</h2>
        <div className="title-underline"></div>
      </div>
      <div className="projects-center">
        {projects.map(({ id, img, url, title }) => (
          <a
            key={id}
            href={url}
            target="_blank"
            rel="noreferrer"
            className="project"
          >
            <img src={img} alt={title} className="img" />
            <h5>{title}</h5>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Projects;
