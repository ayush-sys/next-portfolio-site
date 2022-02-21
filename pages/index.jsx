import Head from 'next/head';
import {About, Header, Footer, Education, Expereince, Skills, Projects, Certifications} from "../components";


export default function Home() {
  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6'>
      <Head>
        <title>Portfolio</title>
        <link rel="icon" href="/developer.png" />
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
        <Certifications/>
      </main>

    {/* Footer Section */}
    <Footer />
    </div>
  )
}
