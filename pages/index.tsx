import Head from 'next/head';
import { FiTerminal } from 'react-icons/fi';


export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Portfolio</title>
        <link rel="icon" href="/terminal-solid.svg" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center space-y-4">
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

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <p className="flex items-center justify-center font-semibold text-gray-500 hover:text-gray-700 space-x-2">
          Developed by {'  '}
          <FiTerminal />
          <a className="">
            Ayush Pattanyak.
          </a>
        </p>
      </footer>
    </div>
  )
}
