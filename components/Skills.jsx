import { FaTools, FaBrain, FaCloud, FaReact } from "react-icons/fa";

const skills = [
  {
    name: 'Full Stack Developer',
    description:
      'I have learnt & develop many web applications using React Js, Node Js, MySQL, Firebase with great responsive UI design.',
    icon: FaReact,
  },
  {
    name: 'Data Science',
    description:
      "Recently, I've started to learn Python and Data Science to solve real world business problems using AI and analytics.",
    icon: FaBrain,
  },
  {
    name: 'Cloud Hosting',
    description:
      "Apart from designing & developing web applications I've also deployed it on platforms like Heroku & Firebase.",
    icon: FaCloud,
  },
  {
    name: 'Tools',
    description:
      "I've also gain expereince in using tools like Git & Github, VS Code, Eclipse, Postman.",
    icon: FaTools,
  },
]

const Skills = () => {
  return (
    <div className="bg-white font-body">
      <div className="container px-6 py-10 md:py-14 mx-auto">
        <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl tracking-wide font-head">My technical <br /> Skills </h1>

        <div className="mt-2">
          <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
          <span className="inline-block w-2 h-1 ml-1 bg-blue-500 rounded-full"></span>
          <span className="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full"></span>
        </div>

        <div className="mt-8 xl:mt-6 lg:flex lg:items-center">
          <div className="grid w-full grid-cols-1 gap-8 xl:gap-16 md:grid-cols-2">

            {skills.map((skill) => (
              <div className="space-y-3">
              <div className="flex flex-row justify-start items-center">
              <span className="inline-block p-3 text-blue-600 bg-blue-200 rounded-xl">
                <skill.icon aria-hidden='true'/>
              </span>
              <h1 className="text-xl font-semibold text-gray-700 capitalize mx-3 lg:mx-4">{skill.name}</h1>
              </div>
              <p className="text-gray-500 dark:text-gray-500">
                {skill.description}
              </p>
            </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills;