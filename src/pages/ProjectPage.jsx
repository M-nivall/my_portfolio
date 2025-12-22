import React from "react";
import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";

const ProjectPage = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="w-full min-h-screen bg-bodyColor text-lightText flex items-center justify-center">
        <p>Project not found</p>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-bodyColor text-lightText">
      <div className="max-w-5xl mx-auto py-20 px-6">
        {/* Back */}
        <Link
          to="/"
          className="text-designColor hover:underline mb-6 inline-block"
        >
          ← Back to Home
        </Link>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-designColor">
          {project.title}
        </h1>

        {/* Overview */}
        <p className="mt-4 text-lg text-gray-300">
          {project.details.overview}
        </p>

        {/* Features */}
        <div className="mt-10">
          <h2 className="text-xl font-semibold mb-3">
            Key Features
          </h2>
          <ul className="list-disc ml-6 space-y-2 text-gray-300">
            {project.details.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>

        {/* Tech Stack */}
        <div className="mt-10">
          <h2 className="text-xl font-semibold mb-3">
            Tech Stack
          </h2>
          <div className="flex flex-wrap gap-3">
            {project.details.techStack.map((tech, index) => (
              <span
                key={index}
                className="px-4 py-1.5 bg-gray-800 rounded-full text-sm text-gray-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
