import React from "react";
// import './App.css';
import Image6 from "../assets/image/image6.png";

const Projects = () => {
  const projects = [
    {
      name: "Project 1",
      description:
        "This ia a project i did with bootstrap during my early days in web development.",
      link: "https://web-development-group2.vercel.app/",
    },
    {
      name: "Project 2",
      description:
        "This ia a project i did with html/css during my early days in web development..",
      link: "https://sidebar-transitioned.vercel.app/",
    },
  ];

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-box">
        <div>
          <ul className="mainlinks">
            {projects.map((project, index) => (
              <li key={index} className="mainlinks2">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </li>
            ))}
          </ul>
        </div>
        <img src={Image6} alt="Profile" className="project-pic" />
      </div>
    </section>
  );
};

export default Projects;
