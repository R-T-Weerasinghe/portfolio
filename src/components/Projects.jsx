import { PROJECTS } from "../constants";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">Projects</h1>
      <div className="flex flex-wrap justify-center">
        {PROJECTS.map((project, index) => (
          <ProjectCard project={project} key={index}/>
        ))}
      </div>
    </div>
  );

  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">Projects</h1>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4 lg:text-right lg:pr-20">
              <img
                src={project.image}
                alt={project.title}
                width={150}
                height={150}
                className="mb-6 rounded"
              />
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold">{project.title}</h6>
              <p className="text-sm text-neutral-400">{project.description}</p>
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="inline-block bg-neutral-800 text-neutral-200 text-xs px-2 py-1 rounded-full mr-2 mt-2"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
