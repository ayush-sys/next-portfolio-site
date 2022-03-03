import ToolImage from "./ToolImage";
import aws from "../public/images/logos/aws.svg";
import bootstrap from "../public/images/logos/bootstrap.svg";
import css3 from "../public/images/logos/css3.svg";
import firebase from "../public/images/logos/firebase.svg";
import git from "../public/images/logos/git.svg";
import github from "../public/images/logos/github.svg";
import heroku from "../public/images/logos/Heroku.svg";
import html from "../public/images/logos/html5.svg";
import java from "../public/images/logos/java.svg"
import js from "../public/images/logos/JS.svg";
import matplotlib from "../public/images/logos/matplotlib.svg";
import mongodb from "../public/images/logos/mongodb.svg";
import netlify from "../public/images/logos/Netlify.svg";
import nextjs from "../public/images/logos/next-js.svg";
import nodejs from "../public/images/logos/nodejs.svg";
import numpy from "../public/images/logos/numpy.svg";
import pandas from "../public/images/logos/pandas.svg";
import python from "../public/images/logos/python.svg"
import react from "../public/images/logos/react.svg";
import seaborn from "../public/images/logos/seaborn.svg";
import sklearn from "../public/images/logos/sklearn.svg";
import tailwindcss from "../public/images/logos/tailwindcss.svg";
import tensorflow from "../public/images/logos/tensorflow.svg";


const toolImages =[
    html, css3, js, java, nodejs, react, nextjs, bootstrap, tailwindcss, mongodb,
     python, numpy, pandas, matplotlib, seaborn, sklearn, tensorflow,
      git, github, firebase, heroku, netlify
]


export default function Tools() {
  return (
    <div className="py-12 bg-white" id="skills">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:text-center font-head">
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-wide text-gray-900 sm:text-4xl">
            Tools
          </p>
        </div>

        <div className="mt-10 font-body">
          <dl className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 space-x-4 gap-x-6 gap-y-10">
            {toolImages.map(toolImage => (
                <ToolImage location={toolImage}/>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}