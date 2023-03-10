import Image from 'next/image'
import Link from 'next/link'
import { FaGoogleDrive } from 'react-icons/fa'
import profilePic from '../public/images/pic-1.jpeg'


export default function About() {
  return (
    <div
      className="my-4 items-center space-y-4 py-4 text-center font-head"
      id="about"
    >
      <div className="my-4 flex flex-col items-center justify-center py-2">
        <Image src={profilePic} height={360} width={360} />
      </div>
      <p className="text-6xl text-gray-500">
        Hello, I'm Ayush <span className="text-blue-500">Pattanayak</span>
      </p>
      <div>
        <p className="mt-8 text-2xl italic text-gray-500 hover:text-gray-700 md:mt-6 tracking-wider">
          CSE'23 | MERN Developer | ML enthusiast
        </p>
        <p className="mt-6 font-body text-xl text-gray-500 md:mt-4">
          A student with good problem solving skills and able to effectively
          self manage during independent projects as well as collaborate as
          part of a team. I'm competent in my skills in Java, React & NodeJS. I
          want to create full stack applications that can solve real world
          problems using AI & Data Science.
        </p>
      </div>
      <div>
        <Link href='https://drive.google.com/file/d/10Wh6WC07yX1b18TuXo2aD4w6XOgGT9n8/view?usp=sharing'>
        <a>
        <button className='inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 tracking-wider'>
          <FaGoogleDrive className='mx-2'/>
          Download Resume
        </button>
        </a>
        </Link>
      </div>
    </div>
  )
}
