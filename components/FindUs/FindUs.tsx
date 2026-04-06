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
             Find Us
            </h2>
            
            <div className="space-y-4 lg:space-y-6">
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
                The clinic is based in Mem's Weightlifting Club, within Arch 25. 
              </p>
              
              <div className="space-y-3 lg:space-y-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                    Address:
                  </h3>
                  <p className="text-base sm:text-lg text-gray-600">
                    Mem's Weightlifting Club, Arch 22 & 25 Bondway, London SW8 1SQ
                  </p>
                  <p className="text-base sm:text-lg text-gray-600">
                    SW8 1SQ
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                    Nearest Station:
                  </h3>
                  <p className="text-base sm:text-lg text-gray-600">
                   Vauxhall
                  </p>
                </div>
              </div>
              
              {/* <div className="pt-4 lg:pt-6">
                <a
                  href="#booking"
                  className="inline-block bg-black text-white px-8 py-3 sm:px-10 sm:py-4 rounded-full text-base sm:text-lg font-medium hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform"
                >
                  Book Now
                </a>
              </div> */}
           
            </div>
          </div>
          
          {/* Right Column - Images */}
          <div className="space-y-4 lg:space-y-6">
    


      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2484.631528505096!2d-0.127790423344455!3d51.483277471807845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760530c9e8d16b%3A0xaac686a0a25c0bc!2sMem&#39;s%20Weightlifting%20Club!5e0!3m2!1sen!2suk!4v1775306238072!5m2!1sen!2suk" 
        width="600" 
        height="450" 
        style={{ border: 0 }}
        allowFullScreen 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
      />
       
          
          </div>
        </div>
      </div>
    </section>
  )
}

export default FindUs
