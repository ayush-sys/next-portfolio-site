import React from 'react';
import FooterForm from './FooterForm';
import FooterIcon from './FooterIcon';
import { FaTwitter, FaGithub, FaLinkedinIn, FaMedium } from 'react-icons/fa';


export default function Footer() {
  return (
    <div className="container py-12 max-w-7xl mx-auto px-4 sm:px-6" id="contact">
      <div className="lg:flex lg:items-center lg:-mx-6">
        <div className="lg:w-1/2 lg:mx-6 flex flex-col justify-start items-start">
          <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl tracking-wide font-head">Contact Me</h1>

          <div className="mt-2">
            <span className="inline-block w-40 h-1 bg-blue-800 rounded-full"></span>
            <span className="inline-block w-2 h-1 ml-1 bg-blue-800 rounded-full"></span>
            <span className="inline-block w-1 h-1 ml-1 bg-blue-800 rounded-full"></span>
          </div>

          <h1 className="text-2xl font-semibold text-gray-700 lg:text-3xl mt-2 md:mt-4">
            Want to have a chat with me or <br />
            <span className="text-xl lg:text-2xl tracking-wide">discuss a project, I'm in ?</span>
          </h1>
          <div className="mt-6 w-80 md:mt-8">
            <a className="text-lg font-semibold text-gray-700 tracking-wide">Developed by&nbsp;
              <span className='text-blue-700'>Ayush Pattanayak</span>
            </a>
            <div className="flex mt-2 -mx-1.5 ">
              <FooterIcon link="https://medium.com/@ayushmp7" Icon={FaMedium} />
              <FooterIcon link="https://www.linkedin.com/in/ayush-pattanayak-32225b202/" Icon={FaLinkedinIn} />
              <FooterIcon link="https://github.com/ayush-sys" Icon={FaGithub} />
              <FooterIcon link="https://twitter.com/ayushmp7" Icon={FaTwitter} />
            </div>
          </div>
        </div>
        <div className="mt-8 lg:w-1/2 lg:mx-6">
          <FooterForm />
        </div>
      </div>
    </div>
  )
}
