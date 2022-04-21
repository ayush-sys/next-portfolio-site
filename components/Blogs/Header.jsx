import { Popover } from '@headlessui/react';
import {FaRss, FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';


export default function Header() {
  return (
    <Popover className="relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 font-head">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <div className='flex flex-row justify-center text-center items-center'>
            <a href="/" className='bg-blue-600 mx-2 px-4 py-2 rounded-lg text-gray-100'>
              <span className="sr-only">Workflow</span>
              <FaRss className='h-6 sm:h-8 w-auto'/>
            </a>
            <a className='text-blue-500 mx-2 text-xl tracking-wider font-medium'>
                Quick Read
            </a>
            </div>
          </div>

          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <a
              href="https://github.com/ayush-sys"
              className="ml-3 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
            >
              <FaGithub className='h-2 w-auto sm:h-4'/>
            </a>
            <a
              href="https://www.linkedin.com/in/ayush-pattanayak-32225b202/"
              className="ml-3 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
            >
              <FaLinkedin className='h-2 w-auto sm:h-4'/>
            </a>
            <a
              href="https://twitter.com/ayushmp7"
              className="ml-3 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
            >
              <FaTwitter className='h-2 w-auto sm:h-4'/>
            </a>
          </div>
        </div>
      </div>
    </Popover>
  )
}
