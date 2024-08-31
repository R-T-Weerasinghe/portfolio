import { RiReactjsLine, RiAngularjsFill } from "react-icons/ri";
import { SiFastapi, SiMongodb, SiJupyter  } from "react-icons/si";
import { BiLogoPython, BiLogoAws } from "react-icons/bi";

const Technologies = () => {
  return (
    <div className="border-b border-neutral-900 pb-24">
      <h2 className="my-20 text-center text-4xl">
        <span className="font-thin">My</span>
        &nbsp;
        <span className="font-normal">Technologies</span>
      </h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-2">
          <RiAngularjsFill className="text-7xl text-red-600" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-2">
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-3.5">
          <SiFastapi className="text-6xl text-emerald-500" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-2">
          <BiLogoPython className="text-7xl text-neutral-200" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-3.5">
          <SiMongodb className="text-6xl text-green-600" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-2">
          <BiLogoAws className="text-7xl text-orange-500" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-2 relative">
          <SiJupyter className="text-7xl text-orange-500" />
          <div className="absolute inset-0 flex justify-center items-center"><div className="mb-1">Jupyter</div></div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
