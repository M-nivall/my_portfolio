import React from "react";
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProjectsCard = ({ title, des, src, github, live, id }) => {
  return (
    <div className="w-full p-4 xl:px-12 rounded-lg shadow-shadowOne bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 transition-colors duration-700">
      <div className="overflow-hidden rounded-lg">
        <img
          className="w-full h-60 object-contain group-hover:scale-110 duration-300"
          src={src}
          alt={title}
        />
      </div>

      <div className="mt-5">
        <div className="flex justify-between items-center">
          <h3 className="text-designColor uppercase text-sm">{title}</h3>
          <div className="flex gap-2">
            {github && (
              <a href={github} target="_blank" rel="noreferrer">
                <BsGithub />
              </a>
            )}
            {live && (
              <a href={live} target="_blank" rel="noreferrer">
                <FaGlobe />
              </a>
            )}
          </div>
        </div>

        <p className="text-sm mt-3">{des}</p>

        <Link
          to={`/projects/${id}`}
          className="inline-block mt-4 text-designColor hover:underline"
        >
          View Details →
        </Link>
      </div>
    </div>
  );
};
export default ProjectsCard;
