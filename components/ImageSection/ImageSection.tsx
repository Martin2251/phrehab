import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const About = () => {
  return (
 <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6 lg:space-y-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
              About PHREHAB
            </h2>
            
            <div className="space-y-4 lg:space-y-6">
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus molestias possimus quidem corporis labore ipsum debitis voluptate enim facilis necessitatibus?
              </p>
              
            
              

              
              <div className="pt-4 lg:pt-6">
                <a
                 href="#booking"
                  className="inline-block bg-black text-white px-8 py-3 sm:px-10 sm:py-4 rounded-full text-base sm:text-lg font-medium hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform"
                >
                  Book Now
                </a>
              </div>
            </div>
          </div>
          
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
  {/* Left Image */}
  <div className="relative h-64 sm:h-80 lg:h-96 xl:h-[28rem] rounded-lg overflow-hidden shadow-lg">
    <Image
      src="/images/phimage2.png" 
      alt="physio image"
      fill
      className="object-cover hover:scale-105 transition-transform duration-300"
      sizes="(max-width: 768px) 100vw, 50vw"
        unoptimized={true}
    />
  </div>
  
  {/* Right Image */}
  <div className="relative h-64 sm:h-80 lg:h-96 xl:h-[28rem] rounded-lg overflow-hidden shadow-lg">
    <Image
      src="/images/phimage1.png"
      alt="physio image"
      fill
      className="object-cover hover:scale-105 transition-transform duration-300"
      sizes="(max-width: 768px) 100vw, 50vw"
        unoptimized={true}
    />
  </div>
</div>
       
 

          
        </div>
      </div>
    </section>
  )
}

export default About