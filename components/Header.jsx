import React, { useState } from 'react';
import { FaTerminal } from 'react-icons/fa';
import { CgMenuRight, CgClose } from 'react-icons/cg';

const Header = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative shadow-sm font-head shadow-slate-50">
      <div className="px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
        <div className="flex items-center justify-between">
          <a href="/">
            <FaTerminal className='w-auto h-8 sm:h-10' />
          </a>

          {/* <!-- Mobile menu button --> */}
          <div className="flex md:hidden">
            <button type="button" className="text-gray-700 focus:outline-none focus:text-gray-900" aria-label="toggle menu" onClick={() => { setIsOpen(!isOpen) }}>
              {isOpen ? <CgClose className='w-auto h-8' /> : <CgMenuRight className='w-auto h-8' />}
            </button>
          </div>
        </div>

        {/* <!-- Mobile Menu open: "block", Menu closed: "hidden" --> */}
        <div className={` ${isOpen ? 'translate-x-0 opacity-100' : 'opacity-0 -translate-x-full'} absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-gray-100 md:mt-0 md:p-0 md:top-0 
         md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center rounded-lg`}>
          <div className="flex flex-col md:flex-row md:mx-6">
            <a className="my-2 text-gray-700 transition-colors duration-300 transform hover:text-blue-500 md:mx-4 md:my-0" href="#about">About</a>
            <a className="my-2 text-gray-700 transition-colors duration-300 transform hover:text-blue-500 md:mx-4 md:my-0" href="#projects">Projects</a>
            <a className="my-2 text-gray-700 transition-colors duration-300 transform hover:text-blue-500 md:mx-4 md:my-0" href="#contact">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  )
}


export default Header;