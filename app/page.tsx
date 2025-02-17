// pages/index.tsx
import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '@/components/Header/Header'
import InfoSection from '@/components/InfoSection/Infosection'
import { ToastContainer } from 'react-toastify'
import ContactForm from '@/components/ContactForm/ContactForm'
import Reviews from '@/components/Reviews/Reviews'

const Home: NextPage = () => {
  const currentYear = new Date().getFullYear()

  return (
   
    <div className="flex min-h-screen flex-col items-center justify-center py-2 bg-gray-100">
       <ToastContainer />
      <Head>
        <title>Phrehab</title>
        <meta name="description" content="Phrehab - A mobile responsive site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="flex w-full flex-1 flex-col items-center justify-center px-6 text-center">
        <h1 className="text-6xl font-bold mt-6">
          Welcome to <a className="text-blue-600" href="#">Phrehab</a>
        </h1>
     

        <InfoSection />
        <ContactForm  />
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <p className="text-gray-600">
          © {currentYear} PHREHAB. All rights reserved. Made by Martin Lowe
        </p>
      </footer>
    </div>
  )
}

export default Home

