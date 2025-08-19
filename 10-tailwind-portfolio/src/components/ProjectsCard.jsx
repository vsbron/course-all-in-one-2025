import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";

function ProjectsCard({ img, url, github, linkedin, twitter, title, text }) {
  // Returned JSX
  return (
    <article className="bg-white rounded-lg shadow-md hover:shadow-xl duration-300">
      <img
        src={img}
        alt={title}
        className="w-full object-cover rounded-t-lg h-64"
      />
      <div className="capitalize p-8">
        <h2 className="text-xl tracking-wide font-medium mb-4">{title}</h2>
        <p className="text-slate-700 leading-loose mb-4">{text}</p>
        <div className="flex gap-x-4">
          <a href={url}>
            <TbWorldWww className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
          </a>
          {github && (
            <a href={github}>
              <FaGithubSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
          )}
          {linkedin && (
            <a href={linkedin}>
              <FaLinkedin className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
          )}
          {twitter && (
            <a href={twitter}>
              <FaTwitterSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectsCard;
