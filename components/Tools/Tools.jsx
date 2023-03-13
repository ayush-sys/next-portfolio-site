import React from "react";
import ToolImage from "./ToolImage";
import { tools } from '../../constants/index';


export default function Tools() {
  return (

    <div className="font-body" id="tools">
      <div className="container px-6 py-10 md:py-14 mx-auto">
        <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl tracking-wide font-head">Tools & <br /> Services </h1>

        <div className="mt-2">
          <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
          <span className="inline-block w-2 h-1 ml-1 bg-blue-500 rounded-full"></span>
          <span className="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full"></span>
        </div>

        <div className="mt-8 xl:mt-6 lg:flex lg:items-center">
          <div className="grid w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-6 space-x-4 gap-x-6 gap-y-10">
            {tools.map(toolImage => (
              <ToolImage location={toolImage}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}