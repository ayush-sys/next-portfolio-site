import { FaTools, FaBrain, FaCloud, FaReact } from "react-icons/fa";
import bootstrap from "../public/images/logos/bootstrap.svg";
import css3 from "../public/images/logos/css3.svg";
import firebase from "../public/images/logos/firebase.svg";
import git from "../public/images/logos/git.svg";
import github from "../public/images/logos/github.svg";
import heroku from "../public/images/logos/Heroku.svg";
import html from "../public/images/logos/html5.svg";
import java from "../public/images/logos/java.svg"
import js from "../public/images/logos/JS.svg";
import materialui from "../public/images/logos/materialui.svg";
import mysql from "../public/images/logos/mysql.svg";
import nextjs from "../public/images/logos/next-js.svg";
import nodejs from "../public/images/logos/nodejs.svg";
import pandas from "../public/images/logos/pandas.svg";
import python from "../public/images/logos/python.svg"
import react from "../public/images/logos/react.svg";
import seaborn from "../public/images/logos/seaborn.svg";
import sklearn from "../public/images/logos/sklearn.svg";
import tailwindcss from "../public/images/logos/tailwindcss.svg";
import vercel from "../public/images/logos/vercel.svg";
import digitalocean from "../public/images/logos/digitalocean.svg";
import flask from "../public/images/logos/flask.svg";
import postman from "../public/images/logos/postman.svg";
import powerbi from "../public/images/logos/powerbi.svg";



const skills = [
    {
        key: '1',
        name: 'Full Stack Developer',
        description:
            'I have learnt & develop many web applications using React Js, Node Js, MySQL, Firebase with great responsive UI design.',
        icon: FaReact,
    },
    {
        key: '2',
        name: 'Data Science',
        description:
            "Recently, I've started to learn Python and Data Science to solve real world business problems using AI and analytics.",
        icon: FaBrain,
    },
    {
        key: '3',
        name: 'Cloud Hosting',
        description:
            "Apart from designing & developing web applications I've also deployed it on platforms like Heroku & Firebase.",
        icon: FaCloud,
    },
    {
        key: '4',
        name: 'Tools',
        description:
            "I've also gain expereince in using tools like Git & Github, VS Code, Eclipse, Postman.",
        icon: FaTools,
    },
]

const projects = [
    {
        key: '1',
        name: 'Spotify Clone',
        description: 'A Spotify clone developed using Spotify API & styled using Tailwind CSS.',
        imageSrc: 'https://images.unsplash.com/photo-1581315628079-f093bb040803?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        imageAlt: '01-NextJS-spotify-clone',
        href: 'https://github.com/ayush-sys/next-spotify-clone',
        live: 'https://next-spotify-clone-eta.vercel.app/'
    },
    {
        key: '2',
        name: 'Invoice Management App',
        description: 'A simple web application to manage invoices of a corporation and predict the final date of payment of any transactions.',
        imageSrc: 'https://plus.unsplash.com/premium_photo-1677865215655-d513dcc6e958?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        imageAlt: '02-invoice-management-sys',
        href: 'https://github.com/ayush-sys/H2H-winter-internship-2022',
        live: '/error'
    },
    {
        key: '3',
        name: 'Stock Market Trend Analysis',
        description: 'A simple analysis done on stock market data to visualize data.',
        imageSrc: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3RvY2slMjBtYXJrZXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        imageAlt: '04-stock-analysis-project',
        href: 'https://github.com/ayush-sys/stock-trend-prediction',
        live: '/error'
    },
    {
        key: '4',
        name: 'Portfolio Website',
        description: 'A Next JS portfolio website styled using Tailwind CSS.',
        imageSrc: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        imageAlt: '03-react-messenger-clone',
        href: 'https://github.com/ayush-sys/next-portfolio-site',
        live: '/'
    }
]


const certifications = [
    {
        key: '1',
        name: 'Postman Student Expert',
        link: 'https://api.badgr.io/public/assertions/ICXZP7mUQLqTmfZnwoBgtQ?identity__email=ayushmp7%40gmail.com',
        duration: 'April 2022 - present'
    },
    {
        key: '2',
        name: 'MySQL - Hackerrank',
        link: 'https://www.hackerrank.com/certificates/76ab7cba535c',
        duration: 'March 2022 - present'
    },
    {
        key: '3',
        name: 'Web Development',
        link: 'https://www.udemy.com/certificate/UC-330fadda-adf6-4107-8617-a072106adafd/',
        duration: 'April 2021 - present'
    },
    {
        key: '4',
        name: 'Hackerrank Java',
        link: 'https://www.hackerrank.com/certificates/11c8a539355e',
        duration: 'May 2021 - present'
    },
    {
        key: '5',
        name: 'Hackerrank Python',
        link: 'https://www.hackerrank.com/certificates/962c3d33ba42',
        duration: 'May 2021 - present'
    },
    {
        key: '6',
        name: 'AI Foundational course',
        link: 'https://drive.google.com/file/d/1vpcC8jGLsG9XgJudG0wQr7SP2Fg7c2rc/view?usp=sharing',
        duration: 'July 2021 - present'
    }
]



const tools = [
    html, css3, js, java, nodejs, react, nextjs, materialui, bootstrap, tailwindcss, mysql,
    python, flask, pandas, seaborn, sklearn, powerbi, git, github, postman, firebase, heroku, vercel, digitalocean
]


const experience = [
    {
        key: '1',
        name: 'Samsung India',
        title: 'Prism Intern',
        year: 'June 2021 - Dec 2021',
        description: [
            'I helped my team analyze various log data generated by the system using python to draw some insights.',
            'I worked on improving the accuracy of the machine learning algorithm.',
            'I developed a simple front-end website for our mentors to visualize all the insights weve drawn using the machine learning algorithm.'
        ],
        image: 'https://brandlogos.net/wp-content/uploads/2013/05/samsung-group-vector-logo.png',
    },
    {
        key: '2',
        name: 'Highradius corporation',
        title: 'Intern',
        year: 'Jan 2022 - Oct 2022',
        description: [
            'To analyze invoice data of various organizations',
            'Developed an ML algorithm that can efficiently predict the final date of payment',
            'Developed an Invoice management app to perform crud operations and predict the final date of payment',
            'Worked with company internal tools and services to automate the process'

        ],
        image: 'https://media.licdn.com/dms/image/C4D0BAQH1OHg_ZLVr2w/company-logo_200_200/0/1641362177933?e=1686787200&v=beta&t=2vh5oX5JAOFpNjP-ShtLov2iqRn459vJz5NW66J_P64',
    },
]


export { skills, projects, certifications, tools, experience };