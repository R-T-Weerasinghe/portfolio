import { HERO_CONTENT } from "../constants";
import profile from "../assets/profile.png";
const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="pb-5 text-5xl tracking-tight lg:mt-16 lg:text-7xl flex gap-6 items-baseline">
              <span className="font-normal">Ravindu</span>
              <span className="font-thin text-4xl lg:text-6xl">
                Weerasinghe
              </span>
            </h1>
            <h2 className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">
              AI Undergraduate
            </h2>
            <p className="my-2 max-w-xl py-6 font-light tracking-tight text-justify">
              {HERO_CONTENT}
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <img className="rounded-lg" src={profile} alt="Profile" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
