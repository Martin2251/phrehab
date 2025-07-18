// components/Hero.jsx
import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Images/weighted-squat-exercise.jpg" // You'll need to add this image to your public folder
          alt="Physiotherapy hands treatment"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-20 p-6">
        <div className="flex items-center">
          <div className="flex items-center space-x-3">
            {/* Logo placeholder - you can replace with your actual logo */}
          
            <div>
              <h1 className="text-xl font-bold text-white">
               PH REHAB
              </h1>
              <p className="text-sm text-orange-500 font-medium">
                MSK Phsyio Health Specialist
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
         PH Rehab
        </h2>
        
        <p className="text-2xl md:text-3xl text-white mb-12 font-medium">
          Restoring Strength and Reducing Pain
        </p>
        
        <Link 
          href="/book-appointment"
          className="inline-block bg-black text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-800 transition-colors duration-300 shadow-lg hover:shadow-xl"
        >
          Book an Appointment
        </Link>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/10 to-transparent z-5"></div>
    </section>
  )
}
