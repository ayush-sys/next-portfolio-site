import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';


export default function Home() {
  return (
    <div>
      <Head>
        <title>Portfolio</title>
        <link rel="icon" href="/terminal-solid.svg" />
      </Head>

    {/* Header Section */}
    <Header/>

    {/* Main Section */}
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center space-y-4 my-8 py-8">
        <h1 className="text-6xl font-bold">
          Welcome to my {' '}
          <a className="text-blue-600" href="">
            Portfolio
          </a>
        </h1>
        <div>
          <h1 className="text-4xl">Developed using{' '}<a className="text-blue-500 hover:text-blue-600" href="http://nextjs.org/">Next JS</a></h1>
          <h2 className="text-2xl">Styled by{' '}<a className="text-blue-500 hover:text-blue-600" href="https://tailwindcss.com/">Tailwind CSS</a></h2>
        </div>
      </main>

    {/* Footer Section */}
    <Footer />
    </div>
  )
}
