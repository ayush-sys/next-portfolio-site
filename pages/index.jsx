import Head from 'next/head';
import { About, Header, Footer, Experience, Skills, Tools, Projects, Certifications } from "../components";


export default function Home() {
  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6'>
      <Head>
        <title>Portfolio</title>
        <link rel="icon" href="/developer.png" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/alpinejs/2.3.0/alpine-ie11.js" integrity="sha512-6m6AtgVSg7JzStQBuIpqoVuGPVSAK5Sp/ti6ySu6AjRDa1pX8mIl1TwP9QmKXU+4Mhq/73SzOk6mbNvyj9MPzQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/alpinejs/2.3.0/alpine-ie11.min.js" integrity="sha512-Atu8sttM7mNNMon28+GHxLdz4Xo2APm1WVHwiLW9gW4bmHpHc/E2IbXrj98SmefTmbqbUTOztKl5PDPiu0LD/A==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/alpinejs/2.3.0/alpine.js" integrity="sha512-nIwdJlD5/vHj23CbO2iHCXtsqzdTTx3e3uAmpTm4x2Y8xCIFyWu4cSIV8GaGe2UNVq86/1h9EgUZy7tn243qdA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
      </Head>

      {/* Header Section */}
      <Header />

      {/* Main Section */}
      <main >
        <About />
        <Skills />
        <Tools />
        <Projects />
        <Experience />
        <Certifications />
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  )
}
