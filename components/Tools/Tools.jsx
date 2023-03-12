import ToolImage from "./ToolImage";
import bootstrap from "../../public/images/logos/bootstrap.svg";
import css3 from "../../public/images/logos/css3.svg";
import firebase from "../../public/images/logos/firebase.svg";
import git from "../../public/images/logos/git.svg";
import github from "../../public/images/logos/github.svg";
import heroku from "../../public/images/logos/Heroku.svg";
import html from "../../public/images/logos/html5.svg";
import java from "../../public/images/logos/java.svg"
import js from "../../public/images/logos/JS.svg";
import materialui from "../../public/images/logos/materialui.svg";
import mysql from "../../public/images/logos/mysql.svg";
import nextjs from "../../public/images/logos/next-js.svg";
import nodejs from "../../public/images/logos/nodejs.svg";
import pandas from "../../public/images/logos/pandas.svg";
import python from "../../public/images/logos/python.svg"
import react from "../../public/images/logos/react.svg";
import seaborn from "../../public/images/logos/seaborn.svg";
import sklearn from "../../public/images/logos/sklearn.svg";
import tailwindcss from "../../public/images/logos/tailwindcss.svg";
import vercel from "../../public/images/logos/vercel.svg";
import digitalocean from "../../public/images/logos/digitalocean.svg";
import flask from "../../public/images/logos/flask.svg";
import postman from "../../public/images/logos/postman.svg";
import powerbi from "../../public/images/logos/powerbi.svg";


const toolImages = [
  html, css3, js, java, nodejs, react, nextjs, materialui, bootstrap, tailwindcss, mysql,
  python, flask, pandas, seaborn, sklearn, powerbi, git, github, postman, firebase, heroku, vercel, digitalocean
]


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
            {toolImages.map(toolImage => (
              <ToolImage location={toolImage}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}