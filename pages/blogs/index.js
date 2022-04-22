import React from 'react'
import Head from 'next/head';
import Header from "../../components/Blogs/Header";
import Footer from "../../components/Blogs/Footer";
import Articles from '../../components/Blogs/Articles';


// data will be fetched here from firebase firestore


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
      <main>
      <div className="py-6 bg-white" id="articles-section">
        <Articles/>
        <Articles/>
        <Articles/>
        <Articles/>
        <Articles/>
        <Articles/>
      </div>
      </main>

    {/* Footer Section */}
    <Footer />
    </div>
  )
}