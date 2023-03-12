import Link from 'next/link'
import React from 'react'

function FooterIcon({ link, Icon }) {
  return (
    <Link href={link}>
      <a className="text-gray-500 hover:text-white py-3 px-3 hover:bg-blue-500 transition-colors duration-100 rounded-full mr-2">
        <Icon className="text-xl transition-colors duration-100" />
      </a>
    </Link>
  )
}

export default FooterIcon
