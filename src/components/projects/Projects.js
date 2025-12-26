import React from "react";
import Title from "../layouts/Title";
import ProjectsCard from "./ProjectsCard";
import { projects } from "../../data/projects";

const Projects = () => {
  return (
    <section id="projects" className="w-full py-20 border-b border-black">
      <div className="flex justify-center items-center">
        <Title title="REAL-WORLD APPLICATIONS" des="Featured Projects" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectsCard
            key={project.id}
            id={project.id}
            title={project.title}
            des={project.shortDesc}
            src={project.image}
            github={project.github}
            live={project.live}
          />
        ))}
      </div>
    </section>
  );
};
export default Projects;
