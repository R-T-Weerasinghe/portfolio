import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ProjectCard from "./components/ProjectCard";

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
      <div className="container mx-auto px-8">
        {/* <div className="fixed top-0 left-0 w-full h-20 z-10 overflow-hidden"> */}
          <Navbar />
        {/* </div> */}
        {/* <div className="mt-20"> */}
          <Hero />
          <About />
          <Technologies />
          <Education />
          <Projects />
          <Contact />
        {/* </div> */}
      </div>
    </div>
  );
};

export default App;
