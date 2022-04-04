import React from 'react'
import {
  FaTwitter,
  FaGithub,
  FaLinkedinIn,
  FaMedium,
  FaGoogleDrive,
} from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'
import FooterIcon from './FooterIcon'

export default function Footer() {
  return (
    <footer className="w-full bg-white py-4">
      <div className="mx-auto max-w-screen-xl px-4">
        <div className="mx-auto flex max-w-xs items-center justify-between pt-4">
          <FooterIcon link="https://medium.com/@ayushmp7" Icon={FaMedium} />
          <FooterIcon link="https://www.linkedin.com/in/ayush-pattanayak-32225b202/" Icon={FaLinkedinIn}/>
          <FooterIcon link="https://github.com/ayush-sys" Icon={FaGithub} />
          <FooterIcon link="https://twitter.com/ayushmp7" Icon={FaTwitter} />
          <FooterIcon link="mailto:ayushmp7@gmail.com" Icon={HiMail} />
          <FooterIcon link="https://drive.google.com/file/d/1HbsbjLnTPLZmtz4hvAjuaSTnQ2I2IAhZ/view?usp=sharing" Icon={FaGoogleDrive}/>
        </div>
        <a className="footer-text">
          Developed by Ayush Pattanayak
        </a>
      </div>
    </footer>
  )
}
