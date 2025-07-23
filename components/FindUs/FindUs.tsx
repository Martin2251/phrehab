"use client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const FindUs = () => {
  return (
 <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6 lg:space-y-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
              About the Clinic
            </h2>
            
            <div className="space-y-4 lg:space-y-6">
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
                The clinic is based in GymNation, making it the perfect 
                calm and quiet setting for your appointment. 
              </p>
              
              <div className="space-y-3 lg:space-y-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                    Address:
                  </h3>
                  <p className="text-base sm:text-lg text-gray-600">
                   Gymnation 26 Druid St, London SE1 2EY
                  </p>
                  <p className="text-base sm:text-lg text-gray-600">
                    SE1 2EY
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                    Nearest Station:
                  </h3>
                  <p className="text-base sm:text-lg text-gray-600">
                   London Bridge
                  </p>
                </div>
              </div>
              
              <div className="pt-4 lg:pt-6">
                {/* <Link 
                  href="/book-appointment"
                  className="inline-block bg-black text-white px-8 py-3 sm:px-10 sm:py-4 rounded-full text-base sm:text-lg font-medium hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform"
                >
                  Book Now
                </Link> */}
              </div>
            </div>
          </div>
          
          {/* Right Column - Images */}
          <div className="space-y-4 lg:space-y-6">
            {/* Top Image - Exterior */}
            <div className="relative h-48 sm:h-56 lg:h-64 xl:h-72 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="" // You'll need to add this image
                alt=""
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

        <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4442.139825158339!2d-0.08459536130298116!3d51.504330483466575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876039c80dde83d%3A0xb260ae9d8c72d7b!2sGym%20Nation%20%7C%20London%20Bridge!5e0!3m2!1sen!2suk!4v1753253507715!5m2!1sen!2suk" 
        width="600" 
        height="450" 
        style={{ border: 0 }}
        allowFullScreen 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
      />
            
            {/* Bottom Image - Interior */}
            {/* <div className="relative h-48 sm:h-56 lg:h-64 xl:h-72 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/clinic-interior.jpg" // You'll need to add this image
                alt=""
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FindUs
