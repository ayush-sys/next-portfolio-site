import Link from 'next/link'
import React from 'react'

function FooterIcon({ link, Icon }) {
  return (
    <div className="py-3 px-3 hover:bg-blue-600 group transition-colors duration-100 rounded-full">
      <Link href={link}>
        <a className="text-gray-500 transition-colors duration-100 group-hover:text-white">
          <Icon className="text-xl transition-colors duration-100"/>
        </a>
      </Link>
    </div>
  )
}

export default FooterIcon
