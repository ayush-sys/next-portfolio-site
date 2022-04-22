import { useRouter } from 'next/router'
import Image from 'next/image'
import Head from 'next/head';
import Header from "../../../components/Blogs/Header";
import Footer from "../../../components/Blogs/Footer";



export default function Post() {
  const router = useRouter()
  const { pid } = router.query

  return (
    <>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Head>
          <title>{pid}</title>
          <link rel="icon" href="/rss.png" />
        </Head>

        {/* Header Section */}
        <Header />

        {/* Main Section */}
        <main>
          <div className="bg-white py-6" id="articles-section">
            <div className="mx-auto max-w-2xl overflow-hidden rounded-lg bg-white">
              <Image
                className="object-cover"
                height={320}
                width={720}
                src="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                alt="Article"
              />

              <div className="p-6">
                <div>
                  <span className="text-md font-medium uppercase text-blue-600 dark:text-blue-400 tracking-wider">
                    Product
                  </span>
                  <a
                    href="#"
                    className="mt-2 block transform text-3xl font-semibold tracking-wide text-gray-800 transition-colors duration-200 hover:text-gray-600 hover:underline dark:text-white"
                  >
                    I Built A Successful Blog In One Year
                  </a>
                  <p className="mt-2 text-lg text-gray-700 ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Molestie parturient et sem ipsum volutpat vel. Natoque sem
                    et aliquam mauris egestas quam volutpat viverra. In pretium
                    nec senectus erat. Et malesuada lobortis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Footer Section */}
        <Footer />
      </div>
    </>
  )
}
