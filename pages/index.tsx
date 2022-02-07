import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import About from '../components/About';
import Education from '../components/Education';
import Expereince from '../components/Expereince';
import Skills from '../components/Skills';
import Projects from '../components/Projects';



export default function Home() {
  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6'>
      <Head>
        <title>Portfolio</title>
        <link rel="icon" href="/terminal-solid.svg" />
      </Head>

    {/* Header Section */}
    <Header/>

    {/* Main Section */}
      <main >
        <About/>
        <Education/>
        <Skills/>
        <Projects/>
        <Expereince/>
      </main>

    {/* Footer Section */}
    <Footer />
    </div>
  )
}
