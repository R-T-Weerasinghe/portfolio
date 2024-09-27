import project1 from "../assets/projects/sentiview-1.png";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am an AI enthusiast and a problem solver with a passion for creating impactful solutions through technology. I strive to bridge the gap between ideas and execution, turning complex challenges into user-friendly applications.`;

export const ABOUT_TEXT_TECH = `I am an undergraduate pursuing an honours degree in Artificial Intelligence, where I’m building a strong theoriticial knowledge as well as a solid practical experience of using AI. Beyond the AI skills, I have fueled myself with frontend, backend, database, and cloud skills.`;

export const ABOUT_TEXT_SOFT= `I am a person who is driven by a commitment to leadership, teamwork, and problem-solving. I approach every challenge with adaptability and a user-first mindset, always considering multiple perspectives to find the best solution. My goal is to leverage my skills in AI and data science to create technology that not only solves problems but also improves lives.`;

export const EXPERIENCES = [
  {
    year: "2022 - Present",
    role: "BSc. (Hons) in Artificial Intelligence",
    company: "University of Moratuwa",
    description: `3rd year undergraduate at University of Moratuwa, studying as the first AI batch at Moratuwa. Enriched with solid foundational skills in both AI and computing. Moving towards more advanced AI concepts and technologies.`,
    technologies: ["Neural Networks", "Machine Learning", "Expert Systems", "Multi Agent Systems", "Computational Statistics"],
  },
  {
    year: "2021 - Present",
    role: "Professional Graduate Diploma",
    company: "British Computer Society",
    description: `Completed the certificate and diploma levels of the BCS Professional Graduate Diploma in IT. Currently studying the final level.`,
    technologies: ["Advanced DBMS", "Web Application Development", "Big Data Management", "Programming Paradigms"],
  },
  {
    year: "2021 - 2022",
    role: "Certificate on Cybersecurity & Digital Forensics",
    company: "SLIIT",
    description: `This certificate programme covered a wide range of topics in cybersecurity and digital forensics, including network security, cryptography, vulnerability analysis, ethical hacking, and windows forensics.`,
    technologies: ["OWASP", "Nmap", "Nessus", "Metasploit", "Wireshark", "Autopsy"],
  },
  {
    year: "2017 - 2020",
    role: "GCE Ordinary Level, GCE Advanced Level",
    company: "Ananda College, Colombo 10",
    description: `Completed GCE OLs with 9A's taking Tamil, English Literature, and ICT for basket subjects. Completed GCE ALs with 2A's 1B in the Mathematics stream and got selected to University of Moratuwa.`,
    technologies: ["ICT Society", "Badminton"],
  },
];

export const PROJECTS = [
  {
    title: "SentiView",
    image: project1,
    description:
      "A fully functional email analysis webapp for customer care emails with features like sentiment analysis, summarizing, visualizing, and agent evaluation.",
    technologies: ["Angular", "PrimeNG", "FastAPI", "Pandas", "GeminiAPI", "MongoDB", "AWS"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  location: "Maharagama, Sri Lanka",
  locationUrl: "http://maps.google.com/?q=Maharagama, Sri Lanka",
  phoneNo: "+94 77 555 3594",
  email: "ravindutharuka2001@gmail.com",
  linkedin: "https://www.linkedin.com/in/rtweera/",
  github: "https://github.com/R-T-Weerasinghe",
  medium: "https://medium.com/@rtweera",
};
