import Image from 'next/image'
import React from 'react'
import Link from 'next/link'


export default function Articles({ date, tag, title, desc, link }) {
  return (
    <>
    <div className="my-8 max-w-2xl px-8 py-4 mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800">
        <div className="flex items-center justify-between">
            <span className="text-sm font-light text-gray-600 dark:text-gray-400">{date}</span>
            <a className="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-200 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500">{tag}</a>
        </div>

        <div className="mt-2">
            <a className="text-2xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline">{title}</a>
            <p className="mt-2 text-gray-600 dark:text-gray-300">{desc}</p>
        </div>
        
        <div className="flex items-center justify-between mt-4">
            <Link href={link}>
                <a className="text-blue-600 dark:text-blue-400 hover:underline">Read more</a>
            </Link>

            <div className="flex items-center space-x-2">
                <Image className="hidden object-cover mx-4 rounded-full sm:block"
                    src="https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=40&q=80" 
                    width={40}
                    height={40}
                    alt="avatar"/>
                <a className="font-bold text-gray-700 cursor-pointer dark:text-gray-200">Ayush</a>
            </div>
        </div>
    </div>
    </>
  )
}