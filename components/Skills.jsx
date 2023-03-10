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
    <section class="bg-white">
      <div class="container px-6 py-10 mx-auto">
        <h1 class="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl tracking-wide">My technical <br /> Skills </h1>

        <div class="mt-2">
          <span class="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
          <span class="inline-block w-2 h-1 ml-1 bg-blue-500 rounded-full"></span>
          <span class="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full"></span>
        </div>

        <div class="mt-8 xl:mt-6 lg:flex lg:items-center">
          <div class="grid w-full grid-cols-1 gap-8 lg:w-1/2 xl:gap-16 md:grid-cols-2">

            {skills.map((skill) => (
              <div class="space-y-3">
              <span class="inline-block p-3 text-blue-600 bg-blue-200 rounded-xl">
                <skill.icon aria-hidden='true'/>
              </span>

              <h1 class="text-xl font-semibold text-gray-700 capitalize">{skill.name}</h1>

              <p class="text-gray-500 dark:text-gray-500">
                {skill.description}
              </p>
            </div>
            ))}
          </div>

          <div class="hidden lg:flex lg:w-1/2 lg:justify-center">
            <img class="w-[28rem] h-[28rem] flex-shrink-0 object-cover xl:w-[34rem] xl:h-[34rem] rounded-full" src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80" alt="tools-pic" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills;