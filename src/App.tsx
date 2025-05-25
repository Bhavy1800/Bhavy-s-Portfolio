import React from "react";
import { Code2, Contact, Home, Layers, User } from "lucide-react";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter, FaEnvelope } from "react-icons/fa6";
import {
  FaCloud,
  FaBrain,
  FaSearch,
  FaBan,
  FaMapMarkerAlt,
  FaMicrochip,
  FaDatabase,
} from "react-icons/fa";
import profileImg from "../assets/profile.png";
import codeachieve from "../assets/codeachieve.png";
import foodzing from "../assets/foodzing.png";
import {
  SiReact,
  SiAngular,
  SiTailwindcss,
  SiBootstrap,
  SiPrime,
  SiHtml5,
  SiCss3,
  SiSass,
  SiJavascript,
  SiTypescript,
  SiMysql,
  SiGit,
  SiGithub,
  SiFirebase,
  SiNeovim,
  SiFigma,
  SiCanva,
  SiAdobecreativecloud,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { Github, ExternalLink } from "lucide-react";
function App() {
  const projects = [
    {
      title: "FoodZing - A Modern Restaurant Food Ordering Website",
      image: foodzing,
      description:
        "Designed and developed a project named as FoodZing - A Modern Restaurant Food Ordering Website using Html, Css, Figma, React and Firebase.User-friendly features: Sign-up, sign-in, cart management, contactus.Modern, responsive design using CSS, backed by Firebase for authentication and realtime database.",
      tags: ["HTML", "CSS", "JAVASCRIPT", "REACT", "FIREBASE", "FIGMA"],
      github: "https://github.com/Bhavy1800/foodzing",
      liveLink: "https://foodzing-fb25d.web.app/",
    },
    {
      title: "CodeAchieve",
      image: codeachieve,
      description:
        "Designed and developed a responsive website named as CodeAchieve - A Freelancing Agency Website using HTML, CSS, Javascript and Figma.",
      tags: ["HTML", "CSS", "JAVASCRIPT", "FIGMA"],
      github: "https://github.com/Bhavy1800/CodeAchieve?tab=readme-ov-file",
      liveLink: "https://bhavy1800.github.io/CodeAchieve/",
    },
  ];
  const skills = [
    { icon: <SiReact />, label: "React" },
    { icon: <SiAngular />, label: "Angular" },
    { icon: <SiTailwindcss />, label: "Tailwind CSS" },
    { icon: <SiBootstrap />, label: "Bootstrap" },
    { icon: <SiHtml5 />, label: "HTML" },
    { icon: <SiCss3 />, label: "CSS" },
    { icon: <SiSass />, label: "SCSS" },
    { icon: <FaJava />, label: "Java" },
    { icon: <SiJavascript />, label: "JavaScript" },
    { icon: <SiTypescript />, label: "TypeScript" },
    { icon: <SiMysql />, label: "SQL" },
    { icon: <SiGit />, label: "Git" },
    { icon: <SiGithub />, label: "GitHub" },
    { icon: <SiFirebase />, label: "Firebase" },
    { icon: <SiNeovim />, label: "Neo Vim" },
    { icon: <SiFigma />, label: "Figma" },
    { icon: <SiCanva />, label: "Canva" },
    { icon: <SiAdobecreativecloud />, label: "Adobe Express" },
  ];
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="min-h-screen bg-[#14141b] text-white">
      <nav className="fixed top-0 left-0 right-0 p-4 flex justify-between items-center z-50 bg-[#14141b]/80 backdrop-blur-sm">
        <div className="text-2xl font-bold">B</div>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <X className="text-white" />
            ) : (
              <Menu className="text-white" />
            )}
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`flex-col md:flex-row md:flex gap-6 absolute md:static top-16 left-0 right-0 bg-[#14141b]/95 md:bg-transparent px-4 py-4 md:p-0 ${
            isOpen ? "flex" : "hidden"
          }`}
        >
          <a href="#about" className="hover:text-purple-400 transition-colors">
            About
          </a>
          <a href="#skills" className="hover:text-purple-400 transition-colors">
            Skills
          </a>
          <a
            href="#projects"
            className="hover:text-purple-400 transition-colors"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="hover:text-purple-400 transition-colors"
          >
            Contact
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-4 pt-1 md:px-20">
        <div className="flex flex-col md:flex-row mt-12 items-center justify-between">
          <div className="text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-[6.25rem] font-bold text-purple-400 leading-tight mt-10 pt-10">
              BHAVY PATEL
            </h1>
            <h2 className="text-lg sm:text-xl mt-4 text-gray-300">
              A FRONTEND DEVELOPER
            </h2>
          </div>

          <div className="skill-container mt-8 md:mt-0">
            <div className="orbit text-purple-400">
              {skills.map((skill, index) => (
                <div
                  className="orbit-icon"
                  key={index}
                  style={{ "--i": index }}
                >
                  {skill.icon}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-10 px-4">
          <p className="text-base sm:text-lg md:text-xl max-w-xl mx-auto text-gray-300">
            <span className="text-2xl sm:text-3xl text-purple-400">Hi,</span>
            <br />
            "A frontend developer with a passion for crafting engaging user
            experiences. Welcome to my portfolio!"
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="mt-32 px-4 md:px-20">
        <h2 className="text-5xl md:text-7xl text-purple-400/20 font-bold">
          ABOUT
        </h2>
        <div className="mt-12 flex flex-col justify-center md:flex-row gap-12 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-purple-400 rounded-full blur-2xl opacity-20"></div>
            <img
              src={profileImg}
              alt="Profile"
              className="w-64 h-64 object-cover rounded-full relative z-10"
            />
          </div>
          <p className="max-w-xl text-2xl text-gray-300">
            I'm a Front-End Developer and a fresher. I have comprehensive
            understanding of web design and website structure. I'm passionate
            about creating websites.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="mt-32 px-4 md:px-20">
        <h2 className="text-5xl md:text-7xl text-purple-400/20 font-bold">
          SKILLS
        </h2>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-5 gap-6">
          {skills.map((skill, i) => (
            <div
              key={i}
              className="aspect-square border border-gray-700 rounded-lg flex flex-col items-center justify-center hover:border-purple-400 transition-colors"
            >
              <div className="text-3xl text-gray-400 mb-2">{skill.icon}</div>
              <span className="text-sm text-gray-300">{skill.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="mt-32 px-4 md:px-20">
        <h2 className="text-5xl md:text-7xl text-purple-400/20 font-bold">
          PROJECTS
        </h2>
        <div className="space-y-8 mt-12">
          {projects.map((project) => (
            <div
              key={project.title}
              className="border border-gray-700 rounded-lg p-4 md:p-6 hover:border-purple-400 transition-colors overflow-hidden"
            >
              <div className="flex flex-col md:grid md:grid-cols-2 gap-6">
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-lg w-full h-48 md:h-64 object-cover"
                />
                <div className="space-y-4 mt-4 md:mt-0">
                  <h3 className="text-lg md:text-xl font-bold">{project.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gray-700/50 rounded-full text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm md:text-base text-gray-400">{project.description}</p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      className="inline-flex items-center gap-2 text-sm hover:text-purple-400"
                    >
                      <Github className="w-4 h-4" />
                      GitHub Repository
                    </a>
                    <a
                      href={project.liveLink}
                      target="_blank"
                      className="inline-flex items-center gap-2 text-sm hover:text-purple-500"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live preview
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="mt-32 px-4 md:px-20 pb-20">
        <div className="flex justify-between items-center flex-wrap">
          <div>
            <h2 className="text-5xl md:text-7xl text-purple-400/20 font-bold mb-12">
              LET'S WORK TOGETHER
            </h2>
          </div>

          <div className="relative w-40 h-40 mr-10 rounded-full border border-purple-400 flex items-center justify-center bg-[#0f0f1b]">
            {/* Center Button */}
            <div className="absolute w-10 h-10 rounded-full bg-purple-900 flex items-center justify-center text-purple-300">
              <span className="text-xl">+</span>
            </div>

            {/* Top */}
            <a
              href="https://github.com/Bhavy1800"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-2 left-1/2 transform -translate-x-1/2 bg-purple-500 w-8 h-8 flex items-center justify-center rounded"
            >
              <FaGithub className="text-white" />
            </a>

            {/* Bottom */}
            <a
              href="mailto:bhavypatel0008@gmail.com"
              className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-purple-500 w-8 h-8 flex items-center justify-center rounded"
            >
              <FaEnvelope className="text-white" />
            </a>

            {/* Left */}
            <a
              href="https://www.linkedin.com/in/bhavy-patel-034344209/"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-purple-500 w-8 h-8 flex items-center justify-center rounded"
            >
              <FaLinkedin className="text-white" />
            </a>

            {/* Right */}
            <a
              href="https://x.com/Bhavy1800"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-purple-500 w-8 h-8 flex items-center justify-center rounded"
            >
              <FaXTwitter className="text-white" />
            </a>
          </div>
        </div>

        <p className="text-sm text-gray-400 mt-20">
          ©BhavyPatel2024 All rights reserved
        </p>
      </section>
    </div>
  );
}

export default App;
