import Link from 'next/link'
import React from 'react'

function FooterIcon({ link, Icon }) {
  return (
    <div>
      <Link href={link}>
        <a className="text-gray-500 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
          <Icon className="text-xl transition-colors duration-200 hover:text-gray-800 dark:hover:text-white" />
        </a>
      </Link>
    </div>
  )
}

export default FooterIcon
