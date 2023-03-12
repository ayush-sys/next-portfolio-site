import ExpereinceCard from "./ExperienceCard";

const info = [
    {
        name: 'Samsung India',
        desc: 'As an intern in prism program I was responsible for providing solution to analyse root cause in a system',
        points: [
            'Automate log analysis of a system',
            'Develop ML based approach to fix root cause',
            'Improve perfomance of current working ML models'
        ],
        image: 'https://brandlogos.net/wp-content/uploads/2013/05/samsung-group-vector-logo.png',
        duration: 'June 2021 - Dec 2021',
        key: '1'
    },
    {
        name: 'Internshala',
        desc: 'As an ISP, I was responsible for building Internshala community in our college.',
        points: [
            'Organise meetups & training session to connect with students',
            'Promote students to take industry leading courses',
            'Campaining about the upcoming events in our campus'
        ],
        image: 'https://internshala.com/static/images/common/new_internshala_logo.svg',
        duration: 'June 2021 - Aug 2021',
        key: '2'
    }
]


const Experience = () => {
    return (
        <div className="bg-white font-body container" id="#expereince">
            <div className="px-6 py-10 md:py-14 mx-auto font-head">
                <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl tracking-wide font-head">My <br /> Experience </h1>
                <div className="mt-2">
                    <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
                    <span className="inline-block w-2 h-1 ml-1 bg-blue-500 rounded-full"></span>
                    <span className="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full"></span>
                </div>
            </div>

            <div className="xl:mt-6 lg:flex lg:items-center">
                <div className="w-full md:flex md:flex-row justify-between items-center">
                    <ExpereinceCard/>
                    <ExpereinceCard/>
                </div>
            </div>
        </div>
    )
}

export default Experience;