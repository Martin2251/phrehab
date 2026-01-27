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
         <strong> I’m Prince – a Physiotherapist who understands that “rest” isn’t always the
answer.</strong>
              </p>
                   <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed ">
       As an avid Weightlifter with a BSc in Sports and Exercise Science, I am fully aware
of the frustrations that come with being sidelined by injury. While exploring career
paths I fell in love with the rehab aspect of exercise and earned my second degree in
Physiotherapy in 2021. This gives me the “best of both worlds” approach to rehab.
              </p>
                    
      <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed ">
    Currently, I spend my time working in MSK within the NHS and on the sidelines of
Rugby Union. I’ve assisted countless individuals in managing their pain and hitting
their goals regardless of their skill level.
              </p>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed ">
          If you want to understand your body better and find a way to train around your
injuries rather than just stopping altogether, let’s talk. <strong>Enquire today to get started.</strong>
              </p>
              
       
              
            
              

              
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
          
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
  {/* Left Image */}
  <div className="relative h-64 sm:h-80 lg:h-96 xl:h-[28rem] rounded-lg overflow-hidden shadow-lg">
    <Image
      src="/Images/phimage2.png" 
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
      src="/Images/phimage1.png"
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