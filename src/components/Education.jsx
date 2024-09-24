import { EXPERIENCES } from "../constants";

const Education = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">Education</h1>
      <div>
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/5 lg:text-right p-5 pb-2 lg:pr-20">
              <p className="mb-2 text-sm text-neutral-400">{experience.year}</p>
            </div>
            <div className="w-full max-w-xl lg:w-4/5 p-5  border-neutral-800 border-2 rounded-xl">
              <h6 className="mb-2 font-semibold">
                { experience.role } - {" "}
                <span className="text-sm text-purple-100">
                  { experience.company }
                </span>
              </h6>
              <p className="text-sm text-neutral-300 pb-4">{ experience.description }</p>
              { experience.technologies.map((tech, index) => (
                <span key={index} className="inline-block bg-neutral-800 text-neutral-200 text-xs px-2 py-1 rounded-full mr-2 mt-2">
                  { tech }
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
