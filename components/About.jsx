import Image from 'next/image';
import profilePic from '../public/images/pic-1.jpeg';
import { FaGithub, FaGoogleDrive } from 'react-icons/fa';

const About = () => {
  return (
    <div className="container lg:flex px-6 py-10 mx-auto font-body">
      <div className="flex items-center justify-center w-full px-6 py-8 lg:h-[32rem] lg:w-1/2">
        <div className="max-w-xl">
          <h2 className="text-3xl font-semibold text-gray-800 lg:text-5xl font-head">Hi, I'm <span className="text-blue-700">Ayush &#128075; </span></h2>

          <p className="mt-4 text-sm text-gray-600 lg:text-base tracking-wide">
            A student with good problem-solving skills and able to effectively self-manage during independent
            projects, as well as collaborate as part of a productive team.
          </p>

          <div className="flex flex-col mt-6 space-y-3 lg:space-y-0 lg:flex-row lg:space-x-4">
            <a href="https://github.com/ayush-sys" className="about-link-btn text-white bg-gray-900 hover:bg-gray-800">
              <FaGithub className='mx-1 w-auto sm:h-5 h-3' />Repository
            </a>
            <a href="/error" className="about-link-btn bg-gray-300 hover:bg-gray-200 text-gray-700">
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
