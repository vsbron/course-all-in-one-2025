import "./fetchProjects";
import { useFetchProjects } from "./fetchProjects";

function Projects() {
  // Get the isLoading state and the projects from the custom hook
  const { isLoading, projects } = useFetchProjects();

  // Log the result
  console.log(projects);

  // Returned JSX
  return (
    <section>
      <h2>Projects</h2>
    </section>
  );
}

export default Projects;
