import React from 'react'
import Head from 'next/head';
import { Footer } from "../../components"
import Header from "../../components/Blogs/Header";


export default function index() {
  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6'>
      <Head>
        <title>Blogs</title>
        <link rel="icon" href="/rss.png" />
      </Head>

    {/* Header Section */}
    <Header/>

    {/* Main Section */}
      <main >
       <div>
           <h1>To be developed !!!!!</h1>
       </div>
      </main>

    {/* Footer Section */}
    <Footer />
    </div>
  )
}