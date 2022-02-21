import { FaNodeJs, FaTools, FaBrain, FaCloud} from "react-icons/fa";

const features = [
  {
    name: 'MERN Application Developer',
    description:
      'I have learnt & develop many applications on MERN with great UI design. Apart from good design, I also code it efficiently.',
    icon: FaNodeJs,
  },
  {
    name: 'Machine Learning',
    description:
      'I also have a deep understanding of ML & want to develop more applications using it, so that I can solve real world problems.',
    icon: FaBrain,
  },
  {
    name: 'Cloud Hosting',
    description:
      'Apart from developing MERN & ML applications, I also deployed it on platforms like Heroku & Netlify.',
    icon: FaCloud,
  },
  {
    name: 'Tools',
    description:
      'I have also gain expereince in using tools like Git & Github, VS Code, linux terminal so that I can write & maintain code efficiently.',
    icon: FaTools,
  },
]

export default function Skills() {
  return (
    <div className="py-12 bg-white" id="skills">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:text-center font-head">
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-wide text-gray-900 sm:text-4xl">
            Skills
          </p>
        </div>

        <div className="mt-10 font-body">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-700 hover:text-blue-500">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
