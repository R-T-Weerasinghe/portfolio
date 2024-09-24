import React from "react";

const ProjectCard = () => {
  return (
    <div className="rounded-2xl border-2 border-neutral-800 p-2 m-2 w-full flex flex-wrap lg:justify-center">
      <div className="w-full lg:w-1/4 lg:text-right">
        <img
          src=""
          alt=""
          width={150}
          height={150}
          className="mb-6 rounded"
        />
      </div>
      <div className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold">
                hi
              </h6>
              <p className="text-sm text-neutral-400">""</p>
              {/* {project.technologies.map((tech, index) => (
                <span
                  key=""
                  className="inline-block bg-neutral-800 text-neutral-200 text-xs px-2 py-1 rounded-full mr-2 mt-2"
                >
                  {tech}
                </span>
              ))} */}
            </div>
    </div>
  );
};

export default ProjectCard;
