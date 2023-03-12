import React from 'react'
import FooterForm from './FooterForm';
import FooterIcon from './FooterIcon';
import { FaTwitter, FaGithub, FaLinkedinIn, FaMedium } from 'react-icons/fa'

export default function Footer() {
  return (
    <div id="contact">
      <div className="container px-6 py-12 mx-auto">
        <div className="lg:flex lg:items-center lg:-mx-6">
          <div className="lg:w-1/2 lg:mx-6">
            <h1 className="text-2xl font-semibold text-gray-800 lg:text-3xl">
              I hope you like my website<br/> 
              <span className='text-xl text-gray-700'>Want to have a chat with me or <br/> discuss a project, I'm in ?</span>
            </h1>

            <div className="mt-6 w-80 md:mt-8">
              <h3 className="text-gray-600 font-medium tracking-wide">Check out me on social media !&#9996;</h3>

              <div className="flex mt-2 -mx-1.5 ">
                <FooterIcon link="https://medium.com/@ayushmp7" Icon={FaMedium} />
                <FooterIcon link="https://www.linkedin.com/in/ayush-pattanayak-32225b202/" Icon={FaLinkedinIn} />
                <FooterIcon link="https://github.com/ayush-sys" Icon={FaGithub} />
                <FooterIcon link="https://twitter.com/ayushmp7" Icon={FaTwitter} />

              </div>
              <div className='mt-2 -mx-1.5 w-80'>
                <a className="text-lg font-semibold text-gray-600 tracking-wide">Developed by&nbsp;<span className='text-blue-600'>Ayush Pattanayak</span></a>
              </div>
            </div>
          </div>

          <div className="mt-8 lg:w-1/2 lg:mx-6">
            <FooterForm />
          </div>
        </div>
      </div>
    </div>
  )
}
