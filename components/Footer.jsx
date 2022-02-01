import React from 'react';
import { FaInstagram, FaTwitter, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';


export default function Footer() {
  return (
  
<footer className="bg-white w-full py-4">
    <div className="max-w-screen-xl mx-auto px-4">
        <div className="pt-4 flex max-w-xs mx-auto items-center justify-between">
            <a href="#" class="text-gray-500 hover:text-gray-800 dark:hover:text-white transition-colors duration-200">
              <FaInstagram className='text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200'/>
            </a>
            <a href="#" class="text-gray-500 hover:text-gray-800 dark:hover:text-white transition-colors duration-200">
              <FaLinkedinIn className='text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200'/>
            </a>
            <a href="#" class="text-gray-500 hover:text-gray-800 dark:hover:text-white transition-colors duration-200">
              <FaGithub className='text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200'/>
            </a>
            <a href="#" class="text-gray-500 hover:text-gray-800 dark:hover:text-white transition-colors duration-200">
              <FaTwitter className='text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200'/>
            </a>
            <a href="#" class="text-gray-500 hover:text-gray-800 dark:hover:text-white transition-colors duration-200">
              <HiMail className='text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200'/>
            </a>
        </div>
        <a class="text-center text-gray-400 hover:text-gray-600 pt-8 sm:pt-10 flex items-center justify-center font-semibold transition-colors duration-200">
          Developed by Ayush Pattanayak
        </a>
    </div>
</footer>
)
}
