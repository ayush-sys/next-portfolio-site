import ProjectCard from './ProjectCard';

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

                        {informations.map((information) => (
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