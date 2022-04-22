import Link from 'next/link'
import React from 'react'
import { FiTerminal } from 'react-icons/fi'


export default function BlogsInfo() {
  return (
    <div
      className="z-20 mx-auto w-full bg-white py-12 px-4 text-center sm:px-6 lg:px-8"
      id="blogs"
    >
      <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
        <span className="block">Want to checkout some blogs ?</span>
        <span className="block text-blue-500">It's today or never.</span>
      </h2>
      <div className="lg:mt-0 lg:flex-shrink-0">
        <div className="mt-12 inline-flex rounded-md shadow">
          <Link href="/blogs">
            <a>
              <button type="button" className="blog-chk-btn">
                Checkout
                <FiTerminal className="mx-3 text-2xl" />
              </button>
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}
