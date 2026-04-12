// pages/index.tsx
import type { NextPage } from 'next'
import Head from 'next/head'


import { ToastContainer } from 'react-toastify'


import CalendlyWidget from '@/components/Calendy/Widget'
import Hero from '@/components/Hero/Hero'
import FindUs from '@/components/FindUs/FindUs'
import ImageSection from '@/components/ImageSection/ImageSection'
import About from '@/components/ImageSection/ImageSection'
import ContactForm from '@/components/Contact/ContactForm'
import ContactCard from '@/components/ContactUs'
import ContactSection from '@/components/ContactUs'
import Footer from '@/components/Footer'
import Booking from '@/components/Booking'

const Home: NextPage = () => {
  const currentYear = new Date().getFullYear()

  return (
   
    <div className="">
       <ToastContainer />
      <Head>
        <title>Phrehab</title>
        <meta name="description" content="Phrehab - Physio at London Bridge" />
        <link rel="icon" href="/favicon.ico" />
           <meta 
          httpEquiv="Permissions-Policy" 
          content="payment=*, microphone=*, camera=*" 
        />
      </Head>



      <main className="">
        <Hero  />
        <div id="about">
          <About />
          </div>
          

          <div id="booking">
       <Booking  />
          </div>
          <div id="findus">
        <FindUs  />
        </div>
        {/* <ContactForm  /> */}


     


        
       
        

      </main>
      <Footer  />

      {/* <footer className="flex h-24 w-full items-center justify-center border-t">
        <p className="text-gray-600">
          © {currentYear} PHREHAB. All rights reserved. Made by Martin Lowe
        </p>
      </footer> */}
    </div>
  )
}

export default Home

