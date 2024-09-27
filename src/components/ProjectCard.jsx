import React from "react";

const ProjectCard = ({project}) => {
  return (
    <div className="rounded-2xl border-2 border-neutral-800 p-2 m-2 w-full flex flex-wrap lg:justify-center lg:w-2/5 bg-stone-600/10 hover:bg-theme-blue hover:cursor-pointer transition-all">
      <div className="w-full flex justify-center lg:w-1/3 lg:text-right">
        <img
          src={project?.image}
          alt={project?.alt}
          width="100%"
          height="100%"
          className="rounded max-h-52 object-cover"
        />
      </div>
      <div className="w-full max-w-xl lg:w-2/3 py-2 pl-2">
              <h6 className="mb-2 font-semibold">
                {project?.title}
              </h6>
              <p className="text-sm mb-2 text-neutral-400">{project?.description}</p>
              {project?.technologies?.map((tech, index) => (
                <span
                  key=""
                  className="inline-block bg-neutral-800 text-neutral-200 text-xs px-2 py-1 rounded-full mr-2 mt-2"
                >
                  {tech}
                </span>
              ))}
            </div>
    </div>
  );
};

export default ProjectCard;
