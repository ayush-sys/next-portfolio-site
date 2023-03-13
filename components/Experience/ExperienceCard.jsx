import React from "react";
import { CgOrganisation } from "react-icons/cg";


const ExperienceCard = ({ name, title, year, description, image }) => {
    return (
        <div className="w-full max-w-sm overflow-hidden backdrop-blur-md opacity-85 bg-gray-100 rounded-lg shadow-lg hover:bg-white hover:shadow-xl mx-2 transition ease-in mt-8 md:mt-0">
            <img className="object-cover object-center w-full h-56 transition ease-in" src={image} alt="avatar" />

            <div className="flex items-center px-4 py-3 bg-gray-800">
                <CgOrganisation className="mx-2 h-6 md:h-8 w-auto text-gray-200" />
                <h1 className="mx-3 text-lg font-semibold text-gray-200">{name}</h1>
            </div>

            <div className="px-6 py-4">
                <p className="py-2 text-gray-800 font-semibold">{title},
                    <span className="text-gray-600 text-md">&nbsp;{year}</span>
                </p>

                <h1 className="text-md mt-2 md:mt-4 text-gray-700 italic font-semibold">Job Description : </h1>
                <div className="flex items-center mt-1 text-gray-600 px-4">
                    <ul className="list-disc">
                        {description.map((point) => (
                            <li>{point}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ExperienceCard;