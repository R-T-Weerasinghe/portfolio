import { RiReactjsLine, RiAngularjsFill, RiJavaFill } from "react-icons/ri";
import { SiFastapi, SiMongodb, SiJupyter, SiPandas, SiCodio, SiPytorch, SiKeras, SiScikitlearn } from "react-icons/si";
import { BiLogoPython, BiLogoAws } from "react-icons/bi";

const Technologies = () => {
  return (
    <div className="border-b border-neutral-900 pb-24 max-w-4xl m-auto">
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
          <BiLogoPython className="text-7xl text-yellow-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-2">
          <RiJavaFill className="text-7xl text-sky-600" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-3.5">
          <SiCodio  className="text-6xl text-blue-500" />
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
        <div className="rounded-2xl border-4 border-neutral-800 p-3.5">
          <SiPandas className="text-6xl text-indigo-700" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-3.5">
          <SiPytorch className="text-6xl text-orange-700" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-5">
          <SiKeras className="text-5xl text-red-700" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-2">
          <SiScikitlearn className="text-7xl text-sky-600" />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
