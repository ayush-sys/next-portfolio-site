import { FaGlobe, FaGithub } from "react-icons/fa";
const informations = [
    {
        name: 'Spotify Clone',
        description: 'A Spotify clone developed using Spotify API & styled using Tailwind CSS.',
        imageSrc: 'https://images.unsplash.com/photo-1581315628079-f093bb040803?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        imageAlt: '01-NextJS-spotify-clone',
        href: 'https://github.com/ayush-sys/next-spotify-clone',
        live: '/error'
    },
    {
        name: 'Invoice Management App',
        description: 'A simple web application to manage invoices of a corporation and predict the final date of payment of any transactions.',
        imageSrc: 'https://plus.unsplash.com/premium_photo-1677865215655-d513dcc6e958?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        imageAlt: '02-invoice-management-sys',
        href: 'https://github.com/ayush-sys/H2H-winter-internship-2022',
        live: '/error'
    },
    {
        name: 'Portfolio Website',
        description: 'A Next JS portfolio website styled using Tailwind CSS.',
        imageSrc: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        imageAlt: '03-react-messenger-clone',
        href: 'https://github.com/ayush-sys/next-portfolio-site',
        live: '/'
    }
]

const Projects = () => {
    return (
        <div className="bg-white font-body" id="projects">
            <div className="container px-6 py-10 md:py-14 mx-auto">
                <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl tracking-wide font-head">My <br /> Projects </h1>

                <div className="mt-2">
                    <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
                    <span className="inline-block w-2 h-1 ml-1 bg-blue-500 rounded-full"></span>
                    <span className="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full"></span>
                </div>

                <div className="mt-8 xl:mt-6 lg:flex lg:items-center">
                    <div className="grid w-full grid-cols-1 gap-8 md:gap-10 lg:gap-12 md:grid-cols-2 lg:grid-cols-3">

                        {informations.map((information) => (
                            <div className="max-w-xs overflow-hidden bg-gray-50 hover:bg-gray-100 rounded-lg shadow-md transition ease-in hover:shadow-lg px-2 py-2 my-2">
                                <div className="px-4 py-2">
                                    <h1 className="text-xl font-bold text-gray-700 uppercase">{information.name}</h1>
                                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{information.description}</p>
                                </div>

                                <img className="object-cover w-full h-48 mt-2" src={information.imageSrc} alt={information.imageAlt} />

                                <div className="flex items-center justify-between px-4 py-2 my-1">
                                    <a className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-700 rounded hover:bg-gray-800 focus:bg-gray-700 focus:outline-none flex flex-row items-center" href={information.href}>
                                        <FaGithub className="w-auto h-4 lg:h-6 mx-2" />
                                        Repo
                                    </a>

                                    <a className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-blue-500 rounded hover:bg-blue-600 focus:bg-blue-600 focus:outline-none flex flex-row items-center" href={information.live}>
                                        <FaGlobe className="w-auto h-4 lg:h-6 mx-2" />
                                        Live
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects