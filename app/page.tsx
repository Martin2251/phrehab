// pages/index.tsx
import type { NextPage } from 'next'
import Head from 'next/head'


import { ToastContainer } from 'react-toastify'


import CalendlyWidget from '@/components/Calendy/Widget'
import Hero from '@/components/Hero/Hero'
import FindUs from '@/components/FindUs/FindUs'

const Home: NextPage = () => {
  const currentYear = new Date().getFullYear()

  return (
   
    <div className="">
       <ToastContainer />
      <Head>
        <title>Phrehab</title>
        <meta name="description" content="Phrehab - A mobile responsive site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>



      <main className="">
        <Hero  />
        <FindUs  />


     


        
          <CalendlyWidget 
            url="https://calendly.com/phsportsrehab/1-hour-appointment" 
            height={630}
          />

      </main>

      {/* <footer className="flex h-24 w-full items-center justify-center border-t">
        <p className="text-gray-600">
          © {currentYear} PHREHAB. All rights reserved. Made by Martin Lowe
        </p>
      </footer> */}
    </div>
  )
}

export default Home

