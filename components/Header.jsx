import React, { useState } from 'react';
import { FaTerminal } from 'react-icons/fa';
import { CgMenuRight, CgClose } from 'react-icons/cg';

const Header = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative shadow-sm font-head shadow-slate-50 px-6 sm:px-10">
      <div className="px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
        <div className="flex items-center justify-between">
          <a href="/">
            <FaTerminal className='w-auto h-8 sm:h-10 text-gray-800' />
          </a>

          {/* <!-- Mobile menu button --> */}
          <div className="flex md:hidden">
            <button type="button" className="text-gray-700 focus:outline-none focus:text-gray-900" aria-label="toggle menu" onClick={() => { setIsOpen(!isOpen) }}>
              {isOpen ? <CgClose className='w-auto h-8' /> : <CgMenuRight className='w-auto h-8' />}
            </button>
          </div>
        </div>

        {/* <!-- Mobile Menu open: "block", Menu closed: "hidden" --> */}
        <div className={` ${isOpen ? 'translate-x-0 opacity-100' : 'opacity-0 -translate-x-full'} header-nav-btn md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center`}>
          <div className="flex flex-col md:flex-row md:mx-6">
            <a className={` ${isOpen ? 'text-gray-700 hover:text-blue-500' : 'text-gray-100 hover:text-white'} nav-opt`} href="#about">About</a>
            <a className={` ${isOpen ? 'text-gray-700 hover:text-blue-500' : 'text-gray-100 hover:text-white'} nav-opt`} href="#projects">Projects</a>
            <a className={` ${isOpen ? 'text-gray-700 hover:text-blue-500' : 'text-gray-100 hover:text-white'} nav-opt`} href="#contact">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  )
}


export default Header;