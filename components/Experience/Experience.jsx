import ExpereinceCard from "./ExperienceCard";
import { experience } from "../../constants/index";


const Experience = () => {
    return (
        <div className="font-body container" id="expereince">
            <div className="px-6 py-10 md:py-14 mx-auto font-head">
                <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl tracking-wide font-head">My <br /> Experience </h1>
                <div className="mt-2">
                    <span className="inline-block w-40 h-1 bg-blue-800 rounded-full"></span>
                    <span className="inline-block w-2 h-1 ml-1 bg-blue-800 rounded-full"></span>
                    <span className="inline-block w-1 h-1 ml-1 bg-blue-800 rounded-full"></span>
                </div>
            </div>

            <div className="mb-10 xl:mt-6 lg:flex lg:items-center">
                <div className="w-full md:flex md:flex-row justify-between items-center">
                    {experience.map((e, key) => (
                        <ExpereinceCard key={key}
                            name={e.name}
                            title={e.title}
                            description={e.description}
                            image={e.image}
                            year={e.year}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Experience;