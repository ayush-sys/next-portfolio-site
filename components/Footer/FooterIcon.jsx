import Link from 'next/link'
import React from 'react'

function FooterIcon({ link, Icon }) {
  return (
    <Link legacyBehavior href={link}>
      <a className="text-gray-100 hover:text-gray-200 py-3 px-3 hover:bg-blue-600 transition-colors duration-100 rounded-full mr-2">
        <Icon className="text-xl transition-colors duration-100" />
      </a>
    </Link>
  )
}

export default FooterIcon
