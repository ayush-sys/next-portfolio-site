import React from 'react';
import { FaGlobe, FaGithub } from "react-icons/fa";

const ProjectCard = ({ name, description, imageSrc, imageAlt, href, live}) => {
    return (
        <div className="max-w-xs overflow-hidden bg-gray-50 hover:bg-gray-100 rounded-lg shadow-md transition ease-in hover:shadow-lg px-2 py-2 my-2">
            <div className="px-4 py-2">
                <h1 className="text-xl font-bold text-gray-700 uppercase">{name}</h1>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{description}</p>
            </div>

            <img className="object-cover w-full h-48 mt-2" src={imageSrc} alt={imageAlt} />

            <div className="flex items-center justify-between px-4 py-2 my-1">
                <a className="link-btn text-white bg-gray-700 hover:bg-gray-800 focus:bg-gray-700" href={href}>
                    <FaGithub className="w-auto h-4 lg:h-6 mx-2" />
                    Repo
                </a>

                <a className="link-btn text-white bg-blue-500 hover:bg-blue-600 focus:bg-blue-600" href={live}>
                    <FaGlobe className="w-auto h-4 lg:h-6 mx-2" />
                    Live
                </a>
            </div>
        </div>
    )
}

export default ProjectCard;