import React from 'react';
import { skills } from '../constants/index';


const Skills = () => {
  return (
    <div className="font-body" id="skills">
      <div className="container px-6 py-8 md:py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl tracking-wide font-head">My technical <br /> Skills </h1>

        <div className="mt-2">
            <span className="inline-block w-40 h-1 bg-blue-800 rounded-full"></span>
            <span className="inline-block w-2 h-1 ml-1 bg-blue-800 rounded-full"></span>
            <span className="inline-block w-1 h-1 ml-1 bg-blue-800 rounded-full"></span>
          </div>

        <div className="mt-8 xl:mt-6 lg:flex lg:items-center">
          <div className="grid w-full grid-cols-1 gap-8 xl:gap-16 md:grid-cols-2">
            {skills.map((skill) => (
              <div className="space-y-3">
                <div className="flex flex-row justify-start items-center">
                  <span className="inline-block p-3 text-blue-600 bg-blue-200 rounded-xl">
                    <skill.icon aria-hidden='true'/>
                  </span>
                  <h1 className="text-xl font-semibold text-gray-800 capitalize mx-3 lg:mx-4">{skill.name}</h1>
                </div>
                <p className="text-gray-700">
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