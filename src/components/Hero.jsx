import { HERO_CONTENT } from "../constants";
import profile from "../assets/profile2.png";
const Hero = () => {
  return (
    <div className="border-b border-neutral-900 mt-20 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-3/5">
          <div className="flex flex-col items-center lg:items-start lg:pl-36">
            <h1 className="pb-5 text-4xl tracking-tight lg:mt-16 lg:text-7xl flex gap-2 lg:gap-6 items-baseline">
              <span className="font-normal">Ravindu</span>
              <span className="font-thin text-3xl lg:text-6xl">
                Weerasinghe
              </span>
            </h1>
            <h2 className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-xl lg:text-3xl tracking-tight text-transparent">
              AI Undergraduate
            </h2>
            <p className="my-2 max-w-4xl py-6 font-light tracking-tight leading-7 text-justify">
              {HERO_CONTENT}
            </p>
          </div>
        </div>
        <div className="w-full lg:w-2/5 lg:p-8 lg:pr-0">
          <div className="flex justify-center">
            <img className="rounded-lg" src={profile} alt="Profile" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
