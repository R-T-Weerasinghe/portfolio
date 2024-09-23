import logo from "../assets/ravinduw-high-resolution-logo-transparent.png";
import { CONTACT } from "../constants";

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiMedium } from "react-icons/si";

const Navbar = () => {
  return (
    <nav className="mb-10 flex items-cneter justify-content justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="h-5" src={logo} alt="Logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href={CONTACT.linkedin}
          className="text-purple-100 hover:text-purple-500 hover:underline"
        >
          <FaLinkedin />
        </a>
        <a
          href={CONTACT.github}
          className="text-purple-100 hover:text-purple-500 hover:underline"
        >
          <FaGithub />
        </a>
        <a
          href={CONTACT.medium}
          className="text-purple-100 hover:text-purple-500 hover:underline"
        >
          <SiMedium />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
