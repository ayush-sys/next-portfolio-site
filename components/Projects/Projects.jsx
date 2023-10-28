import ProjectCard from './ProjectCard';
import { projects } from '../../constants/index';


const Projects = () => {
    return (
        <div className="font-body" id="projects">
            <div className="container px-6 py-10 md:py-14 mx-auto">
                <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl tracking-wide font-head">My <br /> Projects </h1>

                <div className="mt-2">
                    <span className="inline-block w-40 h-1 bg-blue-800 rounded-full"></span>
                    <span className="inline-block w-2 h-1 ml-1 bg-blue-800 rounded-full"></span>
                    <span className="inline-block w-1 h-1 ml-1 bg-blue-800 rounded-full"></span>
                </div>

                <div className="mt-8 xl:mt-6 lg:flex lg:items-center">
                    <div className="grid w-full grid-cols-1 gap-8 md:gap-10 lg:gap-12 md:grid-cols-2 lg:grid-cols-3">

                        {projects.map((information) => (
                            <ProjectCard
                                name={information.name}
                                description={information.description}
                                href={information.href}
                                imageAlt={information.imageAlt}
                                imageSrc={information.imageSrc}
                                live={information.live}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects