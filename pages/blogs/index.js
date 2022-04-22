import React from 'react'
import Head from 'next/head';
import Header from "../../components/Blogs/Header";
import Footer from "../../components/Blogs/Footer";
import Articles from '../../components/Blogs/Articles';


// data will be fetched here from firebase firestore

const blogData = [
  {
    id:1,
    date: '22-04-22', 
    tag: 'development', 
    title: 'Next JS & tailwind CSS, the full stack frontend framework!', 
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!', 
    link: '/blogs/post/Next JS'
  },
  {
    id:2,
    date: '22-04-22', 
    tag: 'development', 
    title: 'Developing apps in react', 
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!', 
    link: '/blogs/post/React Web App'
  },
  {
    id:3,
    date: '22-04-22', 
    tag: 'development', 
    title: 'MUI v5.0', 
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!', 
    link: '/blogs/post/MUI'
  },
  {
    id:4,
    date: '22-04-22', 
    tag: 'development', 
    title: 'Samsung India', 
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!', 
    link: '/blogs/post/SI'
  },
  {
    id:5,
    date: '22-04-22', 
    tag: 'development', 
    title: 'YouTube', 
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!', 
    link: '/blogs/post/YT'
  }
]



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
        {blogData.map(blog => (
          <Articles key={blog.id} date={blog.date} desc={blog.desc} title={blog.title} tag={blog.tag} link={blog.link}/>
        ))}
      </div>
      </main>

    {/* Footer Section */}
    <Footer />
    </div>
  )
}