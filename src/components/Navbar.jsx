import logo from "../assets/logo.png";

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiMedium } from "react-icons/si";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-cneter justify-content justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="w-10" src={logo} alt="Logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <FaLinkedin />
        <FaGithub />
        <SiMedium />
      </div>
    </nav>
  );
};

export default Navbar;
