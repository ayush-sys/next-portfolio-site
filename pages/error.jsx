import Head from 'next/head';
import { HiArrowNarrowLeft } from 'react-icons/hi';
import { FaLinkedin } from 'react-icons/fa';


export default function Home() {
    return (
        <div>
            <Head>
                <title>404 Error</title>
                <link rel="icon" href="/developer.png" />
                <script src="https://cdnjs.cloudflare.com/ajax/libs/alpinejs/2.3.0/alpine-ie11.js" integrity="sha512-6m6AtgVSg7JzStQBuIpqoVuGPVSAK5Sp/ti6ySu6AjRDa1pX8mIl1TwP9QmKXU+4Mhq/73SzOk6mbNvyj9MPzQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/alpinejs/2.3.0/alpine-ie11.min.js" integrity="sha512-Atu8sttM7mNNMon28+GHxLdz4Xo2APm1WVHwiLW9gW4bmHpHc/E2IbXrj98SmefTmbqbUTOztKl5PDPiu0LD/A==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/alpinejs/2.3.0/alpine.js" integrity="sha512-nIwdJlD5/vHj23CbO2iHCXtsqzdTTx3e3uAmpTm4x2Y8xCIFyWu4cSIV8GaGe2UNVq86/1h9EgUZy7tn243qdA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
            </Head>

            <main className='font-body max-w-7xl mx-auto px-4 sm:px-6' >
                <div className="container min-h-screen px-6 py-12 mx-auto md:flex md:items-center md:gap-12">
                    <div className="wf-ull md:w-1/2">
                        <p className="text-md font-bold tracking-wide text-blue-600 font-head">404 error</p>
                        <h1 className="mt-3 text-2xl font-semibold text-gray-700 md:text-3xl">Page not found</h1>
                        <p className="mt-4 text-gray-500 font-normal">Sorry, the page you are looking for doesn't exist. Meanwhile, here are some other link that you can visit. &#128522;</p>

                        <div className="flex items-center mt-6 gap-x-3">
                            <a className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-600 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto hover:bg-gray-100" href="/">
                                <HiArrowNarrowLeft className='w-auto h-4 lg:h-6'/>
                                <span>Go back</span>
                            </a>

                            <a className="flex flex-row justify-center items-center w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto hover:bg-blue-600" href="https://www.linkedin.com/in/ayush-pattanayak-32225b202/">
                                <FaLinkedin className='mx-1 md:mx-2 w-auto h-4 lg:h-6'/>
                                <span>LinkedIn</span>
                            </a>
                        </div>
                    </div>

                    <div className="relative w-full mt-8 md:block md:w-1/2 md:mt-0">
                        <img className=" w-full lg:h-[32rem] h-80 md:h-96 rounded-lg object-cover" src="https://source.unsplash.com/random/?abstract&architecture&nature&mountains&cars&ocean" alt="random-pics"/>
                        <div className='mx-1 px-2 mt-2 md:mt-4 flex flex-row items-start justify-start md:justify-end text-base font-light text-gray-400 tracking-wide'>Source :&nbsp;
                        <a className="hover:text-gray-500" href="https://unsplash.com/">Unsplash</a>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
