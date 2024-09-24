import logo from "../assets/ravinduw-high-resolution-logo2.jpg";
import { CONTACT } from "../constants";

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiMedium } from "react-icons/si";

import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarStyle = {
    position: scrolled ? "fixed" : "absolute",
    top: 0,
    left: 0,
    width: "100%",
    zIndex: 1000,
    backgroundColor: scrolled ? "#002144" : "transparent",
    transition: "background-color 0.3s ease-in-out",
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional, adds animation
    });
  };

  return (
    <nav
      className="mb-0 flex items-cneter justify-content justify-between px-6 py-4"
      style={navbarStyle}
    >
      <div className="flex flex-shrink-0 items-center">
        <img className="h-10" src={logo} alt="Logo" onClick={scrollToTop} style={{cursor: "pointer"}}/>
      </div>
      <div className="mx-8 mr-0 flex items-center justify-center gap-4 text-2xl">
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
