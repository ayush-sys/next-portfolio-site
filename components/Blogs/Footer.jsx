import Link from 'next/link'
import React from 'react'
import { FaTwitter, FaLinkedinIn } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'
import FooterIcon from '../FooterIcon'


export default function Footer() {
  return (
    <footer className="w-full bg-white py-4">
      <div className="mx-auto max-w-screen-xl px-4">
        <div className="mx-auto flex max-w-xs items-center pt-4 justify-evenly">
          <FooterIcon link="https://www.linkedin.com/in/ayush-pattanayak-32225b202/" Icon={FaLinkedinIn}/>
          <FooterIcon link="https://twitter.com/ayushmp7" Icon={FaTwitter} />
          <FooterIcon link="mailto:ayushmp7@gmail.com" Icon={HiMail}/>
        </div>

        <a className="footer-text text-gray-600">
          Developed by
          <Link href="/">
              <a className="hover:text-blue-600 mx-1">
                Ayush Pattanayak
              </a>
          </Link>
        </a>
      </div>
    </footer>
  )
}
