
const info = [
    {
        name:'SRIB Institute India',
        desc:'As an intern in prism program I was responsible for providing solution to analyse root cause in a system',
        points:[
            'Automate log analysis of a system',
            'Develop ML based approach to fix root cause',
            'Improve perfomance of current working ML models'
        ],
        image:'https://brandlogos.net/wp-content/uploads/2013/05/samsung-group-vector-logo.png',
        duration:'June 2021 - Dec 2021',
        key:'1'
    },
    {
        name:'Internshala',
        desc:'As an ISP, I was responsible for building Internshala community in our college.',
        points:[
            'Organise meetups & training session to connect with students',
            'Promote students to take industry leading courses',
            'Campaining about the upcoming events in our campus'
        ],
        image: 'https://internshala.com/static/images/common/new_internshala_logo.svg',
        duration:'June 2021 - Aug 2021',
        key:'2'
    }
]


export default function Expereince() {
    return(
        <div className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="md:text-center">
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        Expereince
                    </p>
                </div>

                <div className="mt-10">
                    <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-6 md:grid-cols-2 md:gap-x-4 md:gap-y-4 md:grid md:space-y-0">
                        {info.map(expereinceInfo => (
                            <div key={expereinceInfo.key} className="group relative shadow-md">
                                <div className="relative w-full h-auto bg-white rounded-lg overflow-hidden sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1 lg:aspect-h-1">
                                    <a class="w-full block h-full tracking-wide">
                                        <img alt='alt'  src={expereinceInfo.image} className="max-h-40 w-full object-cover"/>
                                        <div className="bg-white dark:bg-gray-800 w-full p-4">
                                            <p className="text-xl font-semibold mb-3 text-blue-600 flex flex-row justify-between">
                                                {expereinceInfo.name}
                                                <div className="flex">
                                                    <a className="px-4 py-2 flex items-center text-xs font-semibold rounded-full text-blue-500 border border-blue-600 mr-2">
                                                        {expereinceInfo.duration}
                                                    </a>
                                                </div>
                                            </p>
                                            <p className="text-gray-700 font-medium text-md mb-2">
                                                {expereinceInfo.desc}
                                                <ul className="text-gray-600 font-regular text-md mt-2 list-disc list-inside">
                                                {expereinceInfo.points.map(point => (
                                                    <li>{point}</li>
                                                ))}
                                            </ul>
                                            </p>
                                        </div>
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