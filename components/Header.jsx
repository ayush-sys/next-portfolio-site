import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { MenuIcon } from '@heroicons/react/outline';
import { HiOutlineAcademicCap } from "react-icons/hi";
import {FaTerminal, FaGithub, FaTwitter, FaLinkedin, FaTools, FaHtml5, FaListUl} from 'react-icons/fa';


const navItems = [
  {
    name: 'Education',
    href: '#Education',
    icon: HiOutlineAcademicCap
  },
  {
    name: 'Skills',
    href: '#Skills',
    icon: FaTools
  },
  {
    name: 'Projects',
    href: '#Projects',
    icon: FaHtml5
  },
  {
    name: 'Expereince',
    href: '#Expereince',
    icon: FaListUl
  },
]


const socialItems = [
  { 
    name: 'GitHub',
    href: 'https://github.com/ayush-sys', 
    icon: FaGithub 
  },
  { 
    name: 'Linked In', 
    href: 'https://www.linkedin.com/in/ayush-pattanayak-32225b202/', 
    icon: FaLinkedin 
  },
  { 
    name: 'Twitter', 
    href: 'https://twitter.com/ayushmp7', 
    icon: FaTwitter 
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export default function Header() {
  return (
    <Popover className="relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="/">
              <span className="sr-only">Workflow</span>
              <FaTerminal className="h-8 w-auto sm:h-10"/>
            </a>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-600">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden md:flex space-x-10">
            <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
              Education
            </a>
            <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
              Skills
            </a>
            <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
              Projects
            </a>
            <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
            Expereince
            </a>
          </Popover.Group>

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

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel focus className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
            <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
              {navItems.map((item) => (
                <a key={item.name} href={item.href} className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                  <item.icon className="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true" />
                    <div className="ml-4">
                      <p className="text-base font-medium text-gray-900">{item.name}</p>
                    </div>
                </a>
              ))}
            </div>
            <div className="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
              {socialItems.map((item) => (
                <div key={item.name} className="flow-root">
                  <a href={item.href} className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100">
                    <item.icon className="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" />
                    <span className="ml-3">{item.name}</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}
