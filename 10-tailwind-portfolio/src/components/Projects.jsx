import { useFetchProjects } from "../fetchProjects";
import ProjectsCard from "./ProjectsCard";
import SectionTitle from "./SectionTitle";

function Projects() {
  // Get the isLoading state and the projects from the custom hook
  const { isLoading, projects } = useFetchProjects();

  // Guard clause
  if (isLoading) {
    return <section className="py-20 align-element" id="projects"></section>;
  }

  // Returned JSX
  return (
    <section className="py-20 align-element" id="projects">
      <SectionTitle text={isLoading ? "Loading..." : "Web creations"} />
      {!isLoading && (
        <div className="py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectsCard key={project.id} {...project} />
          ))}
        </div>
      )}
    </section>
  );
}

export default Projects;
