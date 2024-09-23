import about from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">
        <span className="font-thin">About</span>
        &nbsp;
        <span className="font-normal">Me</span>
      </h2>
      <div className="flex flex-wrap">
        {/* <div className="w-full lg:w-1/2 lg:p-8">
            <div className="flex items-center justify-center">
                <img className="rounded-2xl" src={about} alt="about" />
            </div>
        </div> */}
        <div className="w-full lg:w-full">
          <div className="flex items-center justify-center">
            <p className="my-2 max-w-4xl py-6 text-justify font-light leading-loose">
              {ABOUT_TEXT}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
