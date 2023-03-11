import Image from 'next/image';
import profilePic from '../public/images/pic-1.jpeg';
import { FaGithub, FaGoogleDrive } from 'react-icons/fa';

const About = () => {
  return (
    <div className="container lg:flex px-6 py-10 mx-auto font-body">
      <div className="flex items-center justify-center w-full px-6 py-8 lg:h-[32rem] lg:w-1/2">
        <div className="max-w-xl">
          <h2 className="text-3xl font-semibold text-gray-700 lg:text-5xl font-head">Hi, I'm <span className="text-blue-600">Ayush &#128075; </span></h2>

          <p className="mt-4 text-sm text-gray-600 lg:text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis commodi cum cupiditate ducimus, fugit harum id necessitatibus odio quam quasi, quibusdam rem tempora voluptates.</p>

          <div className="flex flex-col mt-6 space-y-3 lg:space-y-0 lg:flex-row">
            <a href="#" className="px-5 py-2 text-sm font-medium tracking-wider text-center text-white transition-colors duration-300 transform bg-gray-900 rounded-md hover:bg-gray-700 flex flex-row justify-center items-center">
              <FaGithub className='mx-1 w-auto sm:h-5 h-3' />Repository
            </a>
            <a href="#" className="px-5 py-2 text-sm font-medium tracking-wider text-center text-gray-700 hover:text-gray-800 transition-colors duration-300 transform bg-gray-300 rounded-md lg:mx-4 hover:bg-gray-400 flex flex-row justify-center items-center">
              <FaGoogleDrive className='mx-1 w-auto sm:h-5 h-3' /> Resume
            </a>
          </div>
        </div>
      </div>

      <div className="w-full h-48 lg:w-1/2 lg:h-auto hidden lg:block">
        <Image src={profilePic} className='h-auto w-auto bg-cover opacity-90 rounded-lg' />
      </div>
    </div>
  )
}

export default About;
